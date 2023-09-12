'use client'
import { Fragment } from 'react'
import { Highlight } from 'prism-react-renderer'
import clsx from 'clsx'

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function SnippetWindow(props) {
  const { children, lang, filename } = props
  const code = children.props.children.trim()
  const tabs = [{ name: filename, isActive: true }, { name: 'package.json', isActive: false }]

  return (
    <div className="relative not-prose">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
      <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
        <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
        <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
        <div className="pl-4 pt-4">
          <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
          <div className="mt-4 flex space-x-2 text-xs">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={clsx(
                  'flex h-6 rounded-full',
                  tab.isActive
                    ? 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                    : 'text-slate-500'
                )}
              >
                <div
                  className={clsx(
                    'flex items-center rounded-full px-2.5',
                    tab.isActive && 'bg-slate-800'
                  )}
                >
                  {tab.name}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start px-1 text-sm">
            <div
              aria-hidden="true"
              className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
            >
              {Array.from({
                length: code.split('\n').length,
              }).map((_, index) => (
                <Fragment key={index}>
                  {(index + 1).toString().padStart(2, '0')}
                  <br />
                </Fragment>
              ))}
            </div>
            <Highlight
              code={code}
              language={lang}
              theme={{ plain: {}, styles: [] }}
            >
              {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
              }) => (
                <pre
                  className={clsx(
                    className,
                    'flex overflow-x-auto pb-6'
                  )}
                  style={style}
                >
                  <code className="px-4">
                    {tokens.map((line, lineIndex) => (
                      <div key={lineIndex} {...getLineProps({ line })}>
                        {line.map((token, tokenIndex) => (
                          <span
                            key={tokenIndex}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      </div>
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  )

}
