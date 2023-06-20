import { useEffect, useRef, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext.js';
import { CSSTransition } from 'react-transition-group';

import '../styles/Switch.css';

const Switch = ({ large, onEntered, onExited }) => {
  const theme = useThemeContext();

  const nodeRef = useRef(null);

  const [trigger, setTrigger] = useState(false);
  const [debounce, setDebounce] = useState(false);

  const timeoutTime = 1000;

  let classText = '';
  if (large) classText = 'large';

  useEffect(() => {
    setTrigger(false);
  }, [large]);

  useEffect(() => {
    let background = 'white';
    if (theme === 'light') background = 'black';
    nodeRef.current.style.backgroundColor = background;
  }, [theme]);

  const handleSetTrigger = () => {
    if (!debounce) {
      setTrigger(!trigger);
      setDebounce(true);

      const timer = setTimeout(() => {
        setDebounce(false);
        clearTimeout(timer);
      }, timeoutTime);
    }
  };

  return (
    <div className={`switch${classText} switch-${theme}`}>
      <div
        onClick={handleSetTrigger}
        className={`switchbutton${classText}`}
      ></div>
      <CSSTransition
        nodeRef={nodeRef}
        in={trigger}
        timeout={timeoutTime}
        classNames={`switchball${classText}`}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div ref={nodeRef} className={`switchball${classText}`}></div>
      </CSSTransition>
    </div>
  );
};

export default Switch;
