import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Main from "../../components/Main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          {/* TODO add logo */}
          <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
            Sturdy Lamp
          </Typography>
          {/* TODO add user avatar */}
        </Toolbar>
      </AppBar>
      <Main>{children}</Main>
    </Box>
  );
}
