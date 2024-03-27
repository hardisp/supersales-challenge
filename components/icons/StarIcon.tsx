import React from "react";
import { MotionSVG, MotionSVGProps } from "../shared";

export default function StarIcon({ ...props }: MotionSVGProps | null) {
  return (
    <MotionSVG
      width={"1em"}
      height={"1em"}
      animate={{
        rotate: [0, 0, 90, 360],
        scale: [0.25, 0.75, 1, 1, 0.25],
        opacity: [0, 1, 1, 1, 0],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      viewBox="0 0 51 51"
      fill="none"
      className="star-icon"
      {...props}
    >
      <path
        d="M25.5 42.888C23.0794 34.5178 16.4822 27.9206 8.112 25.5C16.4822 23.0794 23.0794 16.4822 25.5 8.112C27.9206 16.4822 34.5178 23.0794 42.888 25.5C34.5178 27.9206 27.9206 34.5178 25.5 42.888Z"
        fill="#FFDD2D"
        stroke="#414141"
        strokeWidth="2"
      />
    </MotionSVG>
  );
}
