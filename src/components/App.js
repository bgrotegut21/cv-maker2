import '../styles/App.css';

import { useState, useReducer, useEffect } from 'react';
import { reducer } from '../utilities/reducer.js';
import { initialValues } from '../utilities/main.js';
import { ThemeContext } from '../hooks/useThemeContext';

import EditView from './EditView.js';
import Navigation from './Navigation.js';
import Preview from './Preview.js';
function App() {
  const [tasks, dispatch] = useReducer(reducer, initialValues);
  const [theme, setTheme] = useState('dark');
  const [preview, setPreview] = useState(false);
  const [screenSize, setScreenSize] = useState('normal');

  const handleDark = () => setTheme('dark');
  const handleLight = () => setTheme('light');
  const handlePreview = () => setPreview(true);
  const handleEdit = () => setPreview(false);

  useEffect(() => {
    const handleScreenSizeChange = (size, oppositeSize) => {
      return (event) => {
        if (event.matches) {
          setScreenSize(size);

          if (size === 'large') {
            setPreview(false);
          }
        } else if (screenSize !== oppositeSize) {
          setScreenSize('normal');
        }
      };
    };

    const smallMedia = window.matchMedia('(max-width:350px)');
    if (smallMedia.matches) setScreenSize('small');

    const largeMedia = window.matchMedia('(min-width:1200px)');
    if (largeMedia.matches) setScreenSize('large');

    smallMedia.addEventListener(
      'change',
      handleScreenSizeChange('small', 'large')
    );
    largeMedia.addEventListener(
      'change',
      handleScreenSizeChange('large', 'small')
    );

    return () => {
      smallMedia.removeEventListener(
        'change',
        handleScreenSizeChange('small', 'large')
      );
      largeMedia.removeEventListener(
        'change',
        handleScreenSizeChange('large', 'small')
      );
    };
  }, [screenSize]);

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navigation
          onLight={handleLight}
          onDark={handleDark}
          onPreview={handlePreview}
          onEdit={handleEdit}
          screenSize={screenSize}
        />

        {!preview && screenSize !== 'large' && (
          <EditView tasks={tasks} dispatch={dispatch} />
        )}
        {preview && <Preview tasks={tasks} />}
        {!preview && screenSize === 'large' && (
          <div className={`desktop-view desktop-view-${theme}`}>
            <EditView tasks={tasks} dispatch={dispatch} />

            <div className="preview-holder">
              <Preview tasks={tasks} />
            </div>
          </div>
        )}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
