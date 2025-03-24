// 编写一个函数 [1,2,3,4，5,6,7,8,9,0]

//return "(123) 345-355535" 电话号码

function getPhoneNumber(numbers){
    // for(let i = 0; i < numbers.length; i++){
    //     console.log(numbers[i])
    // }
    // return "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
    // es6 模板字符串 提升代码的可读性
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`    


}

console.log(getPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

