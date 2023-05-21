import React from 'react';

const Section = ({ ...rest }) => {
  return (
    <Box
      pt={8}
      mx="auto"
      w={{ base: '100%', md: '3xl', lg: '4xl' }}
      p={{ base: 1, md: 4 }}
      {...rest}
    ></Box>
  );
};

export default Section;
