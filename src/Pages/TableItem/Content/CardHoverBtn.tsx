import { Button } from 'antd';
import styled from 'styled-components';

import * as React from 'react';

const ButtonGroup = Button.Group;

class CardHoverItems extends React.PureComponent {
  public render() {
    return (
      <EditDelCopyCloneBtn>
        <ButtonGroup size={'small'}>
          <Button title={'Edit'} icon="edit" />
          <Button title={'Copy'} icon="copy" />
          <Button title={'Clone'} icon="diff" />
          <Button title={'Delete'} icon="delete" />
        </ButtonGroup>
      </EditDelCopyCloneBtn>
    );
  }
}

const EditDelCopyCloneBtn = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
`;

export default CardHoverItems;
