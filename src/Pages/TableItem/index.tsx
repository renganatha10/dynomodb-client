import { Layout } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import TableItemContent from './Content';
import Header from './Header';
import SideBar from './SideBar';

const { Content } = Layout;

const Container = styled(Layout)`
  height: 100%;
`;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 10px;
`;

export default class TableItem extends React.PureComponent<{}, any> {
  public render() {
    return (
      <Container>
        <SideBar />
        <Layout>
          <Header />
          <StyledContent>
            <TableItemContent />
          </StyledContent>
        </Layout>
      </Container>
    );
  }
}
