# Назва компонента

AddButton

# Опис компонента

Компонент AddButton містить кнопку з переданим текстом та іконкою. При кліку на кнопку виконується функція, передана через властивість onClick. Колір кнопки визначається властивістю color. Тип кнопки (button або submit) задається властивістю type.

# Властивості

type - тип кнопки. Може бути button або submit.
text - текст, що відображається на кнопці.
onClick - функція, яка виконується при кліку на кнопку.
color - колір кнопки. Може бути black або blue.

# Приклад використання

<AddButton
  type="button"
  text="Додати"
  onClick={...}
  color="blue"
/>