import React from 'react'
import style from './index.module.scss'

function Ranpointator() {

    const inp1 = React.useRef()
    const inp2 = React.useRef()

    const [generated, setGenerated] = React.useState([])
    const [point, setPoint] = React.useState('')

    function searchArrayInMatrix(matrix, target) {
        for (let array of matrix) {
            if (arraysEqual(array, target)) {
                return true;
            }
        }
        return false;
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    function handleGenerate(intervalX, intervalY) {

        // if (searchArrayInMatrix(mtx, arr)) {
        //     setPoint('True')
        //     return
        // }
        // setPoint('False')

        if (!intervalX || !intervalY) {
            setPoint('Enter Both Intervals')
            return
        }

        if (generated.length >= intervalX * intervalY) {
            setPoint("No More Move")
            return
        }

        let x = Math.floor(Math.random() * intervalX + 1)
        let y = Math.floor(Math.random() * intervalY + 1)

        if (!searchArrayInMatrix(generated, [x, y])) {
            setPoint([x, y])
            setGenerated([...generated, [x, y]])
            return
        }
        handleGenerate(intervalX, intervalY)
    }

    function Reset() {
        setGenerated([])
        setPoint('')
        inp1.current.value = ''
        inp2.current.value = ''
    }

    return (
        <>
            <h1>Random Point Generator</h1>
            <h2>{typeof point === 'string' ? point : `(${point[0]}, ${point[1]})`}</h2>
            <h3 style={{ wordBreak: 'break-all' }}>Generated Points: [ {generated.map(x => (
                <>
                    ({x[0]}, {x[1]})
                </>
            ))} ]</h3>
            <input type="number"
                placeholder='X'
                min={1}
                style={{ paddingLeft: '5px', maxWidth: '120px', height: '50px', fontSize: '25px' }}
                ref={inp1} />
            <input type="number"
                placeholder='Y'
                min={1}
                style={{ paddingLeft: '5px', maxWidth: '120px', height: '50px', fontSize: '25px' }}
                ref={inp2} />
            <br />
            <button onClick={() => handleGenerate(inp1.current.value, inp2.current.value)}>Generate</button>
            <button onClick={() => Reset()}>Reset</button>
        </>
    )
}

export default Ranpointator
