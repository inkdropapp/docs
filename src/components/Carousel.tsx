'use client'

import clsx from 'clsx'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

const AUTOPLAY_DELAY_MS = 30000

type CarouselContextValue = {
  selectedIndex: number
  scrollTo: (index: number) => void
}

const CarouselContext = createContext<CarouselContextValue>({
  selectedIndex: 0,
  scrollTo: () => {},
})

export function Carousel({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([])
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: AUTOPLAY_DELAY_MS })],
  )

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    const syncState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    syncState()
    emblaApi.on('select', syncState).on('reInit', syncState)

    return () => {
      emblaApi.off('select', syncState).off('reInit', syncState)
    }
  }, [emblaApi])

  return (
    <CarouselContext.Provider value={{ selectedIndex, scrollTo }}>
      <div className="my-8">
        <div ref={viewportRef} className="overflow-hidden">
          {/* touch-pan-y keeps vertical page scrolling available while dragging */}
          <div className="flex touch-pan-y select-none">{children}</div>
        </div>
        <div className="not-prose mt-4 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex}
              onClick={() => scrollTo(index)}
              className={clsx(
                'h-1.5 w-12 rounded-full transition-colors',
                index === selectedIndex
                  ? 'bg-slate-500 dark:bg-slate-300'
                  : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600',
              )}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

/**
 * One slide: media on top, the Markdown children below it.
 *
 * Clicking an unselected slide brings it into focus. Embla suppresses clicks
 * that end a drag, so this doesn't fire when the user was swiping.
 *
 * `title` is an attribute rather than a Markdown `###` on purpose: it renders
 * as a real heading element, but is not a Markdoc heading node, so slide titles
 * stay out of the page's table of contents.
 */
export function CarouselItem({
  index,
  image,
  video,
  alt,
  title,
  children,
}: {
  index: number
  image?: string
  video?: string
  alt: string
  title?: string
  children: React.ReactNode
}) {
  const { selectedIndex, scrollTo } = useContext(CarouselContext)
  const isSelected = index === selectedIndex

  return (
    <div
      onClick={() => scrollTo(index)}
      className={clsx(
        'w-[85%] shrink-0 px-3 transition-opacity duration-500 md:w-4/5',
        isSelected ? 'opacity-100' : 'cursor-pointer opacity-40',
      )}
    >
      <div className="not-prose">
        {video ? (
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            playsInline
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full rounded-lg shadow-lg"
          />
        )}
      </div>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}
