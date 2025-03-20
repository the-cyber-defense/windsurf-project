import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create default admin user if it doesn't exist
  const adminEmail = process.env.ADMIN_EMAIL || "admin@sorc3ry.com"
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin123!"

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    const hashedPassword = await hash(adminPassword, 10)

    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    })

    console.log(`Admin user created with email: ${adminEmail}`)
  } else {
    console.log("Admin user already exists")
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

