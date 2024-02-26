import Image from 'next/image'

type Props = {
  videoId: string
}

export function YouTubeVideo(props: Props) {
  const { videoId } = props

  return (
    <div className="aspect-video">
      <iframe
        className="mb-6 h-full w-full rounded-lg border border-sky-900"
        src={`https://www.youtube.com/embed/${videoId}`}
        width="100%"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
