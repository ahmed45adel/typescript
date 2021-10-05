/*  1. Create a function “reverse” that takes a string and return it in a reversed
order and make sure to use the right types. */
let example = 'ahmed';
const myReverse = (myString: string): string => {
    /* get last char put it in arr then decrease index */
    let myStringReversed = [];
    for (let i = myString.length - 1; i >= 0; i--) {
        myStringReversed.push(myString[i]);
    }
    console.log(myString, myStringReversed.join(""));
    return myStringReversed.join("");
}
myReverse(example);


/*  2. Create a function “currencyGenerator” that takes an array of number and
string respectively and return amount in the specified currency
EX : // 100, $ = $100. */
let numbers: number[] = [100, 200, 300];
let dollarSign: string = '$';
const currencyGenerator = (arr: number[], sign: string) => {
    for (let i = 0; i < numbers.length; i++) {
        let currency = `${numbers[i]}${sign}`
        console.log(currency)
    }
}
currencyGenerator(numbers, dollarSign);



/* 3. Create a function “wordsCounter” that takes a sentence and word and
return how many times that word appeared in this sentence.
EX : // wordsCounter ( “Type script superset of java script” , “script” ) ;
o/p : ‘ script‘ is repeated 2 times */

let mySentence: string = 'my name is ahmed ahmed';
let myWord: string = 'ahmed';
const wordsCounter = (sentence: string, word: string): number => {
    let mySentenceArr = mySentence.split(" ");
    let counter: number = 0;
    for (let item of mySentenceArr) {
        item === word && counter++
    }
    console.log(word, counter)
    return counter;
}
wordsCounter(mySentence, myWord);

/* 4-
● Create an interface `CartItem` and replace the param's type with it
● Make variantId optional
function addToCart(item: {id: number, title: string, variantId: number}) {
console.log('output is :', `Adding "${item.title}" to cart.`);
}
 addToCart({id: 1, title: 'Concrete shoes'}); */


interface CartItem {
    id: number;
    title: string;
    variantId?: number;
}
function addToCart(item: CartItem) {
    console.log("output is :", `Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: "Concrete shoes" });
