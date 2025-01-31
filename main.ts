#! usr/bin/env node

import inquirer from "inquirer"

const currency:any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280

};

let user_answer = await inquirer.prompt(
   [ 
    { 
    name: "from",
    type: "list",
    message: "Enter from currency",
    choices: ["USD","EUR","GBP","INR","PKR"]
    },
    { 
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD","EUR","GBP","INR","PKR"]
        },
        { 
            name: "amount",
            type: "number",
            message: "Enter your amount",
            },
]
);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount  / fromAmount
let convertAmount = baseAmount * toAmount

console.log(convertAmount);