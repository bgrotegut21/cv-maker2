import { useThemeContext } from '../hooks/useThemeContext';

const PrintButton = ({ onClick }) => {
  const theme = useThemeContext();

  return (
    <button className={`printButton printButton-${theme}`} onClick={onClick}>
      Print
    </button>
  );
};

export default PrintButton;
