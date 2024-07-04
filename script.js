let num = 266219;
let multiplyResult;

num = num.toString().split("");
multiplyResult = num[0];

for (let i = 1; i < num.length; i++) {
  multiplyResult *= num[i];
}
console.log(multiplyResult);
//Полученный результат возвести в степень 3, используя только 1 оператор 
multiplyResult = multiplyResult ** 3;
console.log(multiplyResult);
//Вывести в консоль первые 2 цифры полученного числа
console.log(multiplyResult.toString().slice(0, 2));
