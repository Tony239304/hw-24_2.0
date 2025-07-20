import Counter from "./components/Counter";
import "./App.css"

function App() {
    return (
        <div>
            <h1>COUNTER</h1>
            <Counter min={0} max={10}/>
        </div>
    )
}


export default App;