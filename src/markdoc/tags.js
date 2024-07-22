import { Callout } from '@/components/Callout'
import { Kbd } from '@/components/Kbd'
import { Checkmark } from '@/components/Checkmark'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { ThumbLink, ThumbLinks } from '@/components/ThumbLinks'
import { SvgIcon } from '@/components/SvgIcon'
import { SnippetWindow } from '@/components/SnippetWindow'
import { EmbeddedVideo } from '@/components/EmbeddedVideo'
import { CalloutToForum } from '@/components/CalloutToForum'
import { Subscript } from '@/components/Subscript'
import { Superscript } from '@/components/Superscript'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  'thumb-links': {
    render: ThumbLinks,
    attributes: {
      category: { type: Number },
    },
  },
  'thumb-link': {
    selfClosing: true,
    render: ThumbLink,
    attributes: {
      title: { type: String },
      cover: { type: String },
      href: { type: String },
    },
  },
  kbd: {
    attributes: {
      s: { type: String },
    },
    render: Kbd,
  },
  check: {
    attributes: {
      v: { type: Boolean },
    },
    render: Checkmark,
  },
  icon: {
    attributes: {
      name: { type: String },
      size: { type: Number },
    },
    render: SvgIcon,
  },
  snippet: {
    attributes: {
      filename: { type: String },
      lang: { type: String },
    },
    render: SnippetWindow,
  },
  video: {
    attributes: {
      src: { type: String },
      poster: { type: String },
      type: { type: String },
    },
    render: EmbeddedVideo,
  },
  sub: {
    render: Subscript,
  },
  sup: {
    render: Superscript,
  },
}

export default tags
