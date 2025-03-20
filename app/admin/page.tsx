import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getLeads, getAssessments } from "@/lib/actions"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { RecentLeads } from "@/components/admin/recent-leads"
import { RecentAssessments } from "@/components/admin/recent-assessments"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default async function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <Suspense fallback={<DashboardStatsSkeleton />}>
        <DashboardStatsWrapper />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>Latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<LeadsSkeleton />}>
              <RecentLeadsWrapper />
            </Suspense>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Assessments</CardTitle>
            <CardDescription>Latest security assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<AssessmentsSkeleton />}>
              <RecentAssessmentsWrapper />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

async function DashboardStatsWrapper() {
  const { data: leads = [] } = (await getLeads()) || { data: [] }
  const { data: assessments = [] } = (await getAssessments()) || { data: [] }

  const newLeads = leads.filter((lead) => lead.status === "NEW").length
  const totalLeads = leads.length
  const totalAssessments = assessments.length

  return <DashboardStats newLeads={newLeads} totalLeads={totalLeads} totalAssessments={totalAssessments} />
}

async function RecentLeadsWrapper() {
  const { data: leads = [] } = (await getLeads()) || { data: [] }
  return <RecentLeads leads={leads.slice(0, 5)} />
}

async function RecentAssessmentsWrapper() {
  const { data: assessments = [] } = (await getAssessments()) || { data: [] }
  return <RecentAssessments assessments={assessments.slice(0, 5)} />
}

function DashboardStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <Skeleton className="h-4 w-24" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-12 mb-2" />
            <Skeleton className="h-3 w-32" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function LeadsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between border-b pb-2">
          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-48 mb-1" />
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
      ))}
    </div>
  )
}

function AssessmentsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between border-b pb-2">
          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-48 mb-1" />
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
      ))}
    </div>
  )
}

