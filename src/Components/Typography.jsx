import React from 'react'
import { useTheme } from '../Providers/ThemeProvider';

const tagStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  span: 'text-base',
};

const Typography = ({
  tag = "p",
  customclass = "",
  children
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light'

  const Tag = tagStyles.hasOwnProperty() ? tag : "p";
  return (
    <Tag className={`font-manrope leading-[150%] tracking-normal text-[var(--text-primary)] ${tagStyles[Tag]} ${customclass}`}>
      {children}
    </Tag>
  )
}

export default Typography