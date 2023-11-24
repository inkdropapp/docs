import { useId } from 'react'
import PencilWrite from '@/components/icons/pencil-write.svg'
import AddCircle from '@/components/icons/add-circle.svg'
import Cog from '@/components/icons/cog.svg'
import DatabaseSync from '@/components/icons/database-sync.svg'
import Search from '@/components/icons/search.svg'
import Filter1 from '@/components/icons/filter-1.svg'
import View1 from '@/components/icons/view-1.svg'
import LayoutTwoColumns from '@/components/icons/layout-two-columns.svg'
import History from '@/components/icons/history.svg'
import NavigationMenuVertical from '@/components/icons/navigation-menu-vertical.svg'
import InfoCircle from '@/components/icons/information-circle.svg'
import ArchiveRestore from '@/components/icons/archive-restore.svg'
import Login from '@/components/icons/login-1.svg'

const svgIcons = {
  'pencil-write': PencilWrite,
  'add-circle': AddCircle,
  cog: Cog,
  'database-sync': DatabaseSync,
  search: Search,
  'filter-1': Filter1,
  'view-1': View1,
  'layout-two-columns': LayoutTwoColumns,
  history: History,
  'navigation-menu-vertical': NavigationMenuVertical,
  'info-circle': InfoCircle,
  'archive-restore': ArchiveRestore,
  login: Login,
}

export function SvgIcon(props) {
  const id = useId()
  const { name, className, width, height } = props
  const SvgIcon = svgIcons[name]

  return (
    <span className={`inline-flex ${className}`}>
      <SvgIcon aria-hidden="true" width={width || 18} height={height || 18} />
    </span>
  )
}
