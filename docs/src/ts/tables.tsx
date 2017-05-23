import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../src/ts';

const data = [
  ['', 'Column header 1', 'Column header 2', 'Column header 3', 'Column header 4', 'Column header 5'],
  ['Row header 1', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row header 2', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row header 3', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row header 4', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ['Row header 5', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5']
];

const COLUMN_HEADER_WIDTH = 150;

export const Tables = () => {
  const [ headers = [], ...body ] = data;

  return (
    <Section>
      <Row>
        <Column>
          <h2>
            Tables
          </h2>
        </Column>
      </Row>
      <Row>
        <Column>
          <h3>
            Demo
          </h3>
          <Table striped hover fixColumnHeaders columnHeaderMaxWidth={COLUMN_HEADER_WIDTH}>
            <TableHead>
              <TableRow>
                {
                  headers.map((header, index) => index === 0 ? (
                    <TableHeader key={header} maxWidth={COLUMN_HEADER_WIDTH} />
                  ) : (
                    <TableHeader key={header}>
                      {header}
                    </TableHeader>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                body.map((row = [], rowIndex) => (
                  <TableRow key={rowIndex + row.join()}>
                    {
                      row.map((cell, index) => index === 0 ? (
                        <TableHeader key={cell} maxWidth={COLUMN_HEADER_WIDTH}>
                          {cell}
                        </TableHeader>
                      ) : (
                        <TableCell key={cell}>
                          {cell}
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Column>
      </Row>
      <Row>
        <Column>
          <h3>
            Code
          </h3>
          <CodeBlock language="javascript">
            {`
              <Section>
                <p>
                  Section 1
                </p>
              </Section>
              <Section>
                <p>
                  Section 2
                </p>
              </Section>
              <Section>
                <p>
                  Section 3
                </p>
              </Section>
            `}
          </CodeBlock>
        </Column>
      </Row>
    </Section>
  );
};
