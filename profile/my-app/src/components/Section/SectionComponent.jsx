import React from 'react'

// styles
import { TextColum, ImageColum } from './SectionComponent.styles';

export const SectionComponent = ({ title , text1, text2 }) => {
    return (
      <div className='container mx-auto grid md:grid-cols-2'>
        <TextColum>
          <h2>{title}</h2>

          <p className='my-4'>
            { text1 }
          </p>
          <p className='my-4'>
            { text2 }
          </p>
        </TextColum>
        <ImageColum className='backdrop-filter backdrop-opacity-80 hidden md:block'/>
      </div>
    )
};
