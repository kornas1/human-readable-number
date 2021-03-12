module.exports = function toReadable (number) {
let result = '';
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) result = arr1[number];
    if (number > 19 && number < 100){
        result = arr2[Math.floor(number / 10) - 2];
        if (number % 10 != 0) result = result + ' ' + arr1[number % 10];
    }
    if (number >= 100 && number < 1000){
       result = arr1[Math.floor(number / 100)];
       if(number % 100 === 0 )
        result = result + ' hundred';
        if (number % 100 != 0){
            if (number % 100 < 20)
                result = result + ' hundred ' + arr1[number % 100];
            else if ( number % 10 != 0 && number % 100 >= 20)
                result = result + ' hundred ' + arr2[Math.floor((number % 100)/10) - 2] + ' ' + arr1[number % 10];
            else result = result + ' hundred ' + arr2[Math.floor((number % 100)/10) - 2];
        }
    }
    return  result;

}
