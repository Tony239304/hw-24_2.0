import Owner from "./owner"

type CarProps = {
    vin: number;
    model: string;
    manuf: string;
    cardStyle: string
}


function Car({vin, model, manuf, cardStyle}: CarProps) {
    return (
        <div className={cardStyle}>
            <h2>Model: {model}</h2>
            <h3>Manufacture: {manuf}</h3>
            <p>VIN: {vin}</p>
            <Owner/>
        </div>
    )
}

export default Car;