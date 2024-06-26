import React from 'react'
import style from './index.module.scss'

function Ranberator() {

    const inp = React.useRef()

    const [generated, setGenerated] = React.useState([])
    const [count, setCount] = React.useState(0)

    function handleGenerate(interval) {
        if (!interval) {
            setCount('Enter an Interval')
            return
        }

        if (generated.length >= interval) {
            setCount("No More Move")
            return
        }

        let count = Math.floor(Math.random() * interval + 1)
        if (!generated.includes(count)) {
            setCount(count)
            setGenerated([...generated, count])
            return
        }
        handleGenerate(interval)
    }

    function Reset() {
        setGenerated([])
        setCount(0)
        inp.current.value = ''
    }

    return (
        <>
            <h1>Random Number Generator</h1>
            <h2>{count}</h2>
            <h3 style={{ wordBreak: 'break-all' }}>Generated Numbers: [ {`${generated}`} ]</h3>
            <input type="number" min={1} style={{ minWidth: '50px', maxWidth: 'fit-content', height: '50px', fontSize: '25px' }} ref={inp} /> <br />
            <button onClick={() => handleGenerate(inp.current.value)}>Generate</button>
            <button onClick={() => Reset()}>Reset</button>
        </>
    )
}

export default Ranberator
