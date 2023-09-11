export function Kbd({ children }) {
  return (
    <kbd className='bg-slate-50 dark:bg-slate-600 rounded-md  border border-b-2 border-slate-300 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 px-2 py-1'>
      {children}
    </kbd>
  )
}
