
// install : nodejs + vs code + postman (optional at this point)


// how to run javascript
    // 1 : online compiler (provided by w3school);
    // 2: directly in the browser's console
    // 3: in the terminal (command prompt)
        // commands :
            // just copy paste the initial code and paste in chatGPT prompt

    // 4: in vs code terminal




// basics of javascript

// variables
// array
// loops
// object





// get user input
// as we can use prompt() method in browser because its not a part of javascript but browser (run time environment), its not a part of node js run-time envirnment, so we cannot directly use it in node js
// for using prompt() in node js we need prompt-sync library (url : https://www.npmjs.com/package/prompt-sync)

// run this command to install this package : (npm i prompt-sync) 


var prompt = require('prompt-sync')();

// get input from the user.
var n = prompt('How many more times? '); // now you can access prompt in node.js


