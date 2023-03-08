# Назва компонента

TeamCard

# Опис компонента

Компонент TeamCard підходить для карток зі сторінки TeamPage. Картка резинова на всю сторінку. Розмір можна контролювати, помістивши її у сітку грід.

# Властивості

image - треба передати src для картинки
name - ім'я, обов'язковий параметр
position - позиція (розробник, дизайнер, тестувальник і т.д.)
social - об'єкт, що зберігає в собі соцмережі: behance, dribble, github, linkedin. Якщо якась з соцмереж не передана, вона не відмальовується в картці

# Приклад використання

      <TeamCard
      name='John Doe'
      position='Front-End Developer'
      image={IMAGES.HTML}
      social={{
        behance: 'https://google.com/',
        dribble: 'https://google.com/',
        github: 'https://google.com/',
        linkedin: 'https://google.com/',
      }}
