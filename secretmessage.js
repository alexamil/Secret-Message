let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


secretMessage.pop();//Use an array method to remove the last string of the array secretMessage.

console.log(secretMessage);

secretMessage.push("to", "Program");//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.

console.log(secretMessage);

secretMessage[7]="right";//Change the word easily to the word right by accessing the index and replacing it.

console.log(secretMessage);

secretMessage.shift();//Use an array method to remove the first string of the array.

console.log(secretMessage);

secretMessage.unshift("Programming");//Use an array method to add the string Programming to the beginning of the array.

console.log(secretMessage);

secretMessage.splice(6, 5, "know");//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,//.array.splice(indexToStart, numberOfIndices, 'stringToAdd');

console.log(secretMessage);

console.log(secretMessage.join());//Programming,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program