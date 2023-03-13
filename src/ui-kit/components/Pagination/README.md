В компоненті, де використовується Pagination currentPage зберігається в стейті і робиться запит на бекенд за потрібним номером сторінки
const [currentPage, setCurrentPage] = useState(1);

Компонент Pagination отримує наступні пропси

1. totalPages: загальна к-ть сторінок
2. onPageChange: callback функція, яка викликається при натисканні на номер сторінки
3. currentPage: поточка сторінка, яка зберігається у стейті
4. setCurrentPage: метод для зміни поточної сторінки

# Приклад викор. в компоненті

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

const handlePageChange = (pageNumber: number) => {
setCurrentPage(pageNumber);
};

return
<Pagination 
  totalPages={totalPages} 
  onPageChange={handlePageChange} 
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  />;
