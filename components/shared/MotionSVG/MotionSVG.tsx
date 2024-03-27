import { ChakraComponent, chakra, shouldForwardProp } from '@chakra-ui/react';
import { ForwardRefComponent, SVGMotionProps, isValidMotionProp, motion } from 'framer-motion';


export type MotionSVGProps = ChakraComponent<
  ForwardRefComponent<SVGSVGElement, SVGMotionProps<SVGSVGElement>>,
  any
>;

const MotionSVG = chakra(motion.svg, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default MotionSVG;
