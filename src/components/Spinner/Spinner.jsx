const Spinner = () => {
  return (
    <svg
      style={{ display: 'block', shapeRendering: 'auto' }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(26.833333333333332,26.833333333333332)">
        <rect x="-19.5" y="-19.5" width="39" height="39" fill="#1d3f72">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.3s"
          />
        </rect>
      </g>
      <g transform="translate(73.16666666666667,26.833333333333332)">
        <rect x="-19.5" y="-19.5" width="39" height="39" fill="#5699d2">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.2s"
          />
        </rect>
      </g>
      <g transform="translate(26.833333333333332,73.16666666666667)">
        <rect x="-19.5" y="-19.5" width="39" height="39" fill="#d8ebf9">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="0s"
          />
        </rect>
      </g>
      <g transform="translate(73.16666666666667,73.16666666666667)">
        <rect x="-19.5" y="-19.5" width="39" height="39" fill="#71c2cc">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.1s"
          />
        </rect>
      </g>
    </svg>
  )
}

export default Spinner
