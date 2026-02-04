import { ThemeTypographyVariants } from "@src/theme/theme"
import BaseComponent from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  tag: 'a' | 'p' | 'li' | 'h1' | string;
  $styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants
}

const Text = React.forwardRef(({
  tag,
  $styleSheet,
  variant = "body2",
  ...props
}: TextProps, ref) => {
  const theme = useTheme();

  const textVariant = theme.typography.variants[variant]
  return (
    <BaseComponent
      as={tag}
      $styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...$styleSheet
      }}
      ref={ref}
      {...props}
    />
  )
});

export default Text;

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
