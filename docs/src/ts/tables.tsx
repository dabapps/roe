import * as React from 'react';

import {
  Anchor,
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

const [ headers = [], ...body ] = data;
const smallBody = [...body].splice(0, 2);

const COLUMN_HEADER_WIDTH = 150;

const Tables = () => {
  return (
    <Section>
      <Row>
        <Column>
          <h2>
            <Anchor>
              Tables
            </Anchor>
          </h2>
        </Column>
      </Row>
      <Row>
        <Column>
          <h3>
            Demo
          </h3>
          <Table bordered condensed>
            <TableBody>
              {
                smallBody.map((row = [], rowIndex) => (
                  <TableRow key={rowIndex + row.join()}>
                    {
                      row.map((cell) => (
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

          <Table striped hover fill fixRowHeaders rowHeaderWidth={COLUMN_HEADER_WIDTH}>
            <TableHead>
              <TableRow>
                {
                  headers.map((header, index) => index === 0 ? (
                    <TableHeader key={header} width={COLUMN_HEADER_WIDTH} />
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
                        <TableHeader key={cell} width={COLUMN_HEADER_WIDTH}>
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

          <p>
            Note: tables can also take a "fixed" prop to easily set the style "table-layout: fixed;".
          </p>

        </Column>
      </Row>
      <Row>
        <Column>
          <h3>
            Code
          </h3>
          <CodeBlock language="javascript" name="Data">
            {`
              const data = [
                ['', 'Column header 1', 'Column header 2', 'Column header 3', 'Column header 4', 'Column header 5'],
                ['Row header 1', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
                ['Row header 2', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
                ['Row header 3', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
                ['Row header 4', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
                ['Row header 5', 'Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5']
              ];

              const [ headers = [], ...body ] = data;
              const smallBody = [...body].splice(0, 2);
            `}
          </CodeBlock>
          <CodeBlock language="javascript" name="JSX">
            {`
              <Table bordered condensed>
                <TableBody>
                  {
                    smallBody.map((row = [], rowIndex) => (
                      <TableRow key={rowIndex + row.join()}>
                        {
                          row.map((cell) => (
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

              <Table striped hover fill fixRowHeaders rowHeaderWidth={COLUMN_HEADER_WIDTH}>
                <TableHead>
                  <TableRow>
                    {
                      headers.map((header, index) => index === 0 ? (
                        <TableHeader key={header} width={COLUMN_HEADER_WIDTH} />
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
                            <TableHeader key={cell} width={COLUMN_HEADER_WIDTH}>
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
            `}
          </CodeBlock>
        </Column>
      </Row>
    </Section>
  );
};

export default Tables;
