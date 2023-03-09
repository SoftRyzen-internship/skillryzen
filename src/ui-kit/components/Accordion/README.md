Створюємо список AccordionData.ts:
export const filterData = [
{
title: 'Status',
items: ['Polularity', 'Recommended', 'Newest'],
},
{
title: 'Sortation',
items: ['All tests', 'Completed', 'Incompleted'],
},
{
title: 'Level',
items: ['Light', 'Medium', 'Hard'],
},
];

Далі імпортуємо компонент Accordion і передаєм йому дані
зі списку.

import Accordion from './Accordion';
import accordionData from './AccordionData';

const MyComponent = () => {
return (

<div>
<h1>My Accordion</h1>
<Accordion data={filterData} />
</div>
);
};

export default MyComponent;

Для передачі пропсів є такі пропси
{showFilter && <Accordion data={filterData} isIcon isList isMargin />}

isIcon - додає прибирає icon Up - Down
isList - відображає список який ми передаємо у filterData якщо не передавати буде тільки title
isMargin - додає margin: 10px auto якщо не передавати буде margin: 0 auto між списками які передаються окремими об'єктами як приклад у filterData
`
