import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const SectionHeading = ({ title, detail, children }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap="48"
      rowGap={0}
      my={4}
    >
      <GridItem textAlign={{ md: 'right' }} mb={-2}>
        <Text fontSize="xl" letterSpacing={2}>
          {title}
        </Text>
      </GridItem>
      <GridItem />
      <GridItem textAlign={{ md: 'right' }}>
        <Text fontWeight="bold" fontSize="5xl" mt={-2}>
          {detail}
        </Text>
      </GridItem>
      <GridItem verticalAlign="bottom">{children}</GridItem>
    </Grid>
  );
};

export default SectionHeading;
