import React from "react";
import { parseStyleSheet } from "@displaykit/responsive_styles";
import { StyleSheet } from "@src/theme/StyleSheet"
import styled from "styled-components";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
};

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet ?? {})}
`;


export const BaseComponent = (props: any) => {
  console.log(props)

  return (
    <StyledBaseComponent {...props} />
  )
};

BaseComponent.defaultProps = {
  styleSheet: {}
};