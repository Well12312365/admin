import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">AromaRay Admin Panel</h1>
      <p>Здесь будет админка для управления товарами и заказами.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
