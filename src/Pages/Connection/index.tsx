import { Layout } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import Footer from './../../Components/Footer';

import ConnectionForm from './ConnectionForm';
import SideBar from './SideBar';

const { Header, Content } = Layout;

const Container = styled(Layout)`
  height: 100%;
`;

const StyledContent = styled(Content)`
  margin: 24px 16px 0;
`;

const StyleHeader = styled(Header)`
  background: #fff;
  padding: '0 24px';
`;

const HeaderText = styled.span`
  font-size: 20px;
`;

class Connection extends React.PureComponent {
  public render() {
    return (
      <Container>
        <SideBar />
        <Layout>
          <StyleHeader>
            <HeaderText>Connect To Host</HeaderText>
          </StyleHeader>
          <StyledContent>
            <ConnectionForm />
          </StyledContent>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

export default Connection;
