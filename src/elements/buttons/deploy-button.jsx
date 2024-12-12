/* eslint-disable react/prop-types */
import React from 'react'

export default function DeployButton (props) {
  return (
      <button {...props} className="btn-github">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="16"
          height="16"
          viewBox="-20 -20 300 300"
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
              strokemiterline: 10,
              fill: 'none',
              fillRule: 'nonzero',
              opacity: 1
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <path
              d="M 62.839 26.507 l -3.231 0.467 c -4.928 0.712 -9.581 3.043 -13.102 6.564 l -7.579 7.579 c -0.418 0.418 -0.998 0.633 -1.59 0.578 l -5.791 -0.512 c -1.09 -0.097 -2.168 0.294 -2.945 1.07 l -5.657 5.657 l 4.176 0.369 c 0.468 0.041 0.906 0.246 1.238 0.578 l 12.785 12.785 c 0.332 0.332 0.537 0.771 0.578 1.238 l 0.369 4.176 l 5.658 -5.657 c 0.776 -0.777 1.167 -1.851 1.07 -2.946 l -0.512 -5.79 c -0.052 -0.589 0.159 -1.172 0.578 -1.59 l 7.579 -7.579 c 3.52 -3.521 5.851 -8.174 6.563 -13.101 l 0.467 -3.231 c 0.036 -0.25 -0.087 -0.415 -0.164 -0.492 C 63.253 26.593 63.088 26.469 62.839 26.507 z M 52.267 41.268 c -0.976 0.976 -2.559 0.976 -3.536 0 s -0.976 -2.559 0 -3.536 s 2.559 -0.976 3.536 0 S 53.244 40.292 52.267 41.268 z"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokemiterline: 10,
                fill: props.color || '#FFF',
                fillRule: 'nonzero',
                opacity: 1
              }}
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 67.452 27.733 l -0.467 3.232 c -0.836 5.776 -3.568 11.23 -7.694 15.357 l -6.919 6.919 l 0.43 4.86 c 0.201 2.277 -0.61 4.51 -2.227 6.126 l -8.687 8.687 c -0.381 0.382 -0.893 0.586 -1.415 0.586 c -0.229 0 -0.46 -0.039 -0.683 -0.12 c -0.73 -0.266 -1.241 -0.93 -1.309 -1.704 L 37.8 63.957 L 26.043 52.2 l -7.719 -0.683 c -0.774 -0.068 -1.438 -0.579 -1.704 -1.309 c -0.265 -0.73 -0.083 -1.549 0.466 -2.098 l 8.687 -8.687 c 1.615 -1.617 3.846 -2.426 6.125 -2.227 l 4.861 0.43 l 6.918 -6.918 c 4.127 -4.127 9.581 -6.86 15.357 -7.695 l 3.231 -0.467 c 1.438 -0.209 2.86 0.263 3.891 1.293 C 67.188 24.872 67.66 26.291 67.452 27.733 z"
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
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
        <span>View in Deploy</span>
      </button>
  )
}
