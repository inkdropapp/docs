type Props = {
  children: React.ReactNode
}

export function Mark({ children }: Props) {
  return (
    <mark className="inline-block -rotate-1 bg-yellow-200 px-1 font-bold text-slate-900">
      {children}
    </mark>
  )
}
