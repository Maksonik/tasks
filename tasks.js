const arr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']
arr.forEach((name) => console.log(`Привет, ${name}`))


// task 2

const numbers = [1, 2, 3, 4, 5]
const arr2 = numbers.map((num) => num * 10)
console.log(arr2)

// task 3

const nums = [5, 12, 8, 130, 44]
const arr3 = nums.filter((num) => num > 10)
console.log(arr3)

// task 4

const people = [
    {name: 'Иван', age: 23},
    {name: 'Мария', age: 18},
    {name: 'Алексей', age: 32},
    {name: 'Ольга', age: 24},
    {name: 'Сергей', age: 17},
    {name: 'Анна', age: 21}
];

const filteredPeople = people
    .filter(person => person.age > 18)
    .map(person => `${person.name} (${person.age} лет)`);

console.log(filteredPeople);


// task 5

const sales = [
    {product: 'Телефон', price: 50000, quantity: 1},
    {product: 'Чехол', price: 1500, quantity: 2},
    {product: 'Зарядное устройство', price: 2500, quantity: 1}
];

const totalSales = sales.reduce((total, sale) => {
    return total + sale.price * sale.quantity;
}, 0);

console.log(`Общая стоимость продаж: ${total}`);
