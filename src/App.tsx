import './App.css'
import { FormEventHandler, useState } from 'react'


const appsData = [1, 2, 3].map(elem => {
  return {
    id: elem,
    name: `app${elem}`,
    url: `http://app${elem}.ru`,
    healthy: false 
  }
})

function App() {

  const [apps, setApps] = useState(appsData)
  // передаем какое то событие
  const handleAdd: FormEventHandler<HTMLFormElement> = (e) => {
    // e.currentTarget // элемент на котором произошло событие
    e.preventDefault() // чтобы предотвратить поведение по умолчанию
    // у нас появляется доступ к данным формы
    const formData = new FormData(e.currentTarget) // если в этот объект передать ссылку на форму, можно извлеч данные из этой формы
    // данные приходят в параметре e в свойстве currentTarget, currentTarget хранит ссылку на html элемент, на котором произошло событие
    console.log(formData.get('name'), formData.get('url'))
    // если мне необходимо будет получить все поля 
   // formData.entries() // все значения всех полей при помощи метлда entries()
    // при помощи метода formData.entries() можно создать объект:
    const app = Object.fromEntries(formData.entries()) //получаем данные в виде объекта
    console.log(app.name, app.url)
  //  console.log('click')
    // ...apps помещяем все элементы текущего списка и добавляем новый 
    // setApps вызывается, react планирует изменения (видит что изменилось состояние)
    // и через некоторое время вызывает эту функцию заново
    // в переменную apps поподет уже то новое состояние, которое было вызвано в последний раз
    setApps([...apps, {id: 4, name: 'app4', healthy: false, url: 'http://app4.ru'}])
  }
  //...
  // создаем новую функцию
  function handleRemove(app) {
    console.log('remove');
    // чтобы удалить элемент из массива array.splice()
    // но нам нужен индекс этого элемента, используем indexOf()
    const index = apps.indexOf(app);  // вычисляем индекс
   // app.splice(index, 1) // по этому индексу удалим один элемент из массива
    const copy = [...apps]
    copy.splice(index, 1) // создаем копию этого массива и уже её модифицируем

    // новый массив передаем как новое значение переменной состояния
    setApps(copy);
  }

  return <>
  {/* добавляем фоорму */}
  <form onSubmit={handleAdd}>
    {/*поле для ввода */}
   <div><input type='text' name='name'></input></div>
   <br />
   <div><input type='text' name='url'></input></div>
  </form>
  <button type='submit'>Добавить</button>
  {apps.map(app => {
    return <div>
      {app.name}
      <a href={app.url}>{app.url}</a> 
      {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
      {/* обрабатываем функцию onClick по кнопке */}
      <button onClick={handleRemove}>Удалить</button>
      </div>
  })}
</>
}

export default App








