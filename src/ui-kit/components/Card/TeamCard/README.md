# Назва компонента

TeamCard

# Опис компонента

Компонент TeamCard підходить для карток зі сторінки TeamPage. Картка резинова на всю сторінку. Розмір можна контролювати, помістивши її у сітку грід.

# Властивості

image - треба передати src для картинки
name - ім'я, обов'язковий параметр
position - позиція (розробник, дизайнер, тестувальник і т.д.)
social - масив об'єктів, що зберігає в собі соцмережі: behance, dribble, github, linkedin та ін. Якщо якась з соцмереж не передана, вона не відмальовується в картці

# Приклад використання

    <TeamCard
      name={item.name}
      position={item.position}
      image={IMAGES[item.image]}
      social={[
        { name: 'behance', url: `${item.social.behance}}` },
        { name: 'dribble', url: `${item.social.dribble}}` },
        { name: 'github', url: `${item.social.github}}` },
        { name: 'linkedin', url: `${item.social.linkedin}}` },
      ]}
    />
