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

type AppType = {
  id: number,
  name: string,
  url: string,
  healthy: boolean
}

function App() {

  const [apps, setApps] = useState<AppType[]>(appsData)
 
  const handleAdd: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) // если в этот объект передать ссылку на форму, можно извлеч данные из этой формы
    const app = Object.fromEntries(formData.entries()) as never as AppType    //получаем данные в виде объекта
    // console.log(app.name, app.url)
    setApps([...apps, {id: 4,  healthy: false, ... app}])
    e.currentTarget.reset() // reset - форму можно сбрасывать
  }
  //...
  // создаем новую функцию
  function handleRemove(app) {
    console.log('remove');
    const index = apps.indexOf(app);  // вычисляем индекс
    const copy = [...apps]
    copy.splice(index, 1) // создаем копию этого массива и уже её модифицируем
    setApps(copy);
  }

  return <>
  {/* добавляем фоорму */}
  <form onSubmit={handleAdd}>
   <div><input type='text' name='name'></input></div>
   <br />
   <div><input type='text' name='url'></input></div>
   <button type='submit'>Добавить</button>
  </form>
  
  {apps.map(app => {
    return <div>
      {app.name} <a href={app.url}>{app.url}</a> {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
      <button onClick={handleRemove}>Удалить</button>
    </div>
  })}
</>
}

export default App








