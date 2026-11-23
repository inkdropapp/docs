export function EmbeddedVideo(props) {
  const { src, type, poster } = props

  return (
    // oxlint-disable-next-line jsx-a11y/media-has-caption -- no caption tracks exist for these videos
    <video controls playsInline className="mb-6 rounded-lg shadow-lg" poster={poster}>
      <source src={src} type={type || 'video/mp4'} />
    </video>
  )
}
