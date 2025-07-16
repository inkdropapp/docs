export function Checkmark({ v }: { v: boolean }) {
  return <input type="checkbox" checked={v} className="my-0" readOnly />
}
