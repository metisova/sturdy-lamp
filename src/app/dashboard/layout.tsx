import { Box, AppBar, Container } from '@mui/material';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <AppBar>navbar</AppBar>
      <Container>
        {children}
      </Container>
    </Box>
  );
}
