export default function CircleDashBorder() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_126_1231)">
        <circle
          cx="10"
          cy="10"
          r="9.5"
          stroke="#FFFCF4"
          strokeDasharray="2 2"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_126_1231"
          x="-10"
          y="-10"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_126_1231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_126_1231"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
