import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"

interface Lead {
  id: string
  name: string
  email: string
  company: string
  status: string
  createdAt: Date
}

export function RecentLeads({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return <p className="text-muted-foreground">No leads yet</p>
  }

  return (
    <div className="space-y-4">
      {leads.map((lead) => (
        <div key={lead.id} className="flex items-center justify-between border-b pb-2">
          <div>
            <p className="font-medium">{lead.name}</p>
            <p className="text-sm text-muted-foreground">{lead.email}</p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
            </p>
          </div>
          <Badge variant={lead.status === "NEW" ? "default" : "outline"}>{lead.status}</Badge>
        </div>
      ))}
    </div>
  )
}

