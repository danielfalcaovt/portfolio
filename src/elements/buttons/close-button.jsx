/* eslint-disable react/prop-types */
import React from 'react'

export default function CloseButton (props) {
  return (
      <svg
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="50"
        height="50"
        viewBox="0 0 260 260"
        xmlSpace="preserve"
      >
        <defs></defs>
        <g
          style={{
            stroke: 'none',
            strokeWidth: 0,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'none',
            fillRule: 'nonzero',
            opacity: 1
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 64.633 57.563 c 1.953 1.952 1.953 5.118 0 7.07 c -0.976 0.977 -2.256 1.465 -3.535 1.465 s -2.56 -0.488 -3.535 -1.465 L 45 52.071 L 32.438 64.633 c -0.977 0.977 -2.256 1.465 -3.536 1.465 s -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 L 37.929 45 L 25.367 32.438 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 L 45 37.929 l 12.562 -12.562 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 L 52.071 45 L 64.633 57.563 z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: props.color || '#FFF',
              fillRule: 'nonzero',
              opacity: 1
            }}
            transform="matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
  )
}
