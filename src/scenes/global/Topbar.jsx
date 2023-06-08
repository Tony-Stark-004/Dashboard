import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material'
import {useContext} from 'react'
import { colorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(colorModeContext)
  return (
    <Box display='flex' justifyContent='space-between' p={2}>

      {/* sreach bar section */}
       <Box display='flex' bgcolor={colors.primary[400]} borderRadius='3px'>
            <InputBase sx={{ml: 2, flex: 1 }} placeholder='Search'/>
            <IconButton type='button' sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
       </Box>

       {/* icons section */}
       <Box display='flex'>
          <IconButton onClick={colorMode.toggleColorMode}>
             {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <IconButton>
             <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
             <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
       </Box>
    </Box>
  )
}

export default Topbar