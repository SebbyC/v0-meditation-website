"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

export function MeditationTimer() {
  const [duration, setDuration] = useState(5) // minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60) // seconds
  const [isActive, setIsActive] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const bellRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for bell sound
    bellRef.current = new Audio("/bell.mp3")

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!hasStarted) {
      setTimeLeft(duration * 60)
    }
  }, [duration, hasStarted])

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout)
            setIsActive(false)
            // Play bell sound when timer ends
            if (bellRef.current) {
              bellRef.current.play()
            }
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isActive])

  const toggleTimer = () => {
    if (!hasStarted) {
      setHasStarted(true)
    }
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setHasStarted(false)
    setTimeLeft(duration * 60)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleDurationChange = (value: number[]) => {
    setDuration(value[0])
    if (!hasStarted) {
      setTimeLeft(value[0] * 60)
    }
  }

  return (
    <div className="p-6 border rounded-xl bg-background shadow-sm">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="duration" className="text-sm font-medium">
              Duration: {duration} minutes
            </label>
          </div>
          <Slider
            id="duration"
            min={1}
            max={60}
            step={1}
            value={[duration]}
            onValueChange={handleDurationChange}
            disabled={hasStarted}
            className={cn(hasStarted ? "opacity-50" : "")}
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-6xl font-bold tabular-nums">{formatTime(timeLeft)}</div>

          <div className="flex space-x-4">
            <Button onClick={toggleTimer} size="lg" className="bg-teal-600 hover:bg-teal-700 w-24">
              {isActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {isActive ? "Pause" : hasStarted ? "Resume" : "Start"}
            </Button>

            <Button onClick={resetTimer} variant="outline" size="lg" disabled={!hasStarted} className="w-24">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <Bell className="h-4 w-4 mr-2" />A bell will sound when your session ends
        </div>
      </div>
    </div>
  )
}
