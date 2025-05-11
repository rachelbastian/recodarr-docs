import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../components/ui/card';

export default {
  ...MDXComponents,
  // Add custom components
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  // Custom wrapper for tailwind typography
  TailwindWrapper: ({ children, className, ...props }) => (
    <div className={`prose max-w-none ${className || ''}`} {...props}>
      {children}
    </div>
  ),
}; 