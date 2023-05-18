// Race Day Project
let raceNumber = Math.floor(Math.random() * 1000);
const registerdEarly = true;
const runnerAge = 20;
if (runnerAge > 18 && registerdEarly) {
    raceNumber += 10000;
}

if (runnerAge > 18 && registerdEarly) {
    console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !registerdEarly) {
    console.log(`you will race at 11:00 am and your race number is ${raceNumber}`)
} else if (runnerAge < 18 && !registerdEarly) {
    console.log(`you will race at 12:30 am and your race number is ${raceNumber}`)
} else if (runnerAge === 18) {
    console.log('Please see registration desk');
}
