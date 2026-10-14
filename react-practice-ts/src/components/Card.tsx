import type { ReactNode } from 'react';

// Задача 4. Card с children
interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div style={{ border: '2px solid #3b82f6', borderRadius: 10, padding: 16, marginBottom: 12, maxWidth: 400 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
