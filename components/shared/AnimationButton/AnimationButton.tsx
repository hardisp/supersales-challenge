import { Link } from "@chakra-ui/next-js";
import { Button, ButtonProps, LinkProps } from "@chakra-ui/react";
import React, {  useMemo, useState } from "react";

export default function AnimationButton({
  children,
  href,
  ...rest
}:  LinkProps & ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const Component = useMemo(() => {
    if(!href){
        return Button
    }
    return Link
  }, [href])
  
  return (
    <Component
      href="#"
      {...rest}
      borderBottomWidth={isClicked ? "3px" : "2px"}
      opacity={isClicked ? "0.85" : "1"}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {children}
    </Component>
  );
}
