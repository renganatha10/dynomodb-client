import * as React from 'react';
import styled from 'styled-components';

import CardItem from './../Content/CardItem';

interface IProps {
  mapValue: object;
  isShowContent: boolean;
}

const ArrayContentWrapper = styled.div`
  padding-left: 10px;
`;

class MapItem extends React.PureComponent<IProps, {}> {
  public render() {
    const { mapValue, isShowContent } = this.props;
    return (
      <React.Fragment>
        <span>Map</span>
        {isShowContent && (
          <ArrayContentWrapper>
            <CardItem tableItem={mapValue} />
          </ArrayContentWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default MapItem;
