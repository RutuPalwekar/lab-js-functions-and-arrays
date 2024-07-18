// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if( a > b){
        return a;
    }
    else if ( a < b) {
        return b;
    }
    else{
        return  a = b;
    }
}
const result = maxOfTwoNumbers(2 ,3);
 console.log(result)



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
 
    if (words.length === 0) {
    return null;
}

    let longestWord = words[0];

    words.forEach(function(word) {
        if (word.length > longestWord.length) {
        longestWord = word;
    }
});

    return longestWord;
}

 const longestWord = findLongestWord(words);
 console.log("Longest word in the array is ", longestWord  )




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            sum += numbers[i];
        } 
        else {
            return null; 
        }
    }
    return sum;
}

const sum = sumNumbers(numbers);
console.log("Sum of numbers in the array:", sum); 
 


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    if (numbers2.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        if (typeof numbers2[i] === 'number') {
            sum += numbers2[i];
        } 
        else {
            return null; 
        }
    }
    return sum/ numbers2.length;
}

const avg = averageNumbers(numbers2);
console.log("Averageof numbers in the array:", avg); 

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2) {
    if (words2.length === 0) {
        return null;
    }
    
    for( let i = 0; i < words2.length; i++){
        if (words2[i] == "matter"){
            return true;
        }
     }
            return false;
        }
    

 const wordExist = doesWordExist(words2);
 console.log("Does the word exist in tha array ", wordExist  )
