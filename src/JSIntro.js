
exports.Sum = function (num1, num2) {
    return num1 + num2;
}

exports.SumOfArray = function (arrayOfNums) {
    var sum=0;
    for (var i = 0; i < arrayOfNums.length; i++)
        sum += arrayOfNums[i];
    return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
    var s = 0,f=0;
    for(var i=0;i<arrayOfNums.length;i++)
    {
        f=0;
        for(var j=i-1;j>=0;j--)
        {
            if (arrayOfNums[i] == arrayOfNums[j])
                f = 1;
        }
        if (f == 0)
            s += arrayOfNums[i];
    }
    return s;
}


exports.ReverseString = function(str){
    var rstr="";
    for (var i = str.length-1; i >=0; i--)
        rstr += str[i]; //rstr.concat(str.charAt(i));
    return rstr;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

    var rstr=[]//arrayOfStrings.length];
    for (var j = 0; j < arrayOfStrings.length; j++)
    {
        rstr[j] = "";
        for (var i = arrayOfStrings[j].length-1; i >= 0; i--)
            rstr[j] +=arrayOfStrings[j][i];// rstr[j].concat(arrayOfStrings[j].charAt(i));
    }
    return rstr;
}