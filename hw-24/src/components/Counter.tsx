import {useState} from "react";

type CounterProps = {
    min: number;
    max: number;
}

function Counter({min, max}: CounterProps) {
    const [value, setValue] = useState<number>(min);

    return (
        <div>
            <div className="counter">
                <button className="minus" onClick={() => {
                    if (value > min) {
                        setValue(value - 1);
                    }
                }}>-
                </button>

                <span>Count: {value}</span>

                <button className="plus" onClick={() => {
                    if (value < max) {
                        setValue(value + 1);
                    }
                }}>+
                </button>
            </div>

            <div className="advanced-container">
                <label className="advanced-label">Advanced Counter</label>
                <div className="advanced-controls">
                    <button onClick={() => {
                        if (value > min) {
                            setValue(value - 1);
                        }
                    }}>-
                    </button>

                    <input
                        type="number"
                        value={value}
                        onChange={(event) => {
                            const newValue = Number(event.target.value);
                            if (!isNaN(newValue) && newValue >= min && newValue <= max) {
                                setValue(newValue);
                            }
                        }}
                    />

                    <button onClick={() => {
                        if (value < max) {
                            setValue(value + 1);
                        }
                    }}>+
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;