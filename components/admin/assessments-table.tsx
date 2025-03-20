import { formatDistanceToNow } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Assessment {
  id: string
  name: string
  email: string
  company: string
  companySize: string
  industry: string
  currentSecurity: string
  concerns: string
  createdAt: Date
}

export function AssessmentsTable({ assessments }: { assessments: Assessment[] }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Company Size</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No assessments found
              </TableCell>
            </TableRow>
          ) : (
            assessments.map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell className="font-medium">{assessment.name}</TableCell>
                <TableCell>{assessment.company}</TableCell>
                <TableCell>{assessment.industry}</TableCell>
                <TableCell>{assessment.companySize}</TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDistanceToNow(new Date(assessment.createdAt), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

