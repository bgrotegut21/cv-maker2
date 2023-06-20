import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

import { formatCategory } from '../utilities/util.js';
import { useThemeContext } from '../hooks/useThemeContext.js';

import '../styles/EditView.css';

const TextInputs = ({ boxContainer, dispatch }) => {
  const theme = useThemeContext();

  return (
    <div className="text-inputs">
      {boxContainer.box.map((packet) => {
        if (packet.large) {
          return (
            <div
              key={packet.id}
              className={`text-input-container-large text-input-container-${theme}`}
            >
              <textarea
                rows="11"
                cols="28"
                placeholder={packet.title}
                className={`text-input-large text-input-large-${theme} `}
                value={packet.value}
                onChange={(event) =>
                  dispatch({
                    type: 'change',
                    id: packet.id,
                    value: event.target.value,
                  })
                }
              />
            </div>
          );
        }

        return (
          <div
            key={packet.id}
            className={`text-input-container text-input-container-${theme}`}
          >
            <input
              placeholder={packet.title}
              className={`text-input text-input-${theme}`}
              value={packet.value}
              onChange={(event) =>
                dispatch({
                  type: 'change',
                  id: packet.id,
                  value: event.target.value,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};

const TextForm = ({ boxContainer, dispatch, category, isLastEelement }) => {
  const theme = useThemeContext();

  if (category === 'personal_information') {
    return (
      <div className={`text-form text-form-${theme}`}>
        <TextInputs boxContainer={boxContainer} dispatch={dispatch} />
      </div>
    );
  }

  return (
    <div className={`text-form text-form-${theme}`}>
      <DeleteButton
        onClick={() =>
          dispatch({
            type: 'delete',
            id: boxContainer.id,
          })
        }
      />
      <TextInputs boxContainer={boxContainer} dispatch={dispatch} />

      {isLastEelement && (
        <AddButton
          onClick={() =>
            dispatch({
              type: 'add',
              category,
            })
          }
        />
      )}
    </div>
  );
};

const Boxes = ({ boxes, dispatch, category }) => {
  if (boxes.length === 0) {
    return (
      <AddButton
        onClick={() =>
          dispatch({
            type: 'add',
            category,
          })
        }
      />
    );
  }

  return (
    <div className="boxes">
      {boxes.map((boxContainer, index) => (
        <TextForm
          category={category}
          key={boxContainer.id}
          boxContainer={boxContainer}
          dispatch={dispatch}
          isLastEelement={index === boxes.length - 1}
        />
      ))}
    </div>
  );
};

//the format category function will just format the text to make it look nicer
const EditView = ({ tasks, dispatch }) => {
  const theme = useThemeContext();

  return (
    <div className={`editview editview-${theme}`}>
      {tasks.map((task) => {
        return (
          <div key={task.category} className={`container container-${theme}`}>
            <h2 className={`container-title container-title-${theme}`}>
              {formatCategory(task.category)}
            </h2>

            <Boxes
              dispatch={dispatch}
              category={task.category}
              boxes={task.boxes}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditView;
