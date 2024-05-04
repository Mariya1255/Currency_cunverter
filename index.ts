#! /usr/bin/env node

import inquirer from 'inquirer'

const currency: any = {
    USD: 1,     // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_Answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter from currency",
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'to',
            message: "Enter from currency",
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'amount',
            message: "Enter your Amount",
            type: 'number'
        }
    ]
)
 
let fromAmount = currency[user_Answer.from]     // exchange rate
let toAmount = currency[user_Answer.to]         // exchange rate
let amount =  user_Answer.amount
let baseAmount = amount / fromAmount      // USD base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

console.log('THE END');

