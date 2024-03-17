export const Hero = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      // className='h-[86vh] object-cover w-full -translate-y-16'
      className='h-[86vh] object-cover w-full -mt-24 -z-10 rounded-b-3xl'
      style={{ backgroundImage: 'url(&quot;https://assets-global.website-files.com/64030c6c8c8d223e7445426c/65e9e5882668da02ae58e44b_HIGHLIGHT VIDEO SMALL-poster-00001.jpg&quot;)' }}
    >
      <source src="https://assets-global.website-files.com/64030c6c8c8d223e7445426c/65e9e5882668da02ae58e44b_HIGHLIGHT VIDEO SMALL-transcode.mp4"></source>
      <source src="https://assets-global.website-files.com/64030c6c8c8d223e7445426c/65e9e5882668da02ae58e44b_HIGHLIGHT VIDEO SMALL-transcode.webm"></source>
    </video>
  )
}
