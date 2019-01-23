import { Layout } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

export default class CommonFooter extends React.PureComponent<any, any> {
  public render() {
    return <StyledFooter>Made with ❤ By Renganatha</StyledFooter>;
  }
}
