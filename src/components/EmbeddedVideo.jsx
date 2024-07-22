export function EmbeddedVideo(props) {
  const { src, type, poster } = props

  return (
    <video
      controls
      playsInline
      muted
      className="mb-6 rounded-lg shadow-lg"
      poster={poster}
    >
      <source src={src} type={type || 'video/mp4'} />
    </video>
  )
}
