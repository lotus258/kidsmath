import{useState, useEffect} from "react"
import "./CSS/Card.css"

function Card(props) {
    const[result, setResult] = useState('0');
    const[first, setFirst] = useState('1');
    const[second, setSecond] = useState('1');
    const[message, setMessage] = useState("");
    const[input, setInput] = useState("");

    const getRandomFloat = ((min, max) => {
        return Math.round(((Math.random() * (max - min) + min)));
    })

    const getMax = () => {
        let max = 1;
        switch(props.digit){
            case "1":
                max = 10;
                break;
            case "2":
                max = 100;
                break;
            case "3":
                max = 1000;
                break;
        }
        return max;
    }

    useEffect(() => {
        const max = getMax();
        const randomFirst = getRandomFloat(1, max);
        const randomSecond = getRandomFloat(1, max);

        setFirst(randomFirst);
        setSecond(randomSecond);

        switch (props.operator) {
            case "+" :
                setResult(randomFirst + randomSecond);
                break;
            case "-":
                setResult(randomFirst - randomSecond);
                break;
            case "*":
                setResult(randomFirst * randomSecond);
                break;
            case "/":
                setResult(Math.round(randomFirst / randomSecond));
        }
    }, [props.operator]);

    const changeInput = (e) => {
        setInput(e.target.value);
        setMessage("");
    }

    const click = () => {
        if (result == input) {
            setMessage("You got it! Good job!  🏆 ");
        } else {
            setMessage(`Oh no the correct answer is ${result}`);
        }
    }

    return (
        <div className="card-container">
            <div className="first">{first}</div>
            <div className="second">{second}</div>
            <div className="operator">{props.operator}</div>
            <input onChange={changeInput} className="input"></input>
            <button onClick={click}>Click to check </button>
            <div>{message}</div>
        </div>
    )

}

export default Card;