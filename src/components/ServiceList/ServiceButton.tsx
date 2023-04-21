import React from 'react';

interface ServiceButtonProps {
  title: string;
  onClick: () => void;
}

export default function ServiceButton({ title, onClick }: ServiceButtonProps) {
  return (
    <button className="service-btn" onClick={onClick}>
      {title}
    </button>
  );
}
