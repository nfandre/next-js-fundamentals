import React from "react";
import { parseStyleSheet } from "@displaykit/responsive_styles";
import { StyleSheet } from "@src/theme/StyleSheet"
import styled from "styled-components";
import { css } from "styled-components";


interface StyledBaseComponent {
  $styleSheet?: StyleSheet;
  ref: any;
};

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => css`${parseStyleSheet($styleSheet ?? {})}`}
`;

interface BaseComponentProps {
  as: string;
  styleSheet?: StyleSheet; // p
  [key: string]: any
};
const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(({ styleSheet, ...props }, ref) => {
  return (
    <StyledBaseComponent ref={ref}
      $styleSheet={styleSheet} // ✅ transient, nunca chega no DOM
      {...props} />
  )
});

export default BaseComponent;


