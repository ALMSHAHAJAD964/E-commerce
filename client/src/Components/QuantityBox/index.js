import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const QuantityBox = () => {
    const [inputVal, setInputVal] = useState(1);

    const minus = () => {
        if (inputVal > 1) {
            setInputVal(inputVal - 1);
        }
    };

    const plus = () => {
        setInputVal(inputVal + 1);
    };


    return (
        <div className="quantityDrop d-flex align-items-center">
            <Button onClick={minus} variant="outlined" size="small">
                <FaMinus />
            </Button>
            <input
                type="number"
                value={inputVal}
                className="mx-2"
                min="1"
            />
            <Button onClick={plus} variant="outlined" size="small">
                <FaPlus />
            </Button>   
        </div>
    );
};

export default QuantityBox;
