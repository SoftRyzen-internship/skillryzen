# Назва компонента

Table

# Опис компонента

Компонент Table підходить для таблиць таких як на сторінці Leaderboard. Прописане сортування. Тип T має обмеження тим, що він містить властивість id типу number, а тип Column<T> містить властивості name, property і необов'язкову sortable. Таким чином, компонент приймає масив колонок та масив даних, та відображає їх у вигляді таблиці.

Стан sortColumn та sortDirection відповідає за сортування даних у таблиці. Якщо колонка не може бути відсортована, або вона вже є поточною сортованою колонкою, то функція handleSort не змінює стану.

Пропси, які потрібно передати для коректної роботи компонента Table, це columns - масив колонок з відповідними властивостями та data - масив даних.

# Властивості

name - ім'я колонки
property - властивість об'єкту типу T, що відображається в колонці
sortable - показник того, чи може бути колонка відсортована

# Приклад використання

Приклад 1

interface Person {
id: number;
name: string;
age: number;
number: number;
petname: string;
coins: number;
}

const columns: Column<Person>[] = [
{ name: 'Номер', property: 'id', sortable: false },
{ name: 'Ім`я', property: 'name', sortable: true },
{ name: 'Вік', property: 'age', sortable: true },
{ name: 'Номер', property: 'number', sortable: true },
{ name: 'Петнейм', property: 'petname', sortable: true },
{ name: 'Монети', property: 'coins', sortable: true },
];

const data: Person[] = [
{ id: 1, name: 'Alice', age: 30, number: 1, petname: 'Alice', coins: 30 },
{ id: 2, name: 'Bob', age: 25, petname: 'Bob', number: 8, coins: 30 },
{ id: 3, name: 'Charlie', age: 35, petname: 'Charlie', number: 5, coins: 30 },
{ id: 4, name: 'Kate', age: 30, petname: 'Kate', number: 10, coins: 4 },
{ id: 5, name: 'Max', age: 25, petname: 'Max', coins: 25, number: 10 },
{ id: 6, name: 'James', age: 35, petname: 'James', number: 20, coins: 50 },
];

Приклад 2

interface TestData {
id: number;
name: string;
test: string;
score: string;
}

const columns: Column<TestData>[] = [
{ name: 'Номер', property: 'id', sortable: false },
{ name: 'Ім`я', property: 'name', sortable: true },
{ name: 'Назва Тесту', property: 'test', sortable: true },
{ name: 'Результат', property: 'score', sortable: true },
];

const data: TestData[] = [
{ id: 1, name: 'Андрій', test: 'Математика', score: '48/50' },
{ id: 2, name: 'Олексій', test: 'Фізика', score: '42/50' },
{ id: 3, name: 'Іван', test: 'Історія', score: '45/50' },
{ id: 4, name: 'Марія', test: 'Географія', score: '50/50' },
];

<Table columns={columns} data={data} />
