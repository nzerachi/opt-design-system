import React from "react";

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
}

const Symbol = ({
  className = "",
  fill,
  stroke,
  strokeWidth,
  width,
  height,
  ...props
}: SymbolProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-1 -1 64.54 64.54"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g fill={fill} stroke={stroke}>
        <path
          id="path"
          d="M56.02,12.06c4.09,5.29,6.52,11.93,6.52,19.14c0,17.31-14.03,31.34-31.34,31.34C13.89,62.54,0,48.51,0,31.2C0,13.05,15.41-1.47,33.05,0.12C49.08,1.56,52.53,19.98,50.89,33.4c-1.64,13.32-9.88,23.28-18.41,22.23c-8.53-1.05-14.12-12.7-12.49-26.02C21.62,16.28,29.87,6.33,38.4,7.38c2.71,0.33,5.12,1.73,7.09,3.91c-2.62-4.34-6.42-7.69-11.95-7.73C23.27,3.47,12.77,17.49,13.29,32.68c0.56,16.42,9.95,25.08,19.31,25.97c8.76,0.83,17.84-7.1,21.14-17.2c3.93-12.01,2.18-27.61-4.1-37.61c-0.1-0.16-0.06-0.02-0.06-0.02C52.04,6.66,54.22,9.32,56.02,12.06L56.02,12.06z M35.46,21.96c-5.28,0-9.57,4.28-9.57,9.57s4.28,9.57,9.57,9.57c5.28,0,9.57-4.28,9.57-9.57S40.74,21.96,35.46,21.96z"
        />
      </g>
    </svg>
  );
};

export default Symbol;
