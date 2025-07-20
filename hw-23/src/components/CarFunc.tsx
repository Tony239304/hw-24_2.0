type CarFuncProps = {
    vin: number;
    model: string;
    manuf: string;
    cardStyle: string
};

function CarFunc({vin, model, manuf, cardStyle}: CarFuncProps) {
    return (
        <div className={cardStyle}>
            <h2>Model: {model}</h2>
            <h3>Manufacture: {manuf}</h3>
            <p>VIN: {vin}</p>
        </div>
    )
}
export default CarFunc;