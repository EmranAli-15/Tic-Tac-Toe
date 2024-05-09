
let deviceWin = false;
let deviceIndex = 0;

let humanWin = false;
let humanIndex = 0;



const deviceDecision = (getArr) => {
    if (deviceWin == true) {
        deviceWin = false;
        for (let i = 0; i <= 2; i++) {
            if (getArr[deviceIndex][i] != 'O') {
                return getArr[deviceIndex][i];
            }
        }
    }
    else if (humanWin == true) {
        humanWin = false;
        for (let i = 0; i <= 2; i++) {
            if (getArr[humanIndex][i] != 'X') {
                return getArr[humanIndex][i];
            }
        }
    }
    else {
        const freeNum = [];
        humanWin = false;
        deviceWin = false;
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                // if (getArr[i][j] !== 'X' && getArr[i][j] !== 'O') {
                //     return getArr[i][j];
                // }
                if (typeof (getArr[i][j]) === "number") {
                    freeNum.push(getArr[i][j]);
                }
            }
        }
        const d = Math.floor(Math.random() * (freeNum.length));
        return freeNum[d];
    }

}

export const deviceLetter = (arr) => {

    for (let i = 0; i <= 7; i++) {
        let xCount = 0;
        for (let j = 0; j <= 2; j++) {
            if (arr[i][j] == 'X') {
                xCount++;
            } else if (arr[i][j] == 'O') {
                xCount--;
            }
        }
        if (xCount == 2) {
            humanIndex = i;
            humanWin = true;
        }
    }

    for (let i = 0; i <= 7; i++) {
        let xDount = 0;
        for (let j = 0; j <= 2; j++) {
            if (arr[i][j] == 'O') {
                xDount++;
            } else if (arr[i][j] == 'X') {
                xDount--;
            }
        }
        if (xDount == 2) {
            deviceIndex = i;
            deviceWin = true;
        }
    }

    const decided = deviceDecision(arr);

    return decided;
};

