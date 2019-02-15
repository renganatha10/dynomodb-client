import * as React from 'react';

import RowItem from '../RowItems';

class CardItem extends React.PureComponent<any, any> {
  public render() {
    const { tableItem, path, hierarchy } = this.props;

    return Object.keys(tableItem).map(tableItemKey => {
      const rowItemKeyValue = tableItem[tableItemKey];
      const tableItemDataType = Object.keys(rowItemKeyValue)[0];
      const tableItemValue = rowItemKeyValue[tableItemDataType];

      return (
        <RowItem
          path={path}
          hierarchy={hierarchy}
          key={`${tableItemValue}${tableItemKey}`}
          tableItemDataType={tableItemDataType}
          columnName={tableItemKey}
          value={tableItemValue}
        />
      );
    });
  }
}

export default CardItem;
