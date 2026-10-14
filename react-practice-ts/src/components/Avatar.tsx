import type { CSSProperties } from 'react';

// Задача 3. Avatar
interface AvatarProps {
  name: string;
  size?: number;
}

function Avatar({ name, size = 48 }: AvatarProps) {
  const letter = name ? name[0].toUpperCase() : '?';

  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: '#8b5cf6',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 2,
    fontWeight: 'bold',
  };

  return <div style={style}>{letter}</div>;
}

export default Avatar;
