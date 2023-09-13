import { useId } from 'react'
import PencilWrite from '@/components/icons/pencil-write.svg'
import AddCircle from '@/components/icons/add-circle.svg'
import Cog from '@/components/icons/cog.svg'
import DatabaseSync from '@/components/icons/database-sync.svg'
import Search from '@/components/icons/search.svg'
import Filter1 from '@/components/icons/filter-1.svg'
import View1 from '@/components/icons/view-1.svg'
import LayoutTwoColumns from '@/components/icons/layout-two-columns.svg'

const svgIcons = {
  'pencil-write': PencilWrite,
  'add-circle': AddCircle,
  'cog': Cog,
  'database-sync': DatabaseSync,
  'search': Search,
  'filter-1': Filter1,
  'view-1': View1,
  'layout-two-columns': LayoutTwoColumns
}

export function SvgIcon(props) {
  const id = useId()
  const { name } = props
  const SvgIcon = svgIcons[name]
  console.log('SvgIcon?:', name, SvgIcon, props)

  return (
    <span className='inline-flex text-black dark:text-white my-0'>
      <SvgIcon aria-hidden="true" width={18} height={18} />
    </span>
  )
}
