import {  Variants } from "framer-motion";
import React, { ReactNode } from "react";
import { MotionBox } from "..";

export const defaultVariant: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const afterDelay: Variants = {
  ...defaultVariant,
  onscreen: {
    ...defaultVariant.onscreen,
    transition: {
        // @ts-ignore
        ...defaultVariant.onscreen.transition,
        delay: 1,
    }
  },
};
 

export default function SectionInView({
  children,
  variants = defaultVariant,
}: {
  children: ReactNode;
  variants?: Variants;
}) {
  return (
    <MotionBox
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <MotionBox className="card" variants={variants}>
        {children}
      </MotionBox>
    </MotionBox>
  );
}
