// Задача 1. Greeting
// name — по заданию обязательный, но в App проверяем и вариант без имени,
// поэтому тип name?: string, а внутри есть fallback.
interface GreetingProps {
  name?: string;
  greeting?: string;
}

function Greeting({ name, greeting = 'Привет' }: GreetingProps) {
  const displayName = name && name.trim() ? name : 'гость';

  return (
    <p>
      {greeting}, {displayName}!
    </p>
  );
}

export default Greeting;
