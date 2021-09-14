// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// grab the command-line arguements
// Edge case: We need at least 2 arguments => output an error message => condition

const getArguements = function () {
  const args = process.argv.slice(2);
  // console.log('args:', args);
  if (args.length < 2) {
    console.log('Please enter at least 2 arguments');
    process.exit(); // or return
  }
  return args;
};

// make a loop
// for (let i = 0; i < args.length; i++) {
//   console.log("arg:", args[i]);
// }

const convertToNums = function (numbers) {
  const output = [];

  for (let nb of numbers) {
    output.push(Number(nb));
  }

  return output;
};
// Edge case: If any argument is not a number, output an error message => condition
const allNums = function (numbers) {
  for (let nb of numbers) {
    if (isNaN(nb)) {
      console.log('Please enter only numbers');
      process.exit();
    }
  }
  return numbers;
};

const allInt = function (numbers) {
  // Edge case: If any argument is not a whole number, skip it. => condition
  const output = [];
  for (let nb of numbers) {
    if (Number.isInteger(nb)) {
      output.push(nb);
    }
  }
  return output;
};

// sum gets an array of numbers and return the total
const sum = function (numbers) {
  // accumulator
  let total = 0;

  for (let nb of numbers) {
    // add the numbers up

    // total = total + nb;
    total += nb;

    // console.log('num:', num, 'total:', total);
  }

  return total;
};

const args = getArguements();
const result = sum(allInt(allNums(convertToNums(args))));
// print the total
console.log('Total', result);
