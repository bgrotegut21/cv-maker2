import '../styles/Navigation.css';

import Switch from './Switch.js';
import { useThemeContext } from '../hooks/useThemeContext.js';

import DarkModeIcon from '../icons/darkmode.svg';
import LightModeIcon from '../icons/lightmode.svg';

const BottomNav = ({ screenSize, onPreview, onEdit }) => {
  return (
    <div className="bottomnav">
      <div className="mode">
        <h2 className="modeText">EDIT</h2>

        <Switch
          large={screenSize !== 'small'}
          onEntered={onPreview}
          onExited={onEdit}
        />
        <h2 className="modeText">PREVIEW</h2>
      </div>
    </div>
  );
};

const Navigation = ({ onLight, onDark, onPreview, onEdit, screenSize }) => {
  const theme = useThemeContext();

  return (
    <div className={`navigation navigation-${theme}`}>
      <div className="topnav">
        <div className="theme-changer">
          <img
            className={`icon icon-${theme}`}
            src={DarkModeIcon}
            alt="darkmode"
          />
          <Switch onEntered={onLight} onExited={onDark} />
          <img
            className={`icon icon-${theme}`}
            src={LightModeIcon}
            alt="lightmode"
          />
        </div>

        <h1 className="title-text">CV MAKER</h1>
      </div>

      {screenSize !== 'large' && (
        <BottomNav
          screenSize={screenSize}
          onPreview={onPreview}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default Navigation;
