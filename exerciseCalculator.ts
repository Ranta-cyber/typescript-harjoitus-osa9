interface ArgValues {
  doneTrain: number[];
  rate: number
}

interface Training {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const parseTrainingArguments = (args: Array<string>): ArgValues => {

  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 10) throw new Error('Too many arguments');

  const daysNro = args[3].split(' ').map(Number);

  return {
    doneTrain: daysNro,
    rate: Number(args[2])
  }
}

const exerciseCalculator = (args: number[], target: number): Training => {

  const goodTraing = 'Good training';
  const normalTraining = 'Normal training';
  const badTraining = 'No good training';

  const tunnit = args.reduce((sum, tunnit) => sum + tunnit, 0)

  const average = tunnit / args.length;

  let success = '';
  if (average < target) success = badTraining;
  if (average === target) success = normalTraining;
  if (average > target) success = goodTraing;


  return {
    periodLength: args.length,
    trainingDays: args.filter(p => p !== 0).length,
    success: average >= target ? true : false,
    rating: average,
    ratingDescription: success,
    target: target,
    average: average
  };
};

try {
  const { doneTrain, rate } = parseTrainingArguments(process.argv);
  exerciseCalculator(doneTrain, rate);

} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}