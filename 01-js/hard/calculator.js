/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result

  constructor(){
    this.result = 0;
  }

  add(num){
    this.result += num;
  }

  subtract(num){
    this.result -= num;
  }

  multiply(num){
    this.result *= num;
  }

  divide(num){
    this.result /= num;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(str){
    // // replace spaces with blank
    // str = str.replace(/\s+/g, '');
    // // check for invalid characters
    // if(this.checkInvalidString(str)){
    //   throw new Error('Invalid input');
    // }
    // // a bracket stack to check for balanced brackets
    // // evaluating from c++ program



    // evaluating valid string
    let result = eval(str);
    return result;
    // return evaluate(str);
  }

  checkInvalidString(str){
    // if not number or operator or brackets, return true
    let regex = /[^0-9\+\-\*\/\(\)]/;
    return regex.test(str);
  }

  evaluate(expr){
    // should return a value int/float
    let result = 0;
    // HACK LMAO
    result = eval(expr);


    // use regex to return consecutive numbers
    
    // size = expr.length;
    // for(let i=0;i<size;i++){
    //   if(expr[i] == '('){
    //     // find the end of this bracket and use evaluate function on that subexpression.
    //     // then replace the subexpression with the result
    //     let j = i;
    //     let count = 0;
    //     while(j < size){
    //       if(expr[j] == '('){
    //         count++;
    //       }
    //       else if(expr[j] == ')'){
    //         count--;
    //         if(count == 0){
    //           break;
    //         }
    //       }
    //       j++;
    //     }
    //     // j is the index of the closing bracket
    //     let subexpr = expr.substring(i+1, j);
    //     let withbrackets = '(' + subexpr + ')';
    //     let result = evaluate(subexpr);
    //     expr = expr.replace(withbrackets, result);
    //   }
    //   // all the brackets are evaluated now
    //   // now we can evaluate the expression
      


      // let regex = /[0-9]+/g;
      // let numbers = expr.match(regex);
      // // convert the numbers to type number
      // for(let i=0;i<numbers.length;i++){
      //   numbers[i] = Number(numbers[i]);
      // }

      // let regex2 = /[\+\-\*\/]/g;
      // let operators = expr.match(regex2);

      // now we have two arrays, numbers and operators
      // we can evaluate the expression now
      
      // follow bodmas
      // first do multiplication and division
      // for(let i=0;i<operators.length;i++){
      //   if(operators[i] == '*'){
      //     result = numbers[i] * numbers[i+1];
      //   }
      //   else if(operators[i] == '/'){
      //     result = numbers[i] / numbers[i+1];
      //   }
      //   // replace the part of the expression with the result
      //   let subexpr = (numbers[i]) + operators[i] + (numbers[i+1]);
      //   expr = expr.replace(subexpr, result);
      // }
      
      // numbers = expr.match(regex);
      // // convert the numbers to type number
      // for(let i=0;i<numbers.length;i++){
      //   numbers[i] = Number(numbers[i]);
      // }

      // operators = expr.match(regex2);
      // // now do addition and subtraction
      // for(let i=0;i<operators.length;i++){
      //   if(operators[i] == '+'){
      //     result = numbers[i] + numbers[i+1];
      //   }
      //   else if(operators[i] == '-'){
      //     result = numbers[i] - numbers[i+1];
      //   }
      //   // replace the part of the expression with the result

      // }
      

    return result;
  }

}

const calci = new Calculator();
calci.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7.');

// module.exports = Calculator;
