import React from 'react';
import './App.css';

const items = [
  { id: 1, text: 'Use Array.map' },
  { id: 2, text: 'Not a for loop' },
  { id: 3, text: 'Give each item a unique key' },
  { id: 4, text: 'Avoid using array index as the key' },
];

function App() {
  return (
    <div className="App">
      <h1>The "React Way" to Render a List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span role="img" aria-label="check">
              ✅
            </span>{' '}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
