"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { name: "Pemindaian", href: "/scan", icon: "biotech" },
  { name: "Riwayat", href: "/history", icon: "history" },
  { name: "Penanganan", href: "/treatment", icon: "medication" },
  { name: "Profil", href: "/profile", icon: "account_circle" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white flex flex-col border-r border-stone-100 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="px-8 py-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <span className="material-symbols-outlined text-white text-xl">psychiatry</span>
        </div>
        <div>
          <h1 className="font-heading text-2xl font-black text-emerald-950 tracking-tighter">
            PhytoScan
          </h1>
          <p className="font-sans tracking-[0.15em] uppercase text-[9px] font-bold text-emerald-600/70">
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
                  ? "bg-emerald-50 text-emerald-700 shadow-sm"
                  : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full" />
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
        <div className="bg-emerald-950 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
          <div className="relative z-10">
            <h4 className="text-white font-bold text-sm mb-1">Mulai Analisis</h4>
            <p className="text-emerald-200/80 text-xs mb-4 leading-relaxed">Diagnosa penyakit dengan akurasi AI tinggi.</p>
            <Link href="/scan" className="w-full py-3 bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span className="text-xs uppercase tracking-wider">Scan Baru</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
