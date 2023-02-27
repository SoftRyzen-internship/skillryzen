# Назва компонента

Card

# Опис компонента

Компонент Card містить різні види карток. Тип картки визначається пропсом type, а розмір задається через size.

# Властивості

type - тип картки. Може бути 'notification', 'coin', 'info'. За замовчуванням - "info".
size - розмір картки. Може бути 'large', 'small'. За замовчуванням - "large". Size "small" можливий лише для карток з типом "info".
custom - вказує, чи є картка кастомною. За замовчуванням - false. Значення true може передаватись за необхідності лише для карток з типом "info" у розмірі "small".
hideNumber - вказує, чи потрібно ховати кількість запитань у тесті. За замовчуванням - false. Значення true може передаватись за необхідності лише для карток з типом "info" у розмірі "large".
item - об'єкт з даними, які передаються у картку. Для типу "info" це об'єкт з властивостями: title, text, fields, number (якщо властивість hideNumber має значення true, передавати не треба), time. Для типу "notification" та "coin" це об'єкт з властивостями: title, text, number. Для кастомної картки це об'єкт з єдиною властивістю title, якій задається значення "Custom template".
onClick - функція, яка виконується при кліку на кнопку закриття у картках з типом "notification" та "coin". Для типу "info" не передається.

# Приклад використання

      <Card
        type='info'
        size='small'
        item={{
          title: 'FullStuck_Final_Test',
          text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
          fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
          number: 50,
          time: 3,
        }}
      />
