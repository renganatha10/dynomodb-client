import { Button, Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import RegionSelector from './../../Components/RegionSelector';

const StyleHeader = styled.div`
  background: #fff;
  padding: 12px 24px;
`;

const BorderRow = styled(Row)`
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.65);
`;

const RowHeaderText = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

class TableHeader extends React.PureComponent {
  public render() {
    return (
      <StyleHeader>
        <Row>
          <Col style={{ marginBottom: 10 }} sm={12} xs={24}>
            <BorderRow>
              <RowHeaderText>Total capacity for US West (Oregon)</RowHeaderText>
            </BorderRow>
            <Row>
              <Col md={12}>Provisioned read capacity: 90</Col>
              <Col md={12}>Provisioned read capacity: 90 </Col>
            </Row>
            <Row>
              <Col md={12}>Reserved read capacity: 90</Col>
              <Col md={12}>Reserved read capacity: 90 </Col>
            </Row>
          </Col>
          <Col sm={12} xs={24}>
            <Row>
              <Col
                md={{ span: 6, offset: 6 }}
                sm={{ span: 6, offset: 6 }}
                xs={{ span: 8 }}
              >
                <Button type={'primary'}> Refresh </Button>
              </Col>
              <Col md={12} sm={12} xs={12}>
                <RegionSelector />
              </Col>
            </Row>
          </Col>
        </Row>
      </StyleHeader>
    );
  }
}

export default TableHeader;
