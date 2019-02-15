import { Card, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import CardHoverBtns from './CardHoverBtn';
import CardItem from './CardItem';

interface ITableItemProps {
  tableItem: object;
}

interface IState {
  showHoverButtons: boolean;
}

class TableItem extends React.PureComponent<ITableItemProps, IState> {
  constructor(props: ITableItemProps) {
    super(props);
    this.state = {
      showHoverButtons: false,
    };
  }

  public onMouseOver = () => {
    this.setState({ showHoverButtons: true });
  };

  public onMouseLeave = () => {
    this.setState({ showHoverButtons: false });
  };

  public render() {
    const { showHoverButtons } = this.state;
    const { tableItem } = this.props;

    return (
      <Row>
        <RelativeCard
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
        >
          {showHoverButtons && <CardHoverBtns />}
          <Row>
            <CardItem hierarchy={0} path={''} tableItem={tableItem} />
          </Row>
        </RelativeCard>
      </Row>
    );
  }
}

export default TableItem;

const RelativeCard = styled(Card)`
  position: relative;
  padding-top: 10px !important;
  /* box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2); */
`;
