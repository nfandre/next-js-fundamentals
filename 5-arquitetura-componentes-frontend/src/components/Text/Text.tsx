import { ThemeTypographyVariants } from "@src/theme/theme"
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  children: React.ReactNode;
  tag: 'p' | 'li' | 'h1' | string;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants
}

export default function Text({
  styleSheet,
  variant = "body2",
  ...props
}: TextProps) {
  const theme = useTheme();
  
  const textVariant = theme.typography.variants[variant]
  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    />
  )
};

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
