import React, { useState } from 'react'
import Operation from './Operations'
import Output from './Output';

const Calculator = () => {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [result, setResult] = useState();
    const [msg, setMsg] = useState("");

    return (
        <div id='container'>
            <h1><strong>React Calculator</strong></h1>
            <div id='main'>
                <input type="text" name="n1" value={n1} placeholder='Num 1' onChange={(e) => {
                    setN1(e.target.value);
                }} />
                <input type="text" name="n2" value={n2} placeholder='Num 2' onChange={(e) => {
                    setN2(e.target.value);
                }} />
                <div id="button-container">
                    <Operation n1={n1} n2={n2} op={'+'} setResult={setResult} setMsg={setMsg} />
                    <Operation n1={n1} n2={n2} op={'-'} setResult={setResult} setMsg={setMsg} />
                    <Operation n1={n1} n2={n2} op={'*'} setResult={setResult} setMsg={setMsg} />
                    <Operation n1={n1} n2={n2} op={'/'} setResult={setResult} setMsg={setMsg} />
                </div>
            </div>
            {(msg == 'Success' || msg.startsWith('Error')) && <Output msg={msg} result={result} />}
        </div>
    )
}

export default Calculator