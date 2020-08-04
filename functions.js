//  QUEST 1
function countDown(num) {
    var interval = setInterval(() => {
        num == 0 ? console.log("Done") : console.log(num);
        num--;

        if (num < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

countDown(3);

// QUEST 2 randomGame

function randomGame() {
    var count = 0;
    var timeInterval = setInterval(() => {
        count++;
        if (Math.random() > .75) {
            clearInterval(timeInterval);
            console.log(count);
        }


    }, 1000);
}

randomGame();

// QUEST3
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

isEven(5);

// QUEST 4
function isOdd(numm) {
    if (numm % 2 !== 0) {
        return true;
    } else {
        return false;
    }

}

isOdd(3);

// QUEST 5
function isPrime(numb) {
    for (var i = 2; i < numb; i++) {
        if (numb % i == 0 || numb <= 1) {
            return false;
        } else {
            return true;
        }

    }
}

isPrime(7);

//QUEST 6
function numberFact(numbr, cb) {

    return cb(numbr);
}

// QUEST 7
function find(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return arr[i];
        }
    }
}

//  QUEST 8
function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr.indexOf(arr[i]);
        }
    }

}


// QUEST 9
function specialMultiply(numb1, numb2) {
    if (arguments.length == 2) {
        return numb1 * numb2;
    }
    return function multiply(b) {
        return numb1 * numb2;
    }
}