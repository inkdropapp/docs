export function EmbeddedVideo(props) {
  const { src, type } = props

  return (
    <video controls playsInline muted className="mb-6 rounded-lg shadow-lg">
      <source src={src} type={type || 'video/mp4'} />
    </video>
  )
}
