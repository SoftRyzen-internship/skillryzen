# Назва компонента

InfoCard

# Опис компонента

Компонент InfoCard підходить для карток зі сторінки Notifications та Coins. Тип картки визначається пропсом type, а розмір задається через size.

# Властивості

type - тип картки. Може бути 'notification' або 'coin'. 
size - розмір картки. Може бути 'large' або 'small'.
item - це об'єкт з властивостями: title, text, number. 
onClick - функція, яка виконується при кліку на кнопку закриття.

# Приклад використання

      <InfoCard
        type='coin'
        size='large'
        item={{
          title: '+ 2 coins',
          text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
          number: 50,
        }}
        onClick={console.log("close")}
      />