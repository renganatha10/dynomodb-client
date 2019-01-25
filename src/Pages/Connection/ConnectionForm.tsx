import { Button, Form, Icon, Input, notification, Select, Tooltip } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const { Option } = Select;

class RegistrationForm extends React.PureComponent<FormComponentProps> {
  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      notification.error({ message: 'some terr' });
      if (!err) {
        try {
          await fetch('http://localhost:3000/connect', {
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }).then(r => r.json());
        } catch (err) {
          notification.error({ message: 'some terr' });
        }
      }
    });
  };

  public render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 16 },
        xs: { span: 24 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        sm: {
          offset: 8,
          span: 16,
        },
        xs: {
          offset: 0,
          span: 24,
        },
      },
    };

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            {...formItemLayout}
            label={
              <span>
                Public Key&nbsp;
                <Tooltip title="Create Key/Value From Amazon console">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('publickey', {
              rules: [
                {
                  message: 'Please input your Public Key',
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={
              <span>
                Accesss Key&nbsp;
                <Tooltip title="Create Key/Value From Amazon console">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('accesskey', {
              rules: [
                {
                  message: 'Please input your AccessKey',
                  required: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            extra="We don't save any of your information"
            label="Region"
          >
            {getFieldDecorator('region', {
              rules: [
                { required: true, message: 'Please input your phone number!' },
              ],
            })(
              <Select>
                <Option value="us-east-2">us-east-2 - Ohio</Option>
                <Option value="us-east-1">us-east-1 - N. Virginia</Option>
                <Option value="us-west-1">us-west-1 - N. California</Option>
                <Option value="us-west-2">us-west-2 - Oregon</Option>
                <Option value="ap-south-1">ap-south-1 - Mumbai</Option>
                <Option value="ap-northeast-3	">
                  ap-northeast-3 - Osaka-Local
                </Option>
                <Option value="ap-northeast-2">ap-northeast-2 - Seoul</Option>
                <Option value="ap-southeast-1">
                  ap-southeast-1 - Singapore
                </Option>
                <Option value="ap-southeast-2">ap-southeast-2 - Sydney</Option>
                <Option value="ap-northeast-1">ap-northeast-1 - Tokyo</Option>
                <Option value="ca-central-1">ca-central-1 - Central</Option>
                <Option value="cn-north-1">cn-north-1 - Beijing</Option>
                <Option value="cn-northwest-1">cn-northwest-1 - Ningxia</Option>
                <Option value="eu-central-1">eu-central-1 - Frankfurt</Option>
                <Option value="eu-west-1">eu-west-1 - Ireland</Option>
                <Option value="eu-west-2">eu-west-2 - London</Option>
                <Option value="eu-west-3">eu-west-3 - Paris</Option>
                <Option value="eu-north-1">eu-north-1 - Stockholm</Option>
                <Option value="sa-east-1">
                  sa-east-1 - South America (São Paulo)
                </Option>
                <Option value="us-gov-east-1">
                  us-gov-east-1 - South America AWS GovCloud (US-East)
                </Option>
                <Option value="us-gov-west-1">
                  us-gov-west-1 - South America AWS GovCloud (US)
                </Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={'Favorite'}
            extra={'Add your Favorite Connection'}
          >
            {getFieldDecorator('Favorite')(
              <Input placeholder={'Ex: PRODUCTIION, QA'} />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Connect
            </Button>
          </Form.Item>
        </Form>
      </Container>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
