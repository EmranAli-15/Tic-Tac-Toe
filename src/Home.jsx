import { useState } from 'react'
import { deviceLetter } from './condition';
import { Cross, Zero } from './UI/Icons';

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
        setDCount(prevCount => prevCount + 1);

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

            setTimeout(() => {
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
            }, 300)
        }
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

    const deviceFirst = () => {
        setDCount(prevCount => prevCount - 1);
        device();
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='button-38 p-7 rounded-lg'>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={one == 'X' || one == 'O' || hWin || dWin}
                            onClick={() => human(1)}
                            className='button-37'
                        >
                            {one == 'O' && <Zero></Zero>}
                            {one == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={two == 'X' || two == 'O' || hWin || dWin}
                            onClick={() => human(2)}
                            className='button-37'                        >
                            {two == 'O' && <Zero></Zero>}
                            {two == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={three == 'X' || three == 'O' || hWin || dWin}
                            onClick={() => human(3)}
                            className='button-37'                        >
                            {three == 'O' && <Zero></Zero>}
                            {three == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 my-2'>
                    <div>
                        <button
                            disabled={four == 'X' || four == 'O' || hWin || dWin}
                            onClick={() => human(4)}
                            className='button-37'                        >
                            {four == 'O' && <Zero></Zero>}
                            {four == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={five == 'X' || five == 'O' || hWin || dWin}
                            onClick={() => human(5)}
                            className='button-37'                        >
                            {five == 'O' && <Zero></Zero>}
                            {five == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={six == 'X' || six == 'O' || hWin || dWin}
                            onClick={() => human(6)}
                            className='button-37'                        >
                            {six == 'O' && <Zero></Zero>}
                            {six == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div>
                        <button
                            disabled={seven == 'X' || seven == 'O' || hWin || dWin}
                            onClick={() => human(7)}
                            className='button-37'                        >
                            {seven == 'O' && <Zero></Zero>}
                            {seven == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={eight == 'X' || eight == 'O' || hWin || dWin}
                            onClick={() => human(8)}
                            className='button-37'                        >
                            {eight == 'O' && <Zero></Zero>}
                            {eight == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={nine == 'X' || nine == 'O' || hWin || dWin}
                            onClick={() => human(9)}
                            className='button-37'                        >
                            {nine == 'O' && <Zero></Zero>}
                            {nine == 'X' && <Cross></Cross>}
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex items-center flex-col mt-5'>
                <div>
                    {hWin == true ? <p className='bg-green-500 p-3 rounded-md font-extrabold text-white'>You Win</p> : ''}
                </div>
                <div>
                    {dWin == true ? <p className='bg-red-500 p-3 rounded-md font-extrabold text-white'>BOT Win</p> : ''}
                </div>
                <div className='mt-5 flex gap-x-2'>
                    <button
                        className={`${dFirst == false ? "hidden" : "block"} btn border-none bg-[#fc5897] text-white font-bold`}
                        onClick={deviceFirst}>
                        BOT First
                    </button>
                    <button
                        className={`${dFirst == false ? "block" : "hidden"} btn border-none bg-[#FE7743] text-white font-bold`}
                        onClick={() => location.reload()}>
                        Refresh
                    </button>
                </div>

            </div>
        </div>
    )
}
