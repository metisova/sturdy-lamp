import { Box, Container } from "@mui/material";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f5f5f5",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}

export default Main;
