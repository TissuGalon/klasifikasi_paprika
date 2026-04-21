"use client"

import { useEffect, useState } from "react"
import { createSupabaseClient } from "@/utils/supabase/client"
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

type Classification = {
  id: string
  created_at: string
  result: string
  confidence: number
  status: string
  profiles?: { full_name: string } | null
}

const columns: ColumnDef<Classification>[] = [
  {
    accessorKey: "created_at",
    header: "Tanggal",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"))
      return <div className="text-sm font-medium">{date.toLocaleDateString('id-ID')} {date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit'})}</div>
    },
  },
  {
    id: "user",
    header: "Pengguna",
    cell: ({ row }) => {
      const profile = row.original.profiles
      return <div className="text-sm text-slate-700">{profile?.full_name || "Tanpa Nama / Sistem"}</div>
    },
  },
  {
    accessorKey: "result",
    header: "Hasil Identifikasi",
    cell: ({ row }) => <div className="font-bold text-slate-900">{row.getValue("result")}</div>,
  },
  {
    accessorKey: "confidence",
    header: "Akurasi",
    cell: ({ row }) => {
      const conf = parseFloat(row.getValue("confidence"))
      return <div className="text-sm text-slate-500 font-mono">{(conf * 100).toFixed(1)}%</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          status === 'VERIFIED' 
            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
            : 'bg-amber-100 text-amber-700 border border-amber-200'
        }`}>
          {status}
        </span>
      )
    },
  },
]

export default function AdminHistoryPage() {
  const [data, setData] = useState<Classification[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createSupabaseClient()

  useEffect(() => {
    async function fetchHistory() {
      // Menarik data classifications dan di-join dengan tabel profiles u/ mendapatkan nama
      const { data: records, error } = await supabase
        .from('classifications')
        .select('*, profiles(full_name)')
        .order('created_at', { ascending: false })
      
      if (records) {
        setData(records as Classification[])
      }
      setLoading(false)
    }
    fetchHistory()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight">Riwayat Pemindaian</h2>
        <p className="text-slate-500 mt-2">Daftar seluruh riwayat klasifikasi sistem oleh peneliti.</p>
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
