import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: React.FC = () => {
  return (
    <Box p={3} display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
