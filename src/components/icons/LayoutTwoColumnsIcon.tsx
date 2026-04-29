export function LayoutTwoColumnsIcon(
  props: React.ComponentPropsWithoutRef<'svg'>,
) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        x={1.5}
        y={1.497}
        width={21}
        height={21}
        rx={1.5}
        ry={1.5}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        x1={12}
        y1={1.497}
        x2={12}
        y2={22.497}
      />
    </svg>
  )
}
