import { Button, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import TableItem from './TableItem';

const data = {
  Items: [
    {
      // bin: {
      //   B:
      //     'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
      // },
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
      // nullllll: {
      //   NULL: true,
      // },
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
        S: '/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
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
