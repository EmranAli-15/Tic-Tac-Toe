import React, { useState } from 'react'
import { deviceLetter } from './condition';

export default function Home() {
    const [dFirst, setDFirst] = useState(true);
    const [hWin, setHWin] = useState(false);
    const [dWin, setDWin] = useState(false);

    const [dCount, setDCount] = useState(0);

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
        setDCount(dCount + 1);

        if (hWin || dWin || dCount >= 4) {
            return;
        }
        else {
            const letter = deviceLetter(arr);
            setDFirst(false);

            for (let i = 0; i <= 7; i++) {
                for (let j = 0; j <= 2; j++) {
                    if (arr[i][j] == letter) {
                        arr[i][j] = 'O';
                    }
                    setArr(arr);
                }
            }

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
                let count = 0;
                for (let j = 0; j <= 2; j++) {
                    if (arr[i][j] == 'O') {
                        count++
                    }
                }
                if (count == 3) {
                    return setDWin(true);
                }
            }
        }
    }

    const deviceFirst = () => {
        setDCount(dCount - 1);
        device();
    }

    const human = (a) => {
        setDFirst(false);

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 2; j++) {
                if (arr[i][j] == a) {
                    arr[i][j] = 'X';
                }
                setArr(arr);
            }
        }

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
            let count = 0;
            for (let j = 0; j <= 2; j++) {
                if (arr[i][j] == 'X') {
                    count++
                }
            }
            if (count == 3) {
                return setHWin(true);
            }
        }

        if (!dWin) {
            device();
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={one == 'X' || one == 'O' || hWin || dWin} onClick={() => human(1)}
                            className={`${one == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}
                        >{one}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={two == 'X' || two == 'O' || hWin || dWin} onClick={() => human(2)}
                            className={`${two == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}
                        >{two}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={three == 'X' || three == 'O' || hWin || dWin} onClick={() => human(3)}
                            className={`${three == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>{
                                three}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 my-2'>
                    <div>
                        <button
                            disabled={four == 'X' || four == 'O' || hWin || dWin} onClick={() => human(4)}
                            className={`${four == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>
                            {four}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={five == 'X' || five == 'O' || hWin || dWin} onClick={() => human(5)}
                            className={`${five == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>
                            {five}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={six == 'X' || six == 'O' || hWin || dWin} onClick={() => human(6)}
                            className={`${six == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}
                        >{six}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={seven == 'X' || seven == 'O' || hWin || dWin} onClick={() => human(7)}
                            className={`${seven == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>{
                                seven}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={eight == 'X' || eight == 'O' || hWin || dWin} onClick={() => human(8)}
                            className={`${eight == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>{
                                eight}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={nine == 'X' || nine == 'O' || hWin || dWin} onClick={() => human(9)}
                            className={`${nine == 'X' ? 'bg-green-600' : 'bg-gray-600'} myBtn text-white`}>
                            {nine}
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex items-center flex-col mt-5'>
                <div>
                    {hWin == true ? <p className='bg-green-500 p-3 rounded-md font-extrabold text-white'>You Win</p> : ''}
                </div>
                <div>
                    {dWin == true ? <p className='bg-red-500 p-3 rounded-md font-extrabold text-white'>Device Win</p> : ''}
                </div>
                <div className='mt-5 flex gap-x-2'>
                    <button disabled={dFirst == false} className='btn btn-accent' onClick={deviceFirst}>Device first</button>
                    <button className='btn btn-error' onClick={() => location.reload()}>Refresh</button>
                </div>

            </div>
        </div>
    )
}
