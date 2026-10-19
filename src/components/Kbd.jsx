export function Kbd({ s, children }) {
  return (
    <kbd className="rounded-md border border-b-2 border-slate-300 bg-slate-50 px-2 py-1 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-600 dark:text-slate-300">
      {s || children}
    </kbd>
  )
}
