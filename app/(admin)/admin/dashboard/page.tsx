export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight">Dashboard Admin</h2>
        <p className="text-slate-500 mt-2">Ringkasan aktivitas platform PhytoScan.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined">group</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Peneliti</p>
            <p className="text-3xl font-heading font-black text-slate-900">42</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
            <span className="material-symbols-outlined">biotech</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Klasifikasi</p>
            <p className="text-3xl font-heading font-black text-slate-900">1,248</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
            <span className="material-symbols-outlined">coronavirus</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Deteksi Terbanyak</p>
            <p className="text-xl font-heading font-black text-slate-900">Bercak Daun</p>
          </div>
        </div>
      </div>
    </div>
  )
}
