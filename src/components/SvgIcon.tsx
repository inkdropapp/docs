import { AddCircleIcon } from '@/components/icons/AddCircleIcon'
import { ArchiveRestoreIcon } from '@/components/icons/ArchiveRestoreIcon'
import { ArrowCircleRightIcon } from '@/components/icons/ArrowCircleRightIcon'
import { ArrowDown1Icon } from '@/components/icons/ArrowDown1Icon'
import { ArrowLeft1Icon } from '@/components/icons/ArrowLeft1Icon'
import { Bin1Icon } from '@/components/icons/Bin1Icon'
import { BonsaiIcon } from '@/components/icons/BonsaiIcon'
import { BookClose2Icon } from '@/components/icons/BookClose2Icon'
import { BugIcon } from '@/components/icons/BugIcon'
import { CogIcon } from '@/components/icons/CogIcon'
import { DatabaseSyncIcon } from '@/components/icons/DatabaseSyncIcon'
import { Filter1Icon } from '@/components/icons/Filter1Icon'
import { HistoryIcon } from '@/components/icons/HistoryIcon'
import { IdeaIcon } from '@/components/icons/IdeaIcon'
import { InformationCircleIcon } from '@/components/icons/InformationCircleIcon'
import { LayoutTwoColumnsIcon } from '@/components/icons/LayoutTwoColumnsIcon'
import { LearnIcon } from '@/components/icons/LearnIcon'
import { LibraryIcon } from '@/components/icons/LibraryIcon'
import { Login1Icon } from '@/components/icons/Login1Icon'
import { NavigationMenuHorizontalBoldIcon } from '@/components/icons/NavigationMenuHorizontalBoldIcon'
import { NavigationMenuVerticalIcon } from '@/components/icons/NavigationMenuVerticalIcon'
import { PencilWriteIcon } from '@/components/icons/PencilWriteIcon'
import { RabbitIcon } from '@/components/icons/RabbitIcon'
import { ResearchIcon } from '@/components/icons/ResearchIcon'
import { SearchGlyphIcon } from '@/components/icons/SearchGlyphIcon'
import { ServerIcon } from '@/components/icons/ServerIcon'
import { SettingsCogsIcon } from '@/components/icons/SettingsCogsIcon'
import { TagsDoubleIcon } from '@/components/icons/TagsDoubleIcon'
import { TroubleshootingIcon } from '@/components/icons/TroubleshootingIcon'
import { View1Icon } from '@/components/icons/View1Icon'

const svgIcons = {
  'arrow-down-1': ArrowDown1Icon,
  'arrow-left-1': ArrowLeft1Icon,
  'arrow-circle-right': ArrowCircleRightIcon,
  'pencil-write': PencilWriteIcon,
  'add-circle': AddCircleIcon,
  'book-close-2': BookClose2Icon,
  bonsai: BonsaiIcon,
  bug: BugIcon,
  'bin-1': Bin1Icon,
  cog: CogIcon,
  'database-sync': DatabaseSyncIcon,
  search: SearchGlyphIcon,
  idea: IdeaIcon,
  'filter-1': Filter1Icon,
  'view-1': View1Icon,
  'layout-two-columns': LayoutTwoColumnsIcon,
  learn: LearnIcon,
  library: LibraryIcon,
  history: HistoryIcon,
  research: ResearchIcon,
  rabbit: RabbitIcon,
  troubleshooting: TroubleshootingIcon,
  'navigation-menu-vertical': NavigationMenuVerticalIcon,
  'navigation-menu-horizontal-bold': NavigationMenuHorizontalBoldIcon,
  'info-circle': InformationCircleIcon,
  'archive-restore': ArchiveRestoreIcon,
  login: Login1Icon,
  'tags-double': TagsDoubleIcon,
  'settings-cogs': SettingsCogsIcon,
  server: ServerIcon,
} as const

type IconName = keyof typeof svgIcons

type SvgIconProps = {
  name: IconName
  className?: string
  width?: number
  height?: number
  size?: number
}

export function SvgIcon({
  name,
  className,
  width,
  height,
  size,
}: SvgIconProps) {
  const Icon = svgIcons[name]
  return (
    <span className={`inline-flex ${className ?? ''}`}>
      <Icon
        aria-hidden="true"
        width={size ?? width ?? 18}
        height={size ?? height ?? 18}
      />
    </span>
  )
}
