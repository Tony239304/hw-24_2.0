import {useState} from "react";

function Owner() {
    const [owner, setOwner] = useState("Unknow");


    return (
        <div>
            <p>Owner: {owner}</p>
            <button onClick={() => setOwner(prompt("Enter new owner") || "Unknown")}>
                Set owner
            </button>
        </div>
    );
}

export default Owner;