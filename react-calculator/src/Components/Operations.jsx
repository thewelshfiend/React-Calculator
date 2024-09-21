import React from 'react'
import Plus from '../assets/plus.svg'
import Minus from '../assets/minus.svg'
import Cross from '../assets/asterisk.svg'
import Slash from '../assets/slash.svg'

const Operation = ({n1, n2, op, setResult, setMsg}) => {
    function btnHandler()
    {
        // Input Validation
        if(!n1 && !n2)
        {
            setMsg('ErrorBothEmpty');
            return;
        }
        else if(!n1)
        {
            setMsg('ErrorN1Empty');
            return;
        }
        else if(!n2)
        {
            setMsg('ErrorN2Empty');
            return;
        }
        else if(!(Number(n1) + Number(n2)))
        {
            setMsg('ErrorNotNumber');
            return;
        }
        else if(n2 == 0 && op == '/')
        {
            setMsg('Error0');
            return;
        }
        else
        {
            setMsg('Success');
        }

        // Operation Computation
        switch (op)
        {
            case '+':
                setResult(Number(n1) + Number(n2));
                break;
            case '-':
                setResult(Number(n1) - Number(n2));
                break;
            case '*':
                setResult(Number(n1) * Number(n2));
                break;
            case '/':
                setResult(Number(n1) / Number(n2));
        }
    }

    return (
        <button onClick={btnHandler}><img src={op == '+' ? Plus : op == '-' ? Minus : op == '*' ? Cross : Slash} /></button>
    )
}

export default Operation