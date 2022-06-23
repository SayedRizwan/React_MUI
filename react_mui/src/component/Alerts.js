import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={3}>

      <Alert severity="success"> <Button variant="contained" color="error" size="small">
        New
      </Button>
         This is a new alert — check it out!</Alert>
    </Stack>
  );
}
//style={{fontWeight:'bold'}}
