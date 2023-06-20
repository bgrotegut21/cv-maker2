import '../styles/Buttons.css';

import { useThemeContext } from '../hooks/useThemeContext';

const Button = ({ onClick }) => {
  const theme = useThemeContext();

  return (
    <div className="addButton-container">
      <button className={`addButton addButton-${theme}`} onClick={onClick}>
        Add
      </button>
    </div>
  );
};

export default Button;
