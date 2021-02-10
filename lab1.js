const questionOne = function questionOne(arr) {
    let object = {};
    if (arr === undefined){
        console.log(object);
    } else{ 
        for (var i = 0; i < arr.length; i++){
            var num = arr[i];
            if (num === 1){
                object[num] = "false";
            } else {
                for (let j = 2; j <= parseInt(Math.sqrt(num)); j++){
                    if (num % j === 0){
                        var prime = false;
                    }
                    prime = true;
                }
                if (prime){
                    object[num] = "true";
                } else {
                    object[num] = "false";
                }
            }
        }
        return object;
    }
}

const questionTwo = function questionTwo(arr) { 
    if (arr === undefined || arr.length === 0) 
    	return 0;
    
    let sum = 0;
    for(var i = 0; i < arr.length; i++)
    sum += Math.pow(arr[i], 2);

    var num =  Math.sqrt(Math.pow(sum, 5));
    num = num.toFixed(2);

    return num;
}

const questionThree = function questionThree(text) {
    let object = {consonants: 0, vowels: 0, numbers: 0, spaces: 0, punctuation: 0, specialCharacters: 0};
    if (text !== undefined || text.length !== 0){
        for (var i = 0; i < text.length; i++){
            if (text.charCodeAt(i) == 32){
                object.spaces += 1;
            }
            if ((text.charCodeAt(i) >= 35 && text.charCodeAt(i) <= 38) || text.charCodeAt(i) == 42 || text.charCodeAt(i) == 43 || text.charCodeAt(i) == 60 || text.charCodeAt(i) == 61 || text.charCodeAt(i) == 62 || text.charCodeAt(i) == 64 || text.charCodeAt(i) == 92 || text.charCodeAt(i) == 94 || text.charCodeAt(i) == 95 || text.charCodeAt(i) == 126 || text.charCodeAt(i) == 173 || text.charCodeAt(i) == 174 || text.charCodeAt(i) == 175){
                object.specialCharacters += 1;
            }
            if (text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57){
                object.numbers += 1;
            }
            if (text.charCodeAt(i) == 33 || text.charCodeAt(i) == 34 || (text.charCodeAt(i) >= 39 && text.charCodeAt(i) <= 41) || text.charCodeAt(i) == 44 || text.charCodeAt(i) == 45 || text.charCodeAt(i) == 46 || text.charCodeAt(i) == 47 || text.charCodeAt(i) == 58 || text.charCodeAt(i) == 59 || text.charCodeAt(i) == 63 || text.charCodeAt(i) == 91 || text.charCodeAt(i) == 93  || text.charCodeAt(i) == 96){
                object.punctuation += 1;
            }
            if ((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) || (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)){
                if (text.charCodeAt(i) == 65 || text.charCodeAt(i) == 69 || text.charCodeAt(i) == 73 || text.charCodeAt(i) == 79 || text.charCodeAt(i) == 85 || text.charCodeAt(i) == 97 || text.charCodeAt(i) == 101 || text.charCodeAt(i) == 105 || text.charCodeAt(i) == 111 || text.charCodeAt(i) == 117){
                    object.vowels += 1;
                } else {
                    object.consonants += 1;
                }
            }
        }
    }
    return object;
}

const questionFour = function questionFour(num1, num2,num3) {
    if (num2 == 0){
        return (num1/(num3*12)).toFixed(2);
    } else {
        return ((num1 * ((num2 * .01)/ 12)) / (1 - Math.pow(1 + (num2*.01)/12, -(num3*12)))).toFixed(2);
    }
}

module.exports = {
    firstName: "Yueyang", 
    lastName: "Tao", 
    studentId: "10458455",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};