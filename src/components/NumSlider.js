import React from "react";
import "./NumSlider.css";
import { Typography, makeStyles, Slider, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 655,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  typo: {
    margin: "45px 0",
  },
});

const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 100000,
    label: "1,00,000",
  },
];

const MySlider = withStyles({
  root: {
    color: "#1977F3",
    "& $horizontal": {
      width: 8,
      height: "10%",
    },
  },
  vertical: {
    "& $rail": {
      width: 10,
    },
    "& $track": {
      width: 8,
    },
    "& $thumb": {
      marginLeft: -6,
      marginBottom: -6,
    },
    "& $mark": {
      width: 8,
      backgroundColor: "red",

      "& $markLabelActive": {
        backgroundColor: "yellow",
      },
    },
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid ",
    marginTop: -8,
    marginLeft: 10,
    "&:focus, &:hover, &$active": {},
  },
  active: {
    color: "#DADADA",
  },
  mark: {
    height: 8,
  },
  valueLabel: {
    left: "calc(-50%)",
  },
  track: {
    height: 8,
  },
  rail: {
    height: 8,
  },
})(Slider);

export default function NumSlider() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <div className={classes.root}>
      <MySlider
        orientation="horizontal"
        marks={marks}
        step={10}
        valueLabelDisplay="on"
        value={value}
        aria-label="Deneme"
        color="#DADADA"
        min={100}
        max={100000}
        defaultValue={100}
        onChange={handleChange}
        height="5px"
      />
    </div>
  );
}
