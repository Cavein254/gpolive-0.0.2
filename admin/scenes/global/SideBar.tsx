import { tokens } from '@/admin/theme';
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, Sidebar, sidebarClasses } from 'react-pro-sidebar';
const SideBarItem = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('dashboard');
  return (
    <Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <Menu>
          <Box>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlineIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile image"
                  height={100}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                  width={100}
                  src="https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=60"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  User Name
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[300]}>
                  CEO
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}></Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBarItem;
