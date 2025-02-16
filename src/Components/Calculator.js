import{useState} from "react"
import './CSS/Calculator.css'
import Card from "./Card.js"

function Calculator() {
    const [digit, setDigit] = useState("1");
    const [quantity, setQuantity] = useState(0);
    const [operator, setOperator] = useState("+");
    const [error, setError] = useState("");

    const changeOperator = (e) => {
        setOperator(e.target.value);
    }

    const changeDigit = (e) => {
        setDigit(e.target.value);
    }

    const changeQuantity = (e) => {
        setError('');
        let currQuantity = e.target.value;
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

    return (
        <div className="calculator-container">
            <div className="error-msg">
                {error}
            </div>
            <form>
                <label>Select number digit</label>
                <select onChange={changeDigit}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <label>How many do you want to generate? Please input a number between 1 and 100. </label>
                <input onChange={changeQuantity}></input>
                <label>What operator do you want to practice on?</label>
                <select value={operator} onChange={changeOperator}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <button onClick={reset}>reset</button>
            </form >

            {Array.from({length: quantity}, (_, i) => (
                <li key={i} className="result-container">
                        <Card operator={operator} digit={digit} />
                </li>
            ))}
        </div>
    )

}

export default Calculator;