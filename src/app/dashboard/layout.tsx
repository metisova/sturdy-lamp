import { Box, AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import Image from 'next/image';
import Main from '../../components/Main';
import Logo from './logo.png';

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
          backgroundColor: '#fff',
          color: '#000',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
            Sturdy Lamp
          </Typography>
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </Toolbar>
      </AppBar>
      <Main>{children}</Main>
    </Box>
  );
}
