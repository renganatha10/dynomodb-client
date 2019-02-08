import * as React from 'react';
import styled from 'styled-components';
import ValueText from './ValueText';

interface IProps {
  arrayItems: string[];
  rowItemType: string;
  isShowContent: boolean;
}

const ArrayContentWrapper = styled.div`
  padding-left: 10px;
`;

class StringSetItem extends React.PureComponent<IProps, {}> {
  public render() {
    const { rowItemType, arrayItems, isShowContent } = this.props;
    const type = rowItemType.charAt(0);

    return (
      <React.Fragment>
        <span>Set</span>
        {isShowContent && (
          <ArrayContentWrapper>
            {arrayItems.map((arrayItem, index) => (
              <div key={`${arrayItem}${index}`}>
                <span>
                  {index} : <ValueText value={arrayItem} type={type} />
                </span>
              </div>
            ))}
          </ArrayContentWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default StringSetItem;
