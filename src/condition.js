let person = 0;
let personIndex;
let device = 0;
let deviceIndex;

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

// for first step
let firstStep = 0;
let firstStepIndex = 0;

// for second step
let personLast;
let deviceLast;
const deviceDission = (person, personIndex, device, deviceIndex, arr) => {
    console.log(person, device);

    if (person < 2 && device < 2) {
        console.log(arr);

        for (let i = 0; i <= 7; i++) {
            firstStep = 0;
            firstStepIndex = 0;
            for (let j = 0; j <= 2; j++) {
                if (arr[i][j] != 'X' && arr[i][j] != 'O') {
                    firstStep++;
                }
            }
            if (firstStep == 3) {
                firstStepIndex = arr[i][0];
                break;
            }
        }

        return firstStepIndex;
    }

    else if (person >= 2 || device >= 2) {
        if (device >= 2) {
            console.log('final', deviceIndex);
            for (let i = 0; i <= 2; i++) {
                console.log(arr[deviceIndex][i])
                if (arr[deviceIndex][i] != 'X' && arr[deviceIndex][i] != 'O') {

                    return arr[deviceIndex][i];

                }
            }
        }
        if (person >= 2) {
            for (let i = 0; i <= 2; i++) {
                if (arr[personIndex][i] != 'X' && arr[personIndex][i] != 'O') {
                    // console.log(arr[personIndex][i])
                    return arr[personIndex][i];
                }
            }
        }
    }


}

export const deviceLetter = (arr) => {
    // console.log(arr);

    for (let i = 0; i <= 7; i++) {
        let tempP = 0;
        let tempD = 0;

        for (let j = 0; j <= 2; j++) {
            if (arr[i][j] == 'X') {
                console.log(i, arr[i][j])
                tempP++;
                console.log(tempP)
            }
            else if (arr[i][j] == 'O') {
                tempP = 0;
                tempD++;
            }
            else {
                tempP = tempP;
            }
        }
        if (tempP > person) {
            person = tempP;
            personIndex = i;
        };
        if (tempD > device) {
            device = tempD;
            deviceIndex = i;
        }
    }

    const step = deviceDission(person, personIndex, device, deviceIndex, arr);
    return step;
};

