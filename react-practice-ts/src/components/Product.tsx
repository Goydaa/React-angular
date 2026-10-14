// Задача 2. Product
interface ProductProps {
  title: string;
  price: number;
  discount?: number;
}

function Product({ title, price, discount = 0 }: ProductProps) {
  const finalPrice = Math.round(price * (1 - discount / 100) * 100) / 100;
  const fmt = (n: number) => n.toLocaleString('ru-RU');

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, marginBottom: 10, maxWidth: 300 }}>
      <h4 style={{ margin: '0 0 6px' }}>{title}</h4>
      <div>
        <strong>{fmt(finalPrice)} ₽</strong>
      </div>
      {discount > 0 && (
        <div>
          <s style={{ color: '#888' }}>{fmt(price)} ₽</s>{' '}
          <span style={{ color: '#ef4444' }}>Скидка: {discount}%</span>
        </div>
      )}
    </div>
  );
}

export default Product;
