import React, { useState } from 'react'
import { deviceLetter } from './condition';

export default function Home() {

    const resultArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    const [arr, setArr] = useState(resultArr);

    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [five, setFive] = useState('');
    const [six, setSix] = useState('');
    const [seven, setSeven] = useState('');
    const [eight, setEight] = useState('');
    const [nine, setNine] = useState('');

    const device = () => {
        const letter = deviceLetter(arr);
        // console.log(letter, typeof(letter));

        if (letter == 1) setOne('O')
        else if (letter == 2) setTwo('O')
        else if (letter == 3) setThree('O')
        else if (letter == 4) setFour('O')
        else if (letter == 5) setFive('O')
        else if (letter == 6) setSix('O')
        else if (letter == 7) setSeven('O')
        else if (letter == 8) setEight('O')
        else setNine('O');

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 2; j++) {
                if (arr[i][j] == letter) {
                    arr[i][j] = 'O';
                    setArr(arr)
                }
            }
        }
        console.log(arr);
    }

    const human = (a) => {
        if (a == 1) setOne('X')
        else if (a == 2) setTwo('X')
        else if (a == 3) setThree('X')
        else if (a == 4) setFour('X')
        else if (a == 5) setFive('X')
        else if (a == 6) setSix('X')
        else if (a == 7) setSeven('X')
        else if (a == 8) setEight('X')
        else setNine('X');

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 2; j++) {
                if (arr[i][j] == a) {
                    arr[i][j] = 'X';
                    setArr(arr)
                }
            }
        }

        device()
    }

    return (
        <div>
            <div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={one == 'X' || one == 'O'} onClick={() => human(1)}
                            className={`${one == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}
                        >{one}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={two == 'X' || two == 'O'} onClick={() => human(2)}
                            className={`${two == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}
                        >{two}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={three == 'X' || three == 'O'} onClick={() => human(3)}
                            className={`${three == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>{
                                three}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 my-2'>
                    <div>
                        <button
                            disabled={four == 'X' || four == 'O'} onClick={() => human(4)}
                            className={`${four == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>
                            {four}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={five == 'X' || five == 'O'} onClick={() => human(5)}
                            className={`${five == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>
                            {five}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={six == 'X' || six == 'O'} onClick={() => human(6)}
                            className={`${six == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}
                        >{six}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={seven == 'X' || seven == 'O'} onClick={() => human(7)}
                            className={`${seven == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>{
                                seven}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={eight == 'X' || eight == 'O'} onClick={() => human(8)}
                            className={`${eight == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>{
                                eight}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={nine == 'X' || nine == 'O'} onClick={() => human(9)}
                            className={`${nine == 'X' ? 'bg-red-600' : 'bg-green-400'} myBtn`}>
                            {nine}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={device}>device first</button>
            </div>
        </div>
    )
}
