import { ListItem, ListItemText, Stack, Box } from '@mui/material';
import { ModeCommentOutlined } from '@mui/icons-material';

import { Thread } from '@/types';

function ThreadPreview({ thread }: { thread: Thread }) {
  return (
    <ListItem>
      <ListItemText
        primary={thread.title}
        secondary={`Posted by: ${thread.author} | ${thread.datePosted}`}
      />
      <Stack direction="row" spacing={1}>
        <ModeCommentOutlined />
        <Box sx={{ flexGrow: 3 }}>{thread.commentCount}</Box>
      </Stack>
    </ListItem>
  );
}

export default ThreadPreview;
