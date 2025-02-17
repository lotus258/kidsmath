import{useState} from "react"
import Card from "./Card.js"

function Calculator() {
    const [digit, setDigit] = useState("1");
    const [quantity, setQuantity] = useState(0);
    const [operator, setOperator] = useState("+");
    const [error, setError] = useState("");
    const [icon, setIcon] = useState("🏆");

    const changeOperator = (e) => {
        setOperator(e.target.value);
    }

    const changeDigit = (e) => {
        setDigit(e.target.value);
    }

    const changeQuantity = (e) => {
        setError('');
        let currQuantity = Number(e.target.value);
        if (isNaN(currQuantity) || currQuantity < 1 || currQuantity > 100) {
            setError("Please input a number between 1 and 100");
        }
        if (typeof currQuantity !== "number" ) {
            setError("Please input a number between 1 and 100");
        }
        setQuantity(e.target.value);
    }

    const reset = () => {
        setDigit('1');
        setQuantity(0);
        setOperator("+");
        setError("");
    }

    const changeIcon = (e) => {
        setIcon(e.target.value);
    }

    return (
        <div className="calculator-container">
            <form style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"0.5vw", padding:"2vw"}}>
                <label>Select number digit</label>
                <select onChange={changeDigit}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <label>How many do you want to generate?</label>
                <input onChange={changeQuantity}></input>
                <div className="error-msg" style={{color:"red", fontSize:"1vw"}}>
                    {error}
                </div>
                <label>What do you want to practice on?</label>
                <select value={operator} onChange={changeOperator}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                </select>
                <label>What is your favorite emoji?</label>
                <select value={icon} onChange={changeIcon}>
                    <option>🏆</option>
                    <option>🦖</option>
                    <option>🐉</option>
                    <option>🦋</option>
                    <option>🦄</option>
                </select>
                <button onClick={reset}>reset</button>
            </form>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1vw"}}>
                {Array.from({length: quantity}, (_, i) => (
                    <li key={i} className="result-container" style={{listStyle:"none", padding:"none", margin:"none"}}>
                            <Card operator={operator} digit={digit} icon={icon}/>
                    </li>
                ))}
            </div>
        </div>
    )

}

export default Calculator;