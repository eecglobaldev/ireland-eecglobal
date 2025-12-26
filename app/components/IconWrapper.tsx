"use client";

import React from 'react';

/**
 * IconWrapper - Wraps lucide-react icons to suppress hydration warnings
 * caused by browser extensions like Dark Reader that modify SVG attributes
 */
interface IconWrapperProps {
  children: React.ReactElement;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  // Clone the icon element and add suppressHydrationWarning to the SVG
  return React.cloneElement(children, {
    suppressHydrationWarning: true,
    // Also try to add it to any nested SVG elements
    ...(children.props && {
      ...children.props,
      suppressHydrationWarning: true,
    }),
  });
};

/**
 * Helper function to wrap an icon component
 */
export function wrapIcon<T extends React.ComponentType<any>>(
  IconComponent: T
): React.FC<React.ComponentProps<T>> {
  return (props: React.ComponentProps<T>) => (
    <IconWrapper>
      <IconComponent {...props} />
    </IconWrapper>
  );
}

