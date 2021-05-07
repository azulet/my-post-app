
import React from 'react';

import  Bio  from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
  
};

const Template = () => (

  <Bio 
  headshot = "https"
  name = "Colby Fayock"
  tagline = "Helping other to learn by doing"
  role = "Developer" 
  />
  
  
  );



export const Default = Template.bind({});

