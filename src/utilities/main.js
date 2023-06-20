import uniqid from 'uniqid';

//the packets are the items inside the box array
//boxContainer is what hold the boxes and id
//tasks is the entire object
//the task is the object inside the tasks it hold the category in boxes

const initialValues = [
  {
    category: 'personal_information',
    boxes: [
      {
        id: uniqid(),
        box: [
          { title: 'Name', value: '', large: false, id: uniqid() },
          {
            title: 'Phone Number',
            value: '',
            large: false,
            id: uniqid(),
          },
          {
            title: 'Email',
            value: '',
            large: false,
            id: uniqid(),
          },
          { title: 'Location', value: '', large: false, id: uniqid() },
          {
            title: 'About You',
            value: '',
            large: true,
            id: uniqid(),
          },
        ],
      },
    ],
  },

  {
    category: 'work_experience',
    boxes: [
      {
        id: uniqid(),
        box: [
          { title: 'Title', value: '', large: false, id: uniqid() },
          { title: 'Company', value: '', large: false, id: uniqid() },
          { title: 'Start Date', value: '', large: false, id: uniqid() },
          { title: 'End Date', value: '', large: false, id: uniqid() },
          {
            title: 'About Your Role',
            value: '',
            large: true,
            id: uniqid(),
          },
        ],
      },
    ],
  },

  {
    category: 'education',
    boxes: [
      {
        id: uniqid(),
        box: [
          {
            title: 'Degree',
            value: '',
            large: false,
            id: uniqid(),
          },
          { title: 'School Name', value: '', large: false, id: uniqid() },
          { title: 'Location', value: '', large: false, id: uniqid() },
          { title: 'Start Date', value: '', large: false, id: uniqid() },
          { title: 'End Date', value: '', large: false, id: uniqid() },
          {
            title: 'About Your Subject',
            value: '',
            large: true,
            id: uniqid(),
          },
        ],
      },
    ],
  },
];

const createBox = (boxType) => {
  if (boxType === 'education') {
    return {
      id: uniqid(),
      box: [
        { title: 'Degree', value: '', large: false, id: uniqid() },
        { title: 'School Name', value: '', large: false, id: uniqid() },
        { title: 'Location', value: '', large: false, id: uniqid() },
        { title: 'Start Date', value: '', large: false, id: uniqid() },
        { title: 'End Date', value: '', large: false, id: uniqid() },
        { title: 'About Your Subject', value: '', large: true, id: uniqid() },
      ],
    };
  }

  return {
    id: uniqid(),
    box: [
      { title: 'Title', value: '', large: false, id: uniqid() },
      { title: 'Company', value: '', large: false, id: uniqid() },
      { title: 'Start Date', value: '', large: false, id: uniqid() },
      { title: 'End Date', value: '', large: false, id: uniqid() },
      { title: 'About Your Role', value: '', large: true, id: uniqid() },
    ],
  };
};

export { createBox, initialValues };
