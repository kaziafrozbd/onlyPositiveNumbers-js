const allNumbers = [21, 43, 543, 555, 32, 432, 454, -34, 45, 34];
function onlyPositive(numbers){
    let positives = [];
    for(let number of numbers){
        if(number >= 0){
            // console.log(number);
            // console.log(positives);
            positives.push(number);
            // positives.push(number);
        }
        else{
            break;
        }
    }
    return positives;
}
const positiveOnly = onlyPositive(allNumbers);
console.log(positiveOnly);