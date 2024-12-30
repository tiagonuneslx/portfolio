import React from 'react';
import PropTypes from 'prop-types';

DotPattern.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  cr: PropTypes.number,
};

export function DotPattern({
                             width = 16,
                             height = 16,
                             x = 0,
                             y = 0,
                             cx = 1,
                             cy = 1,
                             cr = 1,
                             ...props
                           }) {

  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', fill: '#c3c3c3', maskImage: 'radial-gradient(circle at center, white, transparent)' }}
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
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#dot-pattern)`} />
    </svg>
  )
}