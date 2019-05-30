import React from 'react';
import styled from '@emotion/styled';

const Table = styled.table`
    font-family: 'Exo 2', monospace;
    margin: 0;
    padding: 4px;
`;

interface AboutTableProps {
  elements: string[][];
}

export const AboutTable = (props: AboutTableProps) => {
  const {elements} = props;
  return <Table>
    <tbody>
    <tr>{elements[0].map(element => <td key={element}>{element}</td>)}</tr>
    <tr>{elements[1].map(element => <td key={element}>{element}</td>)}</tr>
    <tr>{elements[2].map(element => <td key={element}>{element}</td>)}</tr>
    <tr>{elements[3].map(element => <td key={element}>{element}</td>)}</tr>
    </tbody>
  </Table>;
};
