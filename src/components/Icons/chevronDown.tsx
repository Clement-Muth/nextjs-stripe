import type IconSvgBase from "~/types/svg";

const ChevronDown = ({ fill, size, height, width, ...props }: IconSvgBase) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron Down</title>
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default ChevronDown;
