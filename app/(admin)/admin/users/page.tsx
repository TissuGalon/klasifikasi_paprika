"use client"

import { useEffect, useState } from "react"
import { createSupabaseClient } from "@/utils/supabase/client"
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

type Profile = {
  id: string
  full_name: string | null
  role: string | null
}

const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: "id",
    header: "ID Pengguna",
    cell: ({ row }) => <div className="text-xs text-slate-500 font-mono truncate max-w-[150px]">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "full_name",
    header: "Nama Lengkap",
    cell: ({ row }) => <div className="font-medium text-slate-900">{row.getValue("full_name") || "Tanpa Nama"}</div>,
  },
  {
    accessorKey: "role",
    header: "Peran Akses",
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          role === 'admin' 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-slate-100 text-slate-700 border border-slate-200'
        }`}>
          {role === 'admin' ? 'Administrator' : 'Peneliti'}
        </span>
      )
    },
  },
]

export default function AdminUsersPage() {
  const [data, setData] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createSupabaseClient()

  useEffect(() => {
    async function fetchUsers() {
      const { data: profiles, error } = await supabase.from('profiles').select('*').order('role', { ascending: true })
      if (profiles) {
        setData(profiles)
      }
      setLoading(false)
    }
    fetchUsers()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight">Manajemen Pengguna</h2>
        <p className="text-slate-500 mt-2">Daftar semua pengguna terdaftar di platform.</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center p-12">
          <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  )
}
