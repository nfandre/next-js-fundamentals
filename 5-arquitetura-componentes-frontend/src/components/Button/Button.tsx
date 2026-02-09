import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ButtonSize, buttonSize } from "./buttonSize";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { StyleSheet } from "styled-components/dist/types";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant
  variant?: Variant 
  size?: ButtonSize;
  styleSheet?: StyleSheet
}
export default function Button({
  styleSheet,
  children,
  fullWidth = false,
  colorVariant  = 'primary',
  variant = 'contained',
  size= 'md',
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
