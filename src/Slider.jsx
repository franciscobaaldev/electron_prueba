
import React, { useState } from "react"
import Slider from '@material-ui/core/Slider';

const SliderComponent  =() => {
    const [value,setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    return (
        <div>
        <span>{value}</span>
        <div>
            <Slider 
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{width: '70%'}}
            />
        </div>
        </div>

    )
}

export default SliderComponent;