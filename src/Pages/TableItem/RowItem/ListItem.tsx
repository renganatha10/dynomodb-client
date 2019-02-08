import * as React from 'react';
import styled from 'styled-components';
import CardItem from './../Content/CardItem';

interface IProps {
  listValues: any[];
  isShowContent: boolean;
}

const ArrayContentWrapper = styled.div`
  padding-left: 10px;
`;

class ListItem extends React.PureComponent<IProps, {}> {
  public render() {
    const { listValues, isShowContent } = this.props;

    return (
      <React.Fragment>
        <span>List</span>
        {isShowContent && (
          <ArrayContentWrapper>
            {listValues.map((listValue, index) => (
              <CardItem
                key={`listvalue${index}`}
                tableItem={{ [index]: listValue }}
              />
            ))}
          </ArrayContentWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default ListItem;
