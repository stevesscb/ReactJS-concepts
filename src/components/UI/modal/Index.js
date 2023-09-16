import React from 'react';

import Card from '../Card';
import Button from '../../Buttons/Button';

const ModalIndex = (props) => {
  return (
    <Card>
      <h1>Modal Portal</h1>
      <Button label='Open modal' onClick={props.showModal} />
    </Card>
  );
};

export default ModalIndex;
