Компонент Pagination отримує наступні пропси

1. totalPages: загальна к-ть сторінок
2. onPageChange: callback функція, яка викликається при натисканні на номер сторінки

Компонент Pagination використовується в потрібному компоненті, передавши загальну к-ть сторінок і ф-ю для обробки зміни поточної сторінки.

const handlePageChange = (pageNumber: number) => {
setCurrentPage(pageNumber);
};
Поточна сторінка зберігається в компоненті Pagination і передається колбеком.

В компоненті, де використовується Pagination currentPage зберігається в стейті і робиться запит на бекенд за потрібним номером сторінки
const [currentPage, setCurrentPage] = useState(1);

Приклад викор. в компоненті

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

const handlePageChange = (pageNumber: number) => {
setCurrentPage(pageNumber);
};
return
<Pagination 
  totalPages={totalPages} 
  onPageChange={handlePageChange} 
  />;
