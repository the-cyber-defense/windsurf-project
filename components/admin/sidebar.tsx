"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Users, FileText, BarChart3, Settings, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/admin", label: "Dashboard", icon: <BarChart3 className="h-5 w-5" /> },
    { href: "/admin/leads", label: "Leads", icon: <Users className="h-5 w-5" /> },
    { href: "/admin/assessments", label: "Assessments", icon: <FileText className="h-5 w-5" /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <div className="w-64 bg-card border-r min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 p-2">
        <Shield className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold">Sorc3ry Admin</span>
      </div>

      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-left hover:bg-muted text-destructive hover:text-destructive mt-8"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  )
}

