interface CalculateValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): CalculateValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateBmi = (a: number, b: number) => {
  
  const c = b / ((a/100) * (a/100));
  if (c < 17) return 'Alipaino'
  if (c > 18.5) return 'Ylipaino'
  return 'Normaali paino'
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2);
  console.log('calculate:',calculateBmi(value1, value2))
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
export {calculateBmi}