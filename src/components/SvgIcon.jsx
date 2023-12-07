import { useId } from 'react'
import ArchiveRestore from '@/components/icons/archive-restore.svg'
import ArrowDown1 from '@/components/icons/arrow-down-1.svg'
import ArrowCircleRight from '@/components/icons/arrow-circle-right.svg'
import AddCircle from '@/components/icons/add-circle.svg'
import BookClose2 from '@/components/icons/book-close-2.svg'
import Bin from '@/components/icons/bin-1.svg'
import Cog from '@/components/icons/cog.svg'
import DatabaseSync from '@/components/icons/database-sync.svg'
import Filter1 from '@/components/icons/filter-1.svg'
import History from '@/components/icons/history.svg'
import LayoutTwoColumns from '@/components/icons/layout-two-columns.svg'
import PencilWrite from '@/components/icons/pencil-write.svg'
import Search from '@/components/icons/search.svg'
import TagsDouble from '@/components/icons/tags-double.svg'
import View1 from '@/components/icons/view-1.svg'
import NavigationMenuVertical from '@/components/icons/navigation-menu-vertical.svg'
import InfoCircle from '@/components/icons/information-circle.svg'
import Login from '@/components/icons/login-1.svg'

const svgIcons = {
  'arrow-down-1': ArrowDown1,
  'arrow-circle-right': ArrowCircleRight,
  'pencil-write': PencilWrite,
  'add-circle': AddCircle,
  'book-close-2': BookClose2,
  'bin-1': Bin,
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
  'tags-double': TagsDouble,
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
