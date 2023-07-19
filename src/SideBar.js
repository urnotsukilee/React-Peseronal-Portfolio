import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const tabStyle = { 
    fontWeight:'bold', 
    "&.Mui-selected": { bgcolor: "yellow", color:'black'} 
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ '& .MuiTabs-indicator':{backgroundColor:"black"}}}
      >
        <Tab label="About" href='#About'  sx={tabStyle}/>
        <Tab label="Education" href='#Education' sx={tabStyle}/>
        <Tab label="Experience" href='#Experience' sx={tabStyle}/>
      </Tabs>
    </Box>
  );
}
