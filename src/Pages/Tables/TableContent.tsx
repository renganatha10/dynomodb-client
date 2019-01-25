import { Button, Col, Input, notification, Row, Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import * as React from 'react';

interface IUserData {
  name: string;
  status: 'ACTIVE' | 'PENDING';
  itemCount: number;
  id: string;
  key: string;
}

interface ITestState {
  textInput: string;
  tableData: IUserData[];
  loading: boolean;
}

interface ITableResponse {
  TableName: string;
  TableStatus: 'ACTIVE' | 'PENDING';
  TableId: string;
  ItemCount: number;
}

const columns: Array<ColumnProps<IUserData>> = [
  {
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    title: 'Name',
    width: '50$',
  },
  {
    dataIndex: 'status',
    key: 'status',
    title: 'Staus',
    width: '25%',
  },
  {
    dataIndex: 'itemCount',
    key: 'itemCount',
    title: 'Item Count',
    width: '25%',
  },
];

class TableContent extends React.PureComponent<{}, ITestState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      tableData: [],
      textInput: '',
    };
  }

  public async componentDidMount() {
    try {
      const { tableDetails }: { tableDetails: ITableResponse[] } = await fetch(
        'http://localhost:3000/tables'
      ).then(r => r.json());

      const tableData: IUserData[] = tableDetails.map(
        ({ TableName, TableStatus, TableId, ItemCount }) => ({
          name: TableName,
          status: TableStatus,
          id: TableId,
          key: TableId,
          itemCount: ItemCount,
        })
      );
      this.setState({ tableData, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
      notification.error(err.message);
    }
  }

  public onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const textInput = e.currentTarget.value;
    this.setState({ textInput });
  };

  public render() {
    const { textInput, tableData, loading } = this.state;

    const filteredDatas = tableData.filter(tableDat =>
      tableDat.name.toLowerCase().includes(textInput)
    );

    return (
      <Row>
        <Row
          style={{
            marginBottom: 10,
          }}
        >
          <Col md={12}>
            <Input
              onChange={this.onChange}
              placeholder={'Search Item By Table Name'}
              value={textInput}
            />
          </Col>
          <Col md={{ span: 3, offset: 9 }}>
            <Button type={'primary'}> Add New Table </Button>
          </Col>
        </Row>
        <Row>
          <Table
            style={{ backgroundColor: 'white' }}
            loading={loading}
            size={'middle'}
            columns={columns}
            dataSource={filteredDatas}
            scroll={{ x: true, y: true }}
          />
        </Row>
      </Row>
    );
  }
}

export default TableContent;
