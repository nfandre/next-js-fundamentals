import NextLink from 'next/link'
import Text from '../Text/Text';
import React from 'react';
import { ColorsVariants, ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  $styleSheet: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ColorsVariants;
  colorVariantEnabled?: boolean
};


const Link = React.forwardRef(({
  href,
  children,
  colorVariant = 'primary',
  colorVariantEnabled = true,
  $styleSheet,
  ...props
}: LinkProps, ref) => {

  const isInternalLink = href.startsWith('http');
  const theme = useTheme();
  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400
    },
    focus: {
      color: theme.colors[colorVariant].x600
    }
  }

  const linkProps = {
    ref,
    children,
    href,
    $styleSheet: {
      textDecoration: 'none',
      ...$styleSheet,
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      hover: {
        // ...$styleSheet.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color,
        },
      },
      focus: {
        // ...$styleSheet.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        },
      }
    },
    ...props
  }

  if (isInternalLink) return <Text {...{
    target: 'blank', tag: "a",
    ...linkProps
  }} />

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
})

export default Link;
