import{useState} from "react"
import './CSS/Calculator.css'

const getRandomFloat = ((min, max) => {
    return (Math.random() * (max - min) + min);
})

function Calculator() {
    const [digit, setDigit] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    return (
        <div className="calculator-container">
            <label>select digit</label>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <label>How many do you want to generate?</label>
            <input></input>
            <label>What operator do you want to practice on?</label>
            <select>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
            {Array.from({length: quantity}, (_, i) => (
                <li key={i} className="result-container">
                    <div>{first}</div>
                    <div>{second}</div>
                    <div>{operator}</div>
                    <div>{result}</div>
                </li>
            ))}
        </div>
    )

}

export default Calculator;