# Щоб скористуватись компонентом RadioButton

обов'язкові пропси:

`value: string `(Значення опції яка вибирається)
`checked: boolean` (Вибраний чекбокс чи ні)
`onChange: (e)=>void `(Функція яка відпрацьовує при зміні чекбоксу в ній треба змінювати значення "checked")

не обов'язкові пропси:

`label: string` (Підпис поруч з радіокнопкою)
`labelClassName:` string (передається класс для додаткової стилізації лейбла)
`containerClassName:` string (передається класс для додаткової стилізації контейнера)

# Приклад використання компонента:

імпортувати:

```shell
import { useState } from 'react';
import { RadioButton } from 'ui-kit/index'
```

Cтворити стейт:

```shell
const [selectedOption, setSelectedOption] = useState('');
```

```shell
<RadioButton
value='Option 1'
label='Option 1'
checked={selectedOption === 'Option 1'}
onChange={(e) => setSelectedOption(e.target.value)}
/>
<RadioButton
value='Option 2'
label='Option 2'
labelClassName = 'label'
containerClassName = 'container'
checked={selectedOption === 'Option 2'}
onChange={(e) => setSelectedOption(e.target.value)}
/>
```
