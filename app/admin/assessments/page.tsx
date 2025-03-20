import { getAssessments } from "@/lib/actions"
import { AssessmentsTable } from "@/components/admin/assessments-table"

export default async function AssessmentsPage() {
  const { data: assessments = [] } = (await getAssessments()) || { data: [] }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security Assessments</h1>
      <AssessmentsTable assessments={assessments} />
    </div>
  )
}

