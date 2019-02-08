import { Icon } from 'antd';

import * as React from 'react';

import ListItem from './ListItem';
import MapItem from './MapItem';
import ArrayItem from './StringSetItem';
import ValueText from './ValueText';

import styled from 'styled-components';

interface IRowItemProps {
  columnName: string;
  value: string;
  tableItemDataType: string;
}

interface Istate {
  isShowContent: boolean;
}

const primitiveTypes: string[] = ['N', 'S', 'BOOL'];
const stringSets: string[] = ['NS', 'SS', 'BS'];

// const nullValue = 'NULL';
// const binary = 'B';

class RowItem extends React.PureComponent<IRowItemProps, Istate> {
  public static lineNumber = 1;

  public state = {
    isShowContent: false,
  };

  public onShowMoreContentToggle = () => {
    const { isShowContent } = this.state;
    this.setState({ isShowContent: !isShowContent });
  };

  public render() {
    const { columnName, value, tableItemDataType } = this.props;
    const { isShowContent } = this.state;
    const lineNumber = 1;

    // const showShowMoreIcon =
    //   stringSets.includes(tableItemDataType) ||
    //   tableItemDataType === 'M' ||
    //   tableItemDataType === 'L';

    const iconType = isShowContent ? 'caret-down' : 'caret-right';

    return (
      <RowItemContainer>
        {lineNumber}
        <IconButton onClick={this.onShowMoreContentToggle}>
          <Icon type={iconType} />
        </IconButton>

        <ValueSpanText>
          <KeyText>{columnName}</KeyText>:{' '}
          <RowItemValue
            isShowContent={isShowContent}
            value={value}
            rowItemType={tableItemDataType}
          />
        </ValueSpanText>
      </RowItemContainer>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class RowItemValue extends React.PureComponent<any, any> {
  public render() {
    const { rowItemType, value, isShowContent } = this.props;

    if (primitiveTypes.includes(rowItemType)) {
      return <ValueText value={value} type={rowItemType} />;
    } else if (stringSets.includes(rowItemType)) {
      return (
        <ArrayItem
          rowItemType={rowItemType}
          isShowContent={isShowContent}
          arrayItems={value}
        />
      );
    } else if (rowItemType === 'M') {
      return <MapItem isShowContent={isShowContent} mapValue={value} />;
    } else if (rowItemType === 'L') {
      return <ListItem isShowContent={isShowContent} listValues={value} />;
    }

    return <div />;
  }
}

export default RowItem;

const ValueSpanText = styled.span`
  white-space: nowrap;
`;

const IconButton = styled.div`
  display: inline;
  cursor: pointer;
`;

const KeyText = styled.span`
  font-weight: bold;
  color: black;
`;

const RowItemContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;
