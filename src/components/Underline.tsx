type Props = {
  children: React.ReactNode
}

export function Underline({ children }: Props) {
  return (
    <span className="border-b-4 border-yellow-300 px-0.5 font-bold text-slate-900 dark:text-white">
      {children}
    </span>
  )
}
