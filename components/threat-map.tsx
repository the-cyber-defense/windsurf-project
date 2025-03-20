"use client"

import { useEffect, useRef } from "react"

export function ThreatMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create radar sweep
    const radar = document.createElement("div")
    radar.className = "radar-sweep"
    containerRef.current.appendChild(radar)

    // Generate random threat dots
    const generateDots = () => {
      if (!containerRef.current) return

      // Clear existing dots
      const existingDots = containerRef.current.querySelectorAll(".threat-map-dot")
      existingDots.forEach((dot) => dot.remove())

      // Create new dots
      const numDots = Math.floor(Math.random() * 10) + 5
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div")
        dot.className = "threat-map-dot"

        // Random position
        const left = Math.random() * 100
        const top = Math.random() * 100

        dot.style.left = `${left}%`
        dot.style.top = `${top}%`

        // Random animation delay
        dot.style.animationDelay = `${Math.random() * 3}s`

        containerRef.current.appendChild(dot)
      }
    }

    // Initial generation
    generateDots()

    // Regenerate dots periodically
    const interval = setInterval(generateDots, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative bg-[#061020] rounded-lg overflow-hidden">
      {/* World map background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/world-map.svg')] bg-no-repeat bg-center bg-contain"></div>

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 64, 175, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 64, 175, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Concentric circles */}
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5"></div>

      {/* Threat dots will be added dynamically */}
    </div>
  )
}

