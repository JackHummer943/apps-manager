// console.log('1234');

const num = 1234;
const str1 = "1234";
const str2 = 'asdf';
const str3 = `asdf ${str1} ${num}`;
//console.log(str3);

const bool = true; // false
const obj = {test: 1, test2: 2}; // {}
const obj2 = { p1: 3, p2: 4}; // {}

// объединяем 2 объекта в один новый объект {} при помощи spread оператора
// в этом случае spread оператор перечисляет свойства
console.log({
  ...obj, 
  ...obj2,
  test: 'test' 
})

// список ключей объекта obj    (2) [test: 1, test2: 2]
console.log(Object.keys(obj))
// список значений этого объекта   (2) [1,2]
console.log(Object.values(obj))
// список пар ключ-значение (2) [Array(2), Array(2)]
console.log(Object.entries(obj))

const array = [1,2,3]
// можно взять массив и сделать из него объект
console.log(Object.fromEntries(array.map(e => ['prop' + e, e])))

const array2 = [4,5,6]

// мы объединяем массвый array и array2 при помощи спеицального "спред" оператора (спред оператор js)

console.log([...array2, 100, ...array, 1002, ...array])

// const array = [1, 2, "1234", false, obj]
// для добавления 
array.push()

console.log(array.map(elem => {
    return {
      id: elem,
      name: `app${elem}`,
      url: `http://app${elem}.ru`,
      healthy: false 
    }
}))


console.log(array)