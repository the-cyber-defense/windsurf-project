"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  message: z.string().optional(),
})

export async function submitContactForm(formData: FormData) {
  try {
    const validatedFields = contactFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message") || "",
    })

    const lead = await prisma.lead.create({
      data: {
        name: validatedFields.name,
        email: validatedFields.email,
        company: validatedFields.company,
        message: validatedFields.message || "",
        status: "NEW",
      },
    })

    revalidatePath("/")
    return { success: true, message: "Thank you! We'll be in touch soon." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    console.error("Form submission error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function submitAssessment(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries())

    const assessment = await prisma.securityAssessment.create({
      data: {
        companySize: data.companySize as string,
        industry: data.industry as string,
        currentSecurity: data.currentSecurity as string,
        concerns: data.concerns as string,
        email: data.email as string,
        name: data.name as string,
        company: data.company as string,
      },
    })

    revalidatePath("/")
    return {
      success: true,
      message: "Assessment submitted successfully. We'll analyze your results and contact you soon.",
    }
  } catch (error) {
    console.error("Assessment submission error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function getLeads() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: leads }
  } catch (error) {
    console.error("Error fetching leads:", error)
    return { success: false, message: "Failed to fetch leads", data: [] }
  }
}

export async function getAssessments() {
  try {
    const assessments = await prisma.securityAssessment.findMany({
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: assessments }
  } catch (error) {
    console.error("Error fetching assessments:", error)
    return { success: false, message: "Failed to fetch assessments", data: [] }
  }
}

export async function updateLeadStatus(id: string, status: string) {
  try {
    await prisma.lead.update({
      where: { id },
      data: { status },
    })
    revalidatePath("/admin/leads")
    return { success: true }
  } catch (error) {
    console.error("Error updating lead status:", error)
    return { success: false, message: "Failed to update lead status" }
  }
}

