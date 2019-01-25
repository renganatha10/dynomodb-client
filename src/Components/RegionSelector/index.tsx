import { Select } from 'antd';
import * as React from 'react';

const { Option } = Select;

const RegionSelector = () => {
  return (
    <Select placeholder={'Select Region'} style={{ width: '100%' }}>
      <Option value="us-east-2">us-east-2 - Ohio</Option>
      <Option value="us-east-1">us-east-1 - N. Virginia</Option>
      <Option value="us-west-1">us-west-1 - N. California</Option>
      <Option value="us-west-2">us-west-2 - Oregon</Option>
      <Option value="ap-south-1">ap-south-1 - Mumbai</Option>
      <Option value="ap-northeast-3	">ap-northeast-3 - Osaka-Local</Option>
      <Option value="ap-northeast-2">ap-northeast-2 - Seoul</Option>
      <Option value="ap-southeast-1">ap-southeast-1 - Singapore</Option>
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
      <Option value="sa-east-1">sa-east-1 - South America (São Paulo)</Option>
      <Option value="us-gov-east-1">
        us-gov-east-1 - South America AWS GovCloud (US-East)
      </Option>
      <Option value="us-gov-west-1">
        us-gov-west-1 - South America AWS GovCloud (US)
      </Option>
    </Select>
  );
};

export default RegionSelector;
