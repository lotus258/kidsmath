import{useState, useEffect} from "react"

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
        }
    }, [props.operator]);

    const changeInput = (e) => {
        setInput(e.target.value);
        setMessage("");
    }

    const click = () => {
        if (result == input) {
            setMessage("You got it! Good job!" + props.icon);
        } else {
            setMessage(`Oh no! The correct answer is ${result}`);
        }
    }

    return (
        <div className="card-container" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gridTemplateRows:"repeat(5, 1fr)", width:"25vw", height:"auto", backgroundColor:"yellowgreen", border:"1px solid black", borderRadius:"10px", padding:"1vw"}}>
            <div className="first" style={{gridColumn:"3", gridRow:"1", justifySelf:"end"}}>{first}</div>
            <div className="second" style={{gridColumn:"3", gridRow:"2",  justifySelf:"end"}}>{second}</div>
            <div className="operator"style={{gridColumn:"2", gridRow:"2", justifySelf:"end"}}>{props.operator}</div>
            <input placeholder="Please input your result" onChange={changeInput} className="input" style={{gridColumn:"2/4", gridRow:"3", textAlign:"right"}}></input>
            <button onClick={click} style={{gridColumn:"2/4", gridRow:"4"}}>Click to check </button>
            <div style={{gridColumn:"1/5", gridRow:"5", justifySelf:"center", color:"red"}}>{message}</div>
        </div>
    )
}

export default Card;