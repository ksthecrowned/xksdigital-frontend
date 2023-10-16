import React from 'react'

interface VideoHeroProps {}

const VideoHero:React.FC<VideoHeroProps> = () => {
    return (
        <section className="w-full pt-16">
            <video controls={false} autoPlay muted loop className="w-full relative inset-0 w-full h-full object-cover"  style={{ height: `calc(100vh - 60px)` }}>
                <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
        </section>
    )
}

export default VideoHero