import { ListItem, ListItemText, Stack} from "@mui/material";
import { ModeCommentOutlined } from "@mui/icons-material";

import { Thread } from "@/types";

function ThreadPreview({ thread }: { thread: Thread }) {
  return (
    <ListItem>
      <ListItemText
        primary={thread.title}
        secondary={`Posted by: ${thread.userId}`}
      />
      <Stack direction="row" spacing={1}>
        <ModeCommentOutlined />
      </Stack>
    </ListItem>
  );
}

export default ThreadPreview;
