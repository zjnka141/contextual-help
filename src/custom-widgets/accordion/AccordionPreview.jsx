import React from 'react';

const AccordionPreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}

export default AccordionPreview
