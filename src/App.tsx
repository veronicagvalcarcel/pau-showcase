// src/App.tsx
import { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function App() {
  const [selected, setSelected] = useState('todo');

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Bienvenido a Pau De Cerca Art</h1>
          <p>Elige la pieza que conecte contigo.</p>
        </section>

        <ProductGrid selected={selected} setSelected={setSelected} />
      </main>
    </>
  );
}

export default App;