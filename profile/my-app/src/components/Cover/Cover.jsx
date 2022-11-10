import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

// constants
import { 
  NAME_USER,
  POSITION,
  LINK_GIT_HUB,
  LINK_LN,
  LINK_CODEPEN,
 } from '../../constants/texts';

// styles
import { BackgroundCover, TextCaption } from './Cover.styles';

export const Cover = () => {

  return (
    <div>
      <BackgroundCover className='bg-local blur-sm'/>
      <TextCaption className='flex flex-col items-center'>
        <p className="text-3xl my-2 text-white">{NAME_USER}</p>
        <p className="text-sm  my-3 text-white ">{POSITION}</p>
        <div className='flex flex-colunm'>
          <a href={LINK_GIT_HUB} target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} className='text-white mx-2 hover:text-black' size="lg" />
          </a>
          <a href={LINK_LN} target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='text-white mx-2 hover:text-sky-700' size="lg"/>
          </a>
          <a href={LINK_CODEPEN} target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faCodepen} className='text-white mx-2 hover:text-green-500' size="lg"/>
          </a>
        </div>
      </TextCaption>
    </div>
  )
}
