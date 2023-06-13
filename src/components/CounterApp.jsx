import { useState } from "react";
import { Button, Box } from "@mui/material";
import { PropTypes } from "prop-types";

const CounterApp = ({ value }) => {
  const [sumar, setSuma] = useState(value);

  const handleAdd = () => setSuma(sumar + 1);
  const handleSubstract = () => setSuma(sumar - 1);
  const handleReset = () => setSuma(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ sumar }</h2>
      <Box>
        <Button variant="contained" onClick={handleAdd}>
          +1
        </Button>
        <Button variant="contained" onClick={handleSubstract}>
          -1
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
