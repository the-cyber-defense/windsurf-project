import { getLeads } from "@/lib/actions"
import { LeadsTable } from "@/components/admin/leads-table"

export default async function LeadsPage() {
  const { data: leads = [] } = (await getLeads()) || { data: [] }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Leads Management</h1>
      <LeadsTable leads={leads} />
    </div>
  )
}

