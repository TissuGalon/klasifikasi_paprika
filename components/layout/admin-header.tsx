"use client"

import { cn } from "@/lib/utils"
import { createSupabaseClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export function AdminHeader() {
  const supabase = createSupabaseClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <header className={cn(
      "w-full sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl flex justify-between items-center px-10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-200 dark:border-slate-800",
      "h-[76px]"
    )}>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
            search
          </span>
          <input
            type="text"
            className="pl-12 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-emerald-500/50 rounded-xl text-sm w-72 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 font-medium"
            placeholder="Cari data admin..."
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-full shadow-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
          <span className="text-[10px] font-black text-red-800 dark:text-red-400 uppercase tracking-widest">
            Admin Mode
          </span>
        </div>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
          <button className="p-2.5 text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button onClick={handleLogout} className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all" title="Keluar Mode Admin">
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
          <div className="h-10 w-10 mt-0.5 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 ml-2 shadow-sm hover:border-emerald-500 transition-colors cursor-pointer">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj2HncUJHwC4ISY1gkFnf6HnuBz9u4Ip5j_EmrS8RSpRtMDlQ8TGXZxBHPm4rGSSnBSmcCPrUCRqaIx8EkBIIj2pyfxW6dLDHTEuP1j-tTtYI52R8wJm6Ry3P5bI27Uwvrz4ztS1wa5N39XNccwvPoK5gGj3TETR0Jwz4bPIuPAjE9ZB1cOqgFeGPyCePslLc8PDY8tatxKAn-Rv8x3kD2TywD1F43cfxsblZ5dAS48Z2IcIkewdtckv4WaG9Ov09ojSNqZolAzOw"
              alt="Profil Admin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
