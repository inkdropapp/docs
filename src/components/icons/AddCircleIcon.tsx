export function AddCircleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        x1={12}
        y1={7.5}
        x2={12}
        y2={16.5}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        x1={7.5}
        y1={12}
        x2={16.5}
        y2={12}
      />
      <circle
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        cx={12}
        cy={12}
        r={11.25}
      />
    </svg>
  )
}
