import { Box, Button, Container, List } from '@mui/material';
import Link from 'next/link';
import ThreadList from './ThreadList';

function ThreadView() {
 

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>Thread</h3>
        <Link href="/newThread">
          <Button
            sx={{ textTransform: 'none' }}
            size="small"
            variant="contained"
          >
            New thread
          </Button>
        </Link>
      </Box>
      <List sx={{ bgcolor: 'background.paper' }}>
        <ThreadList />
      </List>
    </Container>
  );
}

export default ThreadView;
