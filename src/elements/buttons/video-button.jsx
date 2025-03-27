/* eslint-disable react/prop-types */
import React from 'react'

export default function VideoButton (props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className="btn-github">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="white"
          stroke="black"
          strokeWidth="0"
        />
        <polygon points="10,8 16,12 10,16" fill="black" />
      </svg>
      <span>Video</span>
    </a>
  )
}
