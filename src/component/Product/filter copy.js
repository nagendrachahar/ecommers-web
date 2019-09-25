import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)"
    
  },
  slide: {
    color: "#ff7d0e"
  },
  textField: {
    padding: "2px"
  }
});

function valuetext(value) {
  return `${value}`;
}

export const RangeSlider = () => {
  const classes = useStyles();
  const [min, setMin] = useState(300);
  const [max, setMax] = useState(400);

  const handleRangeSlider = (event, newValue) => {
    setMin(newValue[0]);
    setMax(newValue[1]);
  };

  const handleTextChange = (index, event) => {
    if(index === 0) setMin(Number(event.target.value));
    else setMax(Number(event.target.value));
    
  };

  return (
    <div className={classes.root}>
      <div style={{borderBottom: "1px solid gray", padding: "10px 10px 0px"}}>
        <h6 style={{display: "inline-block"}}>Filter</h6>
        <i className="fas fa-filter float-right"></i>
      </div>
      
      <Grid container spacing={2} style={{padding: "10px"}}>
        <Grid item xs={12} className="filter_head" >
          Price
        </Grid>
        <Grid item xs={6}>

          <TextField
            id="outlined-dense"
            type="number"
            label="Min"
            value={min}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleTextChange.bind(this, 0)}
            margin="dense"
            variant="outlined"
           />
        
        </Grid>
        <Grid item xs={6}>
          <TextField
              id="outlined-dense"
              type="number"
              label="Max"
              value={max}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleTextChange.bind(this, 1)}
              margin="dense"
              variant="outlined"
            />
        </Grid>
        <Grid item>
          ₹ {min}
        </Grid>
        <Grid item xs>
          <Slider
            className={classes.slide}
            value={[min, max]} 
            min={0}
            max={1000}
            onChange={handleRangeSlider}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </Grid>
        <Grid item>
          ₹ {max}
        </Grid>
        
      </Grid>

    </div>
  );
}