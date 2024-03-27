import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function Block({...props}: IconProps) {
  return (
    <Icon
      viewBox="0 0 220 220"
      fill="none"
      {...props}
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0H204C212.837 0 220 7.16344 220 16V204C220 212.837 212.837 220 204 220H16C7.16344 220 0 212.837 0 204V16Z"
        fill="#E8FAFF"
      />
    </Icon>
  );
}
