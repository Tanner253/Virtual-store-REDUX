import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <>
      <footer>
        <Box sx={{ width: 500, justifyContent: 'center', margin: 'auto', marginTop: 50}}>
          <BottomNavigation
            showLabels
          >
          <BottomNavigationAction href="https://www.github.com" label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction href="https://www.linkedin.com/in/tannerperc" label="LinkedIn" icon={<LinkedInIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
    </footer>
    </>
  )
}