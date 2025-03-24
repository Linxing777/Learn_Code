function greet(name){
    return `hello 232323${name}!`;
}
console.log(greet('pys'));
greet.home = 'china';
greet.say = function(name){
    return `heleeelo ${name}!`;
}
console.log(greet.say('pys'));
function fun(greetingFunction, name){
    return greetingFunction(name);
}
console.log(fun(greet, 'pys'));