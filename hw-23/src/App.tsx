import CarFunc from "./components/CarFunc";
import "./App.css";

type CarType = {
    vin: number;
    model: string;
    manuf: string;
}

function App() {
    const cars: CarType[] = [
        {vin: 23414, model: "RAV4", manuf: "Toyota"},
        {vin: 24464, model: "Quashqai", manuf: "Nissan"},
        {vin: 55414, model: "Moskvich-412", manuf: "AZLK"},
        {vin: 42114, model: "C4", manuf: "Citroen"},
        {vin: 26634, model: "Tiggo 7", manuf: "Cherry"},

    ]
    return (
        <div>
            <h1>Cars With Owner</h1>
            <div className="row">
                {cars.map((car) => (
                    <CarFunc key={car.vin} {...car} cardStyle="carCard"/>
                ))}
            </div>
        </div>
    )
}

export default App
