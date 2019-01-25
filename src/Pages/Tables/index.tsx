import { Layout } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import TablesHeader from './Header';
import TableContent from './TableContent';

const { Content } = Layout;

const Container = styled(Layout)`
  height: 100%;
`;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 10px;
`;

class Tables extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Container>
        <Layout>
          <TablesHeader />
          <StyledContent>
            <TableContent />
          </StyledContent>
        </Layout>
      </Container>
    );
  }
}

export default Tables;
