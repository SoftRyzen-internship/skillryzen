# Назва компонента

TestCard

# Опис компонента

Компонент TestCard підходить для карток з інформацією про тести.

# Властивості

size - розмір картки. Може бути 'large' або 'small'.
item - це об'єкт з властивостями: title, author, text, fields, number, time.
className - додатковий клас, якщо потрібно задати якість специфічні стилі. Опціональний пропс.

# Приклад використання

      <TestCard
        size='large'
        item={{
            title: 'FullStuck_Final_Test',
            author: 'GoIt',
            text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
            fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
            number: 50,
            time: 3,
        }}
      />
