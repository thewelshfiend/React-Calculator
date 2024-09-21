import React, { useEffect, useState } from 'react'

const Output = ({ msg, result }) => {
    const [desc, setDesc] = useState();

    useEffect(() => {
        function display()
        {
            if (msg == 'Success') 
            {
                setDesc(`Result: ${result}`);
            }
            else 
            {
                if (msg == 'ErrorBothEmpty') 
                {
                    setDesc(`Num 1 & Num2  can't be empty`);
                }
                else if (msg == 'ErrorN1Empty') 
                {
                    setDesc(`Num 1 can't be empty`);
                }
                else if (msg == 'ErrorN2Empty') 
                {
                    setDesc(`Num 2 can't be empty`);
                }
                else if (msg == 'ErrorNotNumber') 
                {
                    setDesc(`Only numbers are allowed`);
                }
                else 
                {
                    setDesc(`Division by 0 is not allowed`);
                }
            }
        }
        display();
    }, [msg, result])

    return (
        <div id="output">
            <h2 id={msg == 'Success' ? 'success' : 'error'}>{msg == 'Success' ? 'Success!' : 'Error!'}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Output