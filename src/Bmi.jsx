import { useRef, useState } from "react";
const BmiText = ({ bmi }) => {
    if (bmi < 18.5)
        return (<h1>Underweight</h1>);
    if (bmi > 30)
        return (<h1>Overweight</h1>);
    return (<h1>Normal</h1>);
}
export default function Bmi() {
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi, setBmi] = useState(0.00);
    function handleClick() {
        let W = W_input.current.value;
        let H = H_input.current.value / 100;
        setBmi(W / (H*H));
    }
    return (
        <>
        <h3>BMI Calculator</h3>
        Weight:
            <input ref={W_input} /><br/>
        Height:
            <input ref={H_input} /><br/>
            <button onClick={handleClick}> Calculate! </button><br />
            Bmi value: {Bmi.toFixed(2)}
            <BmiText bmi={Bmi} />
        </>
    );
}