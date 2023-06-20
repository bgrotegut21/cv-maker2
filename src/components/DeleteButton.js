import '../styles/Buttons.css';

import { useThemeContext } from '../hooks/useThemeContext';

const DeleteButton = ({ onClick }) => {
  const theme = useThemeContext();

  return (
    <button className={`deleteButton deleteButton-${theme}`} onClick={onClick}>
      X
    </button>
  );
};

export default DeleteButton;
