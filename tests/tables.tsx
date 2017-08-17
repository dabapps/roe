import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../src/ts/';

describe('Row', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              Header
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Cell
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(tree).toMatchSnapshot();
  });

  describe('Table', () => {

    it('should set the collapse size', () => {
      const tree = renderer.create(
        <Table collapse="xs" />
      );

      expect(tree).toMatchSnapshot();
    });

    it('should fix row headers to specified width', () => {
      const tree = renderer.create(
        <Table fixRowHeaders rowHeaderWidth={100}>
          <TableHead>
            <TableRow>
              <TableHeader width={100}>
                Header
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell width={100}>
                Cell
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(tree).toMatchSnapshot();
    });

    it('should apply table styles classes', () => {
      const tree = renderer.create(
        <Table striped bordered condensed hover />
      );

      expect(tree).toMatchSnapshot();
    });

    it('should apply some boolean classes', () => {
      const tree = renderer.create(
        <Table
          striped
          bordered
          hover
          condensed
          fill
          fixed
        />
      );

      expect(tree).toMatchSnapshot();
    });

  });

  describe('TableHeader', () => {

    it('should render a non breaking space if no children provided', () => {
      const tree = renderer.create(
        <TableHeader />
      );

      expect(tree).toMatchSnapshot();
    });

  });

  describe('TableCell', () => {

    it('should render a non breaking space if no children provided', () => {
      const tree = renderer.create(
        <TableCell />
      );

      expect(tree).toMatchSnapshot();
    });

  });

});
