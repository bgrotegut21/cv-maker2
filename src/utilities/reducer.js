import { createBox } from './main.js';

const reducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      const createdBox = createBox(action.category);

      return tasks.map((task) => {
        if (task.category === action.category) {
          return {
            category: action.category,
            boxes: [...task.boxes, createdBox],
          };
        }
        return task;
      });
    }

    case 'change': {
      return tasks.map((task) => ({
        category: task.category,
        boxes: task.boxes.map((boxContainer) => {
          return {
            id: boxContainer.id,
            box: boxContainer.box.map((packet) => {
              if (packet.id === action.id) {
                return { ...packet, value: action.value };
              }
              return packet;
            }),
          };
        }),
      }));
    }

    case 'delete': {
      return tasks.map((task) => ({
        category: task.category,
        boxes: task.boxes.filter(
          (boxContainer) => boxContainer.id !== action.id
        ),
      }));
    }

    default:
      throw new Error('Unexpected action type: ' + action.type);
  }
};

export { reducer };
