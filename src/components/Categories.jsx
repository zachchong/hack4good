import './categories.css'
import {Tabs, Tab, Divider} from '@mui/material/';
import * as React from 'react';

function Categories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Eight" />
        <Tab label="Item Nine" />
        <Tab label="Item Ten" />
        <Tab label="Item Eleven" />
        <Tab label="Item Twelve" />
        <Tab label="Item Thirteen" />
        <Tab label="Item Fourteen" />
        <Tab label="Item Fifteen" />
        <Tab label="Item Sixteen" />
        <Tab label="Item Seventeen" />
        <Tab label="Item Eighteen" />
      </Tabs>

    </div>


  
  );
}

export default Categories;
