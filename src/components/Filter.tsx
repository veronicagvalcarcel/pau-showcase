// src/components/Filter.tsx
import React from 'react';
import './Filter.css';

export interface FilterProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ selected, setSelected }) => {
  const buttons = ['todo', 'lamina', 'camiseta', 'totebag'];

  return (
    <div className="filter-buttons">
      {buttons.map(button => (
        <button
          key={button}
          className={selected === button ? 'active' : ''}
          onClick={() => setSelected(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Filter; // ✅ export default