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
                var prime = true;
                for (let j = 2; j <= (Math.sqrt(num)); j++){
                    if (num % j === 0){
                        prime = false;
                        break;
                    }
                }
                if (prime){
                    object[num] = "false";
                } else {
                    object[num] = "true";
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

    let consonants = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ";
    let vowels = "aeiouAEIOU";
    let numbers = "0123456789";
    let punctuation = ".,?!\"'-:;()[].../";
    let specialCharacters = "#$%&*+-<=>@^_`{|}~\\";

    if (text !== undefined || text.length !== 0){
        for (var i = 0; i < text.length; i++){
            for (let j = 0; j <= 41; j++){
                if(text[i] == object.consonants[j])
                object.consonants += 1
            }
            for (let j = 0; j <= 9; j++){
                if(text[i] == object.vowels[j])
                object.vowels += 1
            }
            for (let j = 0; j <= 9; j++){
                if(text[i] == object.numbers[j])
                object.numbers += 1
            }
            if (text[i] === " "){
                object.spaces += 1;
            }
            for (let j = 0; j <= 17; j++){
                if(text[i] == object.punctuation[j])
                object.punctuation += 1
            }
            for (let j = 0; j <= 19; j++){
                if(text[i] == object.punctuation[j])
                object.punctuation += 1
                }
            }
        }
    }
    return object;

const questionFour = function questionFour(num1, num2,num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 === undefined || num2 === undefined || num3 === undefined)
    console.log(" ")
    let mIN = num2 / 100 / 12;
    let rate = Math.pow((1+mRp), num3 * 12)
	if (num2 === 0) {
        return mRp = (num1/(num3 * 12)).toFixed(2);
	} else {
		return mRp = (num1 * mIN * rate)/(rate - 1);
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
