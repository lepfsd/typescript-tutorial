//types

var myString: string = "hello world";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = false;
var myVar: any = "hello";
myVar = false;

//arrays

var stringArray: string[] = ["item1", "item2", "item3"];
var numberArray: number[] = [1, 2, 3, 4];
var anyArray: any[] = ["item", 2, false, {}];


//tuple
var strNumberTuple: [string, number];
strNumberTuple = ["hello", 1];

//void, undefined, null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;


document.write(typeof(myVoid));