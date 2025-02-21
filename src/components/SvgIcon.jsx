import { useId } from 'react'
import ArchiveRestore from '@/components/icons/archive-restore.svg'
import ArrowDown1 from '@/components/icons/arrow-down-1.svg'
import ArrowLeft1 from '@/components/icons/arrow-left-1.svg'
import ArrowCircleRight from '@/components/icons/arrow-circle-right.svg'
import AddCircle from '@/components/icons/add-circle.svg'
import BookClose2 from '@/components/icons/book-close-2.svg'
import Bonsai from '@/components/icons/bonsai.svg'
import Bin from '@/components/icons/bin-1.svg'
import Bug from '@/components/icons/bug.svg'
import Cog from '@/components/icons/cog.svg'
import DatabaseSync from '@/components/icons/database-sync.svg'
import Filter1 from '@/components/icons/filter-1.svg'
import History from '@/components/icons/history.svg'
import LayoutTwoColumns from '@/components/icons/layout-two-columns.svg'
import Learn from '@/components/icons/learn.svg'
import Library from '@/components/icons/library.svg'
import PencilWrite from '@/components/icons/pencil-write.svg'
import Research from '@/components/icons/research.svg'
import Rabbit from '@/components/icons/rabbit.svg'
import Search from '@/components/icons/search.svg'
import Idea from '@/components/icons/idea.svg'
import TagsDouble from '@/components/icons/tags-double.svg'
import Troubleshooting from '@/components/icons/troubleshooting.svg'
import View1 from '@/components/icons/view-1.svg'
import NavigationMenuVertical from '@/components/icons/navigation-menu-vertical.svg'
import NavigationMenuHorizontalBold from '@/components/icons/navigation-menu-horizontal-bold.svg'
import InfoCircle from '@/components/icons/information-circle.svg'
import Login from '@/components/icons/login-1.svg'
import SettingsCogs from '@/components/icons/settings-cogs.svg'
import Server from '@/components/icons/server.svg'

const svgIcons = {
  'arrow-down-1': ArrowDown1,
  'arrow-left-1': ArrowLeft1,
  'arrow-circle-right': ArrowCircleRight,
  'pencil-write': PencilWrite,
  'add-circle': AddCircle,
  'book-close-2': BookClose2,
  bonsai: Bonsai,
  bug: Bug,
  'bin-1': Bin,
  cog: Cog,
  'database-sync': DatabaseSync,
  search: Search,
  idea: Idea,
  'filter-1': Filter1,
  'view-1': View1,
  'layout-two-columns': LayoutTwoColumns,
  learn: Learn,
  library: Library,
  history: History,
  research: Research,
  rabbit: Rabbit,
  troubleshooting: Troubleshooting,
  'navigation-menu-vertical': NavigationMenuVertical,
  'navigation-menu-horizontal-bold': NavigationMenuHorizontalBold,
  'info-circle': InfoCircle,
  'archive-restore': ArchiveRestore,
  login: Login,
  'tags-double': TagsDouble,
  'settings-cogs': SettingsCogs,
  server: Server,
}

export function SvgIcon(props) {
  const id = useId()
  const { name, className, width, height, size } = props
  const SvgIcon = svgIcons[name]

  return (
    <span className={`inline-flex ${className}`}>
      <SvgIcon
        aria-hidden="true"
        width={size || width || 18}
        height={size || height || 18}
      />
    </span>
  )
}
