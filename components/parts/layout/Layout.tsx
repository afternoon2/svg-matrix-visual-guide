import React from 'react';
import { Box, Grid, Flex } from 'theme-ui';
import Code from '../code';
import Footer from '../footer';
import Function from '../function';
import Equation from '../equation';
import Graph from '../graph';
import Point from '../point';

const Layout: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      position: 'relative',
    }}
  >
    <Grid
      columns={['repeat(2, 1fr)', 'repeat(12, 1fr)', 'repeat(12, 1fr)']}
      p={4}
      sx={{
        gridTemplateRows: ['repeat(12, 1fr)', 'repeat(10, 1fr)', 'repeat(10, 1fr)'],
        gridColumnGap: 3,
        gridRowGap: 3,
        position: 'absolute',
        width: '100%',
        height: '100vh',
        minHeight: '1200px',
        overflowY: 'auto',
      }}
    >
      <Flex
        sx={{
          gridArea: ['11 / 1 / 12 / 2', '8 / 7 / 9 / 13', '7 / 9 / 9 / 13'],
        }}
      >
        <Code />
      </Flex>
      <Flex
        sx={{
          gridArea: ['1 / 1 / 7 / 3', '1 / 1 / 7 / 13', '1 / 1 / 11 / 9'],
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        <Graph />
      </Flex>
      <Flex
        sx={{
          gridArea: ['7 / 1 / 8 / 3', '7 / 7 / 8 / 13', '5 / 9 / 7 / 13'],
        }}
      >
        <Function />
      </Flex>
      <Flex
        sx={{
          gridArea: ['8 / 1 / 11 / 3', '7 / 1 / 9 / 7', '2 / 9 / 5 / 13'],
        }}
      >
        <Equation />
      </Flex>
      <Flex
        sx={{
          gridArea: ['12 / 1 / 13 / 2', '9 / 7 / 11 / 13', '9 / 9 / 11 / 13'],
        }}
      >
        <Point />
      </Flex>
      <Flex
        sx={{
          gridArea: ['11 / 2 / 13 / 3', '9 / 1 / 11 / 7', '1 / 9 / 2 / 13'],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Footer />
      </Flex>
    </Grid>
  </Box>
);

export default Layout;
