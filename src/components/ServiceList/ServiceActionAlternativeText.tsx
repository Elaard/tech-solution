import React from 'react';

interface ServiceActionAlternativeTextProps {
  text: string;
}

export default function ServiceActionAlternativeText({ text }: ServiceActionAlternativeTextProps) {
  return <p>{text}</p>;
}
