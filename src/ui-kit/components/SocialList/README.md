# Призначення компонента

Компонент призначений для відмальовування списку соціальних мереж іконки з лінками.

список можливих соц. мереж:

- telegram
- linkedin
- github
- discord
- behance
- dribble

# Щоб скористуватись компонентом SocialList

обов'язкові пропси:

`social` Масив обєктів з полями:
`name` Назва соц. мережі зі списку вище
`url` Лінка на профіль користувача

не обов'язкові пропси:

`className:` string (передається класс для додаткової стилізації лейбла)
`theme: string` (Зовнішній вигляд темна та світла тема. Можливі варіанти: `dark` та `light` )

# Приклад використання компонента:

імпортувати:

```shell
import { SocialList } from 'ui-kit/index'
```

const social=[
{
name: 'telegram',
url: 'https://web.telegram.org/',
}
{
name: 'github',
url: 'https://github.com/'
}
]

```shell
<SocialList social={social} theme={'dark'} />
```
