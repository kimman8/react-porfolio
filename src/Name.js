import React, { useState, useEffect, useRef } from "react";

function Name() {
	const [name, setName] = useState("");
    // const [rendercount, setRendercount] = useState(0)
    // const rendercount = useRef(1)
    useEffect(()=>{
        // setRendercount(rendercount+1)
        // rendercount.current = rendercount.current + 1;
        prevName.current = name
    },[name])
    // const inputRef = useRef()
    // const focus = () => {
    //     inputRef.current.focus()
    //     inputRef.current.value = 'some value'
    // }
    const prevName = useRef('')
	return (
		<div>
			<input  value={name} onChange={(e) => setName(e.target.value)} />
            <h1>hi my name is {name} and it used to be {prevName.current}</h1>
            {/* <button onClick={focus}>Focus</button> */}
            {/* <p>rendered {rendercount.current} times</p> */}
            {/* <p>rendered {rendercount} times</p> */}
		</div>
	);
}

export default Name;
