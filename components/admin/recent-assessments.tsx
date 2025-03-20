import { formatDistanceToNow } from "date-fns"

interface Assessment {
  id: string
  name: string
  email: string
  company: string
  industry: string
  createdAt: Date
}

export function RecentAssessments({ assessments }: { assessments: Assessment[] }) {
  if (assessments.length === 0) {
    return <p className="text-muted-foreground">No assessments yet</p>
  }

  return (
    <div className="space-y-4">
      {assessments.map((assessment) => (
        <div key={assessment.id} className="flex items-center justify-between border-b pb-2">
          <div>
            <p className="font-medium">{assessment.name}</p>
            <p className="text-sm text-muted-foreground">{assessment.company}</p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(assessment.createdAt), { addSuffix: true })}
            </p>
          </div>
          <div className="text-sm bg-muted px-2 py-1 rounded">{assessment.industry}</div>
        </div>
      ))}
    </div>
  )
}

