// Exercise 1

let word = 'detective'
let charList = 'ec'

let overallPermCounts = charList + charList - 1 // (n+n-1)
let textArray = textString.split
let outputArray = []

function permutationGenerator(charList, textString)
// Accepts charList and textString for exracting the char from the string for permutation generation
// Outputs permutation result array
	for (let i=0; i <= overallPermCounts; i++) { 						// iteration 2: iterate necessary times over the word to gen permspermCounts
		let permCounts = 0
		let permArray = []
		for(currentWordChar = 0; currentWordChar <= textString.length; currentWordChar++) { // iteration 1: iterate through the input string each time
			if(charList[i]==textString[currentWord]) { 				// if there is a match
				permCounts += permCounts; 					// independent variable permutations 
				permArray.push(currentWordChar)
			}
		}
		for (let currentPerm=0; i <= permCounts; i++) { 				// repeat permutation logic for each incedent of the indenependent varible found
			if((charList[i]==textString[currentWord]) { 				// if there is a match
				permCounts += permCounts;					// 
			}
		}
	}
	for (let i=0; i <= overallPermCounts; i++) { 						// iteratation 3

	}
}

//Breadware Exercise 2

let arrayOne =[1,12,23,34,45,56,67,78,89,90];
let arrayTwo =[11,22,33,44,55,66,77,88,99,100];

 function avgArr(arr1,arr2) {
    let allNums = [].concat(arr1,arr2);
    let sum = allNums.reduce((a,b) => a+b, 0);
    let average = sum/(allNums.length);
    console.log(average)
}

avgArr(arrayOne,arrayTwo)