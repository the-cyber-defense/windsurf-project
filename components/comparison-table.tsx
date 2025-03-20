import { Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface CompanyType {
  name: string
  highlight: boolean
}

interface FeatureType {
  name: string
  ratings: number[]
}

interface ComparisonTableProps {
  companies: CompanyType[]
  features: FeatureType[]
}

export function ComparisonTable({ companies, features }: ComparisonTableProps) {
  return (
    <div className="rounded-xl border shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[200px]">Feature</TableHead>
            {companies.map((company, i) => (
              <TableHead key={i} className={company.highlight ? "bg-primary/10 text-primary font-medium" : ""}>
                {company.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              {feature.ratings.map((rating, j) => (
                <TableCell key={j} className={companies[j].highlight ? "bg-primary/5" : ""}>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${idx < rating ? (companies[j].highlight ? "text-primary fill-primary" : "text-yellow-500 fill-yellow-500") : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

