import React from 'react';

interface ServiceButtonProps {
  title: string;
}

export default function ServiceButton({ title }: ServiceButtonProps) {
  return <button className="service-btn">{title}</button>;
}
