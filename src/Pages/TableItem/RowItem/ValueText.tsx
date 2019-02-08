import * as React from 'react';
import styled from 'styled-components';

interface IValueTextProps {
  value: string;
  type: string;
}

const NumberText = styled.span`
  color: green;
`;

const StringText = styled.span`
  color: blue;
`;

const BooleanText = styled.span`
  color: cyan;
`;

const DefaultText = styled.span`
  color: lightgray;
`;

class ValueText extends React.PureComponent<IValueTextProps, any> {
  public onDoubleClick = () => {
    console.log('I am Dobule Clicled', this.props);
  };

  public render() {
    const { value, type } = this.props;

    let WrapperTag = DefaultText;
    let formattedString = value;
    switch (type) {
      case 'S':
        formattedString = `"${value}"`;
        WrapperTag = StringText;
        break;
      case 'N':
        WrapperTag = NumberText;
        break;
      case 'B':
        formattedString = value ? 'true' : 'false';
        WrapperTag = BooleanText;
        break;
      default:
        break;
    }
    return (
      <WrapperTag onDoubleClick={this.onDoubleClick} title={value.toString()}>
        {formattedString}
      </WrapperTag>
    );
  }
}

export default ValueText;
