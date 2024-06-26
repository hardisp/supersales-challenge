import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function PlayButtonIcon({...props}:IconProps) {
  return (
    <Icon 
      viewBox="0 0 24 24"
      fill="none" 
      className="play-button-icon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5 13.1962C16.1667 12.8113 16.1667 11.849 15.5 11.4641L11 8.86602C10.3333 8.48112 9.5 8.96225 9.5 9.73205L9.5 14.9282C9.5 15.698 10.3333 16.1791 11 15.7942L15.5 13.1962Z"
        fill="currentColor"
      />
    </Icon>
  );
}
