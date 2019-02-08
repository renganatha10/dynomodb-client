import { Button, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import TableItem from './TableItem';

const data = {
  Items: [
    {
      bin: {
        B:
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
      },
      fhfg: {
        M: {
          hjhj: {
            S: 'jhjh',
          },
          hjj: {
            L: [
              {
                S: 'kjjkk',
              },
              {
                M: {
                  nkk: {
                    S: 'jkkj',
                  },
                },
              },
              {
                M: {
                  jkkj: {
                    M: {
                      jhhjhj: {
                        S: 'jkk',
                      },
                      jkkj: {
                        M: {
                          kjjkkk: {
                            M: {
                              kllkklkllk: {
                                M: {},
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
      id: {
        S: '837aa222-0df4-4786-8bac-9ac0d0ce0a92',
      },
      Listing: {
        L: [
          {
            S: 'sdds',
          },
          {
            N: '1',
          },
          {
            M: {
              dss: {
                S: 'sdsd',
              },
            },
          },
        ],
      },
      nullllll: {
        NULL: true,
      },
      number: {
        N: '12345',
      },
      ssss: {
        SS: ['dssdssd', 'sdsdds', 'dsdssd', 'sdsdsd'],
      },
      nssms: {
        NS: [1, 2, 2, 3, 4],
      },
      strom: {
        S:
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
      },
      title: {
        S: 'New',
      },
    },
  ],
};

class TableItemContent extends React.PureComponent<{ tableItems: any }, any> {
  public static defaultProps = {
    tableItems: data.Items,
  };

  // public convertedState: any = [];
  // public primitiveTypes: string[] = ['N', 'S', 'BOOL'];
  // public stringSets: string[] = ['NS', 'SS', 'BS'];

  // public recursiveAddtion = (hierarchy: number, item: any) => {
  //   Object.keys(item).forEach(key => {
  //     const itemKeyValue = item[key];
  //     const tableItemDataType = Object.keys(itemKeyValue)[0];

  //     if (this.primitiveTypes.includes(tableItemDataType)) {
  //       const tableItemValue = itemKeyValue[tableItemDataType];
  //       const modifiedItem = {
  //         columnName: key,
  //         dataType: tableItemDataType,
  //         isEdit: false,
  //         isNew: false,
  //         isDelete: false,
  //         hierarchy: hierarchy + 1,
  //         value: tableItemValue,
  //       };

  //       this.convertedState.push(modifiedItem);
  //     } else if (this.stringSets.includes(tableItemDataType)) {
  //       const tableItemValues = itemKeyValue[tableItemDataType];

  //       const stringSetObj = {};
  //       tableItemValues.forEach((tableItemValue: string, index: number) => {
  //         stringSetObj[index] = { S: tableItemValue };
  //       });

  //       this.recursiveAddtion(hierarchy, stringSetObj);
  //     } else if (tableItemDataType === 'L') {
  //       // const tableItemValues = itemKeyValue[tableItemDataType];
  //     }
  //   });
  // };

  // public componentDidMount() {
  //   const primitiveTypes: string[] = ['N', 'S', 'BOOL'];
  //   const stringSets: string[] = ['NS', 'SS', 'BS'];
  //   const item = data.Items[0];

  //   const something = {
  //     columnName: 'bin',
  //     dataType: 'S',
  //     isEdit: false,
  //     isNew: false,
  //     isDelete: false,
  //     hirercky: 0,
  //     value:
  //       'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
  //   };
  // }

  public render() {
    const { tableItems } = this.props;
    return (
      <React.Fragment>
        <Row>
          <ContentHeader>
            <Button type="primary"> Add Item + </Button>
            <div>
              <DisplayText>Display 10 of 1230 Items</DisplayText>
              <Button icon="sync" />
            </div>
          </ContentHeader>
        </Row>
        {tableItems.map((tableItem: object, index: number) => (
          <TableItem key={`tableItem ${index}`} tableItem={tableItem} />
        ))}
      </React.Fragment>
    );
  }
}

export default TableItemContent;

const ContentHeader = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  margin: 10px 0px;
`;

const DisplayText = styled.span`
  padding: 0 10px;
`;
