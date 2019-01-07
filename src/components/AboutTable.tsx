import React from 'react';
import styled from '@emotion/styled';

const Table = styled.table`
    font-family: 'Exo 2';
    margin: .3em;
    padding: .3em;
`;

interface AboutTableProps {
    elements: string[][];
}

export default class AboutTable extends React.Component<AboutTableProps, {}> {
    render() {
        const { elements } = this.props;
        return <Table>
            <tbody> 
                <tr>
                    {elements[0].map(element => <td key={element}>{element}</td>)}
                </tr>
                <tr>
                    {elements[1].map(element => <td key={element}>{element}</td>)}
                </tr>
                <tr>
                    {elements[2].map(element => <td key={element}>{element}</td>)}
                </tr>
                <tr>
                    {elements[3].map(element => <td key={element}>{element}</td>)}
                </tr>
            </tbody>
        </Table>
    }
}