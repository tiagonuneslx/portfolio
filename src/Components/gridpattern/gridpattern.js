import React from 'react'
import PropTypes from 'prop-types'

GridPattern.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  squares: PropTypes.array,
}

export function GridPattern({
                              width = 24,
                              height = 24,
                              x = 0,
                              y = 0,
                              squares = [],
                              ...props
                            }) {

  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', fill: '#cfcfcf', stroke: '#cfcfcf', maskImage: 'radial-gradient(circle at center, white, transparent)', zIndex: -1 }}
      {...props}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#dot-pattern)`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}