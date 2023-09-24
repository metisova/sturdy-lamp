import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function ThreadList() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Thread</h3>
        <Button sx={{ textTransform: "none" }} size="small" variant="contained">
          New thread
        </Button>
      </Box>
      <List sx={{ bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText primary="Bla bla bla" />
        </ListItem>
      </List>
    </Container>
  );
}

export default ThreadList;
