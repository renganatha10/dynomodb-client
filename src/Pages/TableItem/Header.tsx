import { Col, Icon, Row } from 'antd';
import * as React from 'react';

import styled from 'styled-components';

const TableSizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;

  & div {
    margin: 0 2.5px;
  }

  & > div:last-child {
    border-right: 1px solid lightgray;
    padding-right: 3px;
  }
`;

const ItemCountBoldSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

const Container = styled.div`
  padding: 30px;
  background-color: white;
`;

const SizeText = styled.span`
  font-size: 10px;
`;

const ItemCountText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ItemName = styled.span`
  font-weight: bold;
  font-size: 25px;
`;

class TableItemSideBar extends React.PureComponent<{}, any> {
  public render() {
    return (
      <Container>
        <Col span={12}>
          <ItemName>
            <Icon theme="twoTone" type={'dashboard'} /> Adventurist Dev Table
          </ItemName>
        </Col>
        <Col span={12}>
          <Row type={'flex'} align={'middle'} justify={'end'}>
            <TableSizeContainer>
              <div>
                <ItemCountBoldSpan>ITEM COUNT </ItemCountBoldSpan>
                <ItemCountText>42</ItemCountText>
              </div>
              <div>
                <div>
                  <SizeText>TOTAL SIZE</SizeText>
                </div>
                <div>
                  <span>4.9KB</span>
                </div>
              </div>
              <div>
                <div>
                  <SizeText>AVZ SIZE</SizeText>
                </div>
                <div>
                  <span>4.9KB</span>
                </div>
              </div>
            </TableSizeContainer>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default TableItemSideBar;
