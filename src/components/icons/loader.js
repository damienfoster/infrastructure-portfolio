import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        {/* We kept the ID "B" so the animation script still finds it, but changed the drawing to a D */}
        <path
          d="M27,30 L42,30 C52,30 55,34 55,45 C55,56 52,61 42,61 L27,61 L27,30 Z M33,36 L33,55 L42,55 C48,55 49,52 49,45 C49,38 48,36 42,36 L33,36 Z"
          fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
