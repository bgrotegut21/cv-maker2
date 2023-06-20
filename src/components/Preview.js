import '../styles/Preview.css';

import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

import { useThemeContext } from '../hooks/useThemeContext.js';
import { formatWord } from '../utilities/util.js';

import PrintButton from './PrintButton.js';

import EmailIcon from '../icons/email.svg';
import NumberIcon from '../icons/phone.svg';
import LocationIcon from '../icons/location.svg';

const Icon = ({ alt, src, children }) => {
  return (
    <div className="preview-icon">
      <img className="preview-image" src={src} alt={alt} />
      <p className="preview-icon-text">{children}</p>
    </div>
  );
};

const PersonalInformation = ({ personalInformationBox }) => {
  const name = personalInformationBox[0].value;
  const aboutinfo = personalInformationBox[4].value;

  const phoneNumber = personalInformationBox[1].value;
  const email = personalInformationBox[2].value;
  const location = personalInformationBox[3].value;

  return (
    <div className="header">
      <div className="head">
        <div className="personal-info-words">
          <h1 className="personal-info-title">{name}</h1>
          <p className="personal-info-text">{aboutinfo}</p>
        </div>
        <div className="personal-info-details">
          <Icon key="number" alt="phoneNumber" src={NumberIcon}>
            {phoneNumber}
          </Icon>

          <Icon key="email" alt="email" src={EmailIcon}>
            {email}
          </Icon>

          <Icon key="location" alt="location" src={LocationIcon}>
            {location}
          </Icon>
        </div>
      </div>
    </div>
  );
};

//Info information
//Work Experience
//box[0] is the title
//box[1] is the company
//box[2] is the start date
//box[3] is the end date
//box[4] is about your role

//Education
//box[0] is the degree
//box[1] is the school name
//box[2] is the location
//box[3] is the start date
//box[4] is the end date
//box[5] is about your subject

const Info = ({ box, category }) => {
  return (
    <div className="packet">
      <div className="packet-holder">
        <p className="packet-title">{box[0].value}</p>
        <div className="packet-info">
          <p key="text" className="packet-info-text">
            {category === 'education'
              ? `${box[1].value}, ${box[2].value} | `
              : `${box[1].value} | `}
          </p>
          <p key="time" className="packet-info-text">
            {category === 'education'
              ? `${box[3].value} - ${box[4].value}`
              : `${box[2].value} - ${box[3].value}`}
          </p>
        </div>
      </div>

      <p className="packet-description">
        {category === 'education' ? box[5].value : box[4].value}
      </p>
    </div>
  );
};

const Experience = ({ category, container }) => {
  const boxes = container.boxes;

  return (
    <div className="experience">
      <h2 className="experience-title">{formatWord(category)}</h2>
      {boxes.map((boxContainer) => (
        <Info
          key={boxContainer.id}
          box={boxContainer.box}
          category={category}
        />
      ))}
    </div>
  );
};

const Preview = ({ tasks }) => {
  const theme = useThemeContext();
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const personalInformationBoxes = tasks[0];
  const workExperience = tasks[1];
  const education = tasks[2];

  return (
    <div className={`preview preview-${theme}`}>
      <div className={`resume-holder resume-holder-${theme}`}>
        <div ref={resumeRef} className="resume">
          <br />
          <PersonalInformation
            personalInformationBox={personalInformationBoxes.boxes[0].box}
          />
          <div className="resume-line"></div>
          <Experience
            key={workExperience.category}
            category={workExperience.category}
            container={workExperience}
          />
          <Experience
            key={education.category}
            category={education.category}
            container={education}
          />
        </div>

        <div className="print-button-holder">
          <PrintButton onClick={handlePrint} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
