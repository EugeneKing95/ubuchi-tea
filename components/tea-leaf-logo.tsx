"use client"

import Link from "next/link"

export function TeaLeafLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
      {/* Two Tea Leaves */}
      <div className="flex items-center space-x-1">
        {/* Left Leaf */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
        >
          <path
            d="M8 2C8 2 4.5 3.5 4.5 8C4.5 11 6 13.5 8 14.5C10 13.5 11.5 11 11.5 8C11.5 3.5 8 2 8 2Z"
            fill="#C9A063"
            className="drop-shadow-sm"
          />
          {/* Leaf vein */}
          <path
            d="M8 2C8 2 9.5 4.5 8.5 8C8.2 9.5 8 11 8 14.5"
            stroke="#3B5044"
            strokeWidth="0.5"
            fill="none"
            opacity="0.6"
          />
        </svg>

        {/* Right Leaf */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        >
          <path
            d="M8 2C8 2 4.5 3.5 4.5 8C4.5 11 6 13.5 8 14.5C10 13.5 11.5 11 11.5 8C11.5 3.5 8 2 8 2Z"
            fill="#C9A063"
            className="drop-shadow-sm"
          />
          {/* Leaf vein */}
          <path
            d="M8 2C8 2 9.5 4.5 8.5 8C8.2 9.5 8 11 8 14.5"
            stroke="#3B5044"
            strokeWidth="0.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Clean Typography */}
      <div
        className="text-2xl font-normal tracking-wide transition-all duration-300 group-hover:opacity-80"
        style={{
          color: "#C9A063",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: "400",
        }}
      >
        Ūbūchi
      </div>
    </Link>
  )
}
