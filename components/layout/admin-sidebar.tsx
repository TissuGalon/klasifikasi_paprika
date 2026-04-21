"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard Admin", href: "/admin/dashboard", icon: "dashboard" },
  { name: "Manajemen Pengguna", href: "/admin/users", icon: "group" },
  { name: "Riwayat Pemindaian", href: "/admin/history", icon: "history" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-950 flex flex-col border-r border-slate-800/60 z-50 text-slate-100 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="px-8 py-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg">
          <span className="material-symbols-outlined text-emerald-400 text-xl">admin_panel_settings</span>
        </div>
        <div>
          <h1 className="font-heading text-xl font-black text-white tracking-tighter">
            PhytoScan Admin
          </h1>
          <p className="font-sans tracking-[0.15em] uppercase text-[9px] font-bold text-slate-500">
            Precision Ag-Tech
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 px-4 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ease-in-out group relative overflow-hidden",
                isActive
                  ? "bg-slate-800/80 text-emerald-400 shadow-sm border border-slate-700/50"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              )}
              <span className={cn(
                "material-symbols-outlined transition-transform duration-300",
                isActive ? "fill-current scale-110" : "group-hover:scale-110"
              )}>
                {item.icon}
              </span>
              <span className={cn(
                "font-sans tracking-wide text-sm font-semibold",
                isActive ? "font-bold" : "font-medium"
              )}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-6 mt-auto">
        <Link href="/dashboard" className="w-full py-3.5 bg-slate-800 text-slate-300 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-700 hover:text-white border border-slate-700 shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px]">public</span>
          <span className="text-xs uppercase tracking-wider font-semibold">Beralih ke App</span>
        </Link>
      </div>
    </aside>
  )
}
