import React from "react";
import { parseStyleSheet } from "@displaykit/responsive_styles";
import { StyleSheet } from "@src/theme/StyleSheet"
import styled from "styled-components";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref: any;
};

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet ?? {})}
`;

interface BaseComponentProps {
  as: string;
  styleSheet?: StyleSheet;
  [key: string]: any
};
const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props: any, ref) => {
  return (
    <StyledBaseComponent  ref={ref}  {...props}/>
  )
});

export default BaseComponent;


