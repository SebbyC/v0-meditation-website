"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  title: string
  duration: string
}

export function AudioPlayer({ title, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState("00:00")
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(80)

  // In a real app, we would use actual audio files
  // For this demo, we'll simulate playback
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Convert duration string to seconds for simulation
  const durationInSeconds = () => {
    const [minutes, seconds] = duration.split(":").map(Number)
    return minutes * 60 + seconds
  }

  useEffect(() => {
    // Simulate audio element
    audioRef.current = new Audio("/meditation-audio.mp3")

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const togglePlayPause = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    } else {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Handle play error (e.g., no audio file in demo)
          // Instead, we'll simulate playback
          simulatePlayback()
        })
      } else {
        simulatePlayback()
      }
    }
    setIsPlaying(!isPlaying)
  }

  const simulatePlayback = () => {
    const totalDuration = durationInSeconds()
    let elapsed = (progress * totalDuration) / 100

    intervalRef.current = setInterval(() => {
      elapsed += 0.1
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100)
      setProgress(newProgress)

      const minutes = Math.floor(elapsed / 60)
      const seconds = Math.floor(elapsed % 60)
      setCurrentTime(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)

      if (newProgress >= 100) {
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime("00:00")
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, 100)
  }

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0]
    setProgress(newProgress)

    const totalDuration = durationInSeconds()
    const newTime = (newProgress / 100) * totalDuration
    const minutes = Math.floor(newTime / 60)
    const seconds = Math.floor(newTime % 60)
    setCurrentTime(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)

    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  return (
    <div className="space-y-2 pt-2">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={togglePlayPause}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
        </Button>

        <div className="flex-1">
          <Slider
            value={[progress]}
            max={100}
            step={0.1}
            onValueChange={handleProgressChange}
            className="cursor-pointer"
          />
        </div>

        <div className="w-[3rem] text-xs text-right tabular-nums text-muted-foreground">
          {currentTime}/{duration}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleMute}>
          {isMuted || volume === 0 ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
          <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
        </Button>

        <div className="w-24">
          <Slider
            value={[isMuted ? 0 : volume]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
