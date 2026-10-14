import Greeting from './components/Greeting';
import Product from './components/Product';
import Avatar from './components/Avatar';
import Card from './components/Card';
import Button from './components/Button';

const section = { marginBottom: 32 };

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
    

      <section style={section}>
        <h2>Задача 1. Greeting</h2>
        <Greeting name="Иван" />
        <Greeting name="Мария" greeting="Добрый день" />
        <Greeting />
      </section>

      <section style={section}>
        <h2>Задача 2. Product</h2>
        <Product title="Ноутбук" price={60000} discount={15} />
        <Product title="Мышь" price={1500} />
        <Product title="Клавиатура" price={4990} discount={30} />
      </section>

      <section style={section}>
        <h2>Задача 3. Avatar</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar name="Анна" size={32} />
          <Avatar name="Борис" size={48} />
          <Avatar name="Влад" size={80} />
        </div>
      </section>

      <section style={section}>
        <h2>Задача 4. Card</h2>
        <Card title="О проекте">
          <p>Это обычный текст внутри карточки.</p>
        </Card>
        <Card title="Список и кнопка">
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>TypeScript</li>
          </ul>
          <Button onClick={() => alert('Нажато!')}>Нажми меня</Button>
        </Card>
      </section>

      <section style={section}>
        <h2>Задача 5. Button</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button onClick={() => alert('primary')}>Primary</Button>
          <Button variant="secondary" onClick={() => alert('secondary')}>Secondary</Button>
          <Button variant="danger" onClick={() => alert('danger')}>Danger</Button>
          <Button disabled>Отключена</Button>
          <Button variant="danger" disabled>Danger disabled</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
