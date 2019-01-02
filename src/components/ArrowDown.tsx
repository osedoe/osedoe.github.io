import React from 'react';
import styled from '@emotion/styled';

const Arrow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 2/3;
    grid-row: 3/4;
    place-self: center;
`;

const Box = styled.div`
    background: black;
    height: 50px;
    width: 50px;
`;

const Line = styled.div`
    background: black;
    height: 120px;
    margin: 1em;
    width: 2px;
`;

export default class ArrowDown extends React.Component<{}, {}> {
    render() {
        return <Arrow>
            <Box>
                ||
            </Box>
            <Line />
        </Arrow>
    }
}