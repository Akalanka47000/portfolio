import { useEffect, useState } from 'react'
import AudioSpectrum from 'react-audio-spectrum'

const Spectrum = (): JSX.Element => {
  const [played, setPlayed] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (process.browser && !played) {
        document.addEventListener('mousemove', playAudio)
      }
    }, 4000)
  }, [])

  const playAudio = () => {
    const audio = document.getElementById('audio-element') as HTMLAudioElement
    audio
      .play()
      .then(
        () => {
          audio.muted = false
          audio.volume = 0.05
          document.removeEventListener('mousemove', playAudio, true)
          document.removeEventListener('mousemove', playAudio, false)
          setPlayed(true)
        },
        () => {
          console.log('promise rejected')
        }
      )
      .catch(() => {
        console.log('autoplay disabled in chrome')
      })
  }

  return (
    <div>
      <div
        className="absolute w-screen bottom-0 left-0 flex justify-center opacity-80"
        id="spectrum-container"
      >
        <audio
          id="audio-element"
          src="/portfolio/audio/music.mp3"
          autoPlay={false}
          muted
          loop
        ></audio>
        <AudioSpectrum
          id="audio-canvas"
          height={150}
          width={
            process.browser
              ? document.getElementById('spectrum-container')?.clientWidth
              : 1920
          }
          audioId={'audio-element'}
          capColor={'#ff4000'}
          capHeight={6}
          meterWidth={3}
          meterCount={1000}
          meterColor={[
            { stop: 0, color: '#ffffff' },
            { stop: 0.5, color: '#000000' },
            { stop: 1, color: '#ffffff' },
          ]}
          gap={8}
        />
      </div>
    </div>
  )
}

export default Spectrum
