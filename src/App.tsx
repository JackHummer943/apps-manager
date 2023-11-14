import './App.css'
import { useState } from 'react'



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

  const handleAdd = () => {
    console.log('click');
    setApps([...apps, {id: 4, name: 'app4', healthy: false, url: 'http://app4.ru'}])
  }

  return <>
  <button onClick={handleAdd}>Добавить</button>
  {apps.map(app => {
    return <div>
      {app.name}
      <b>{app.url}</b> 
      {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
      <button>Удалить</button>
      </div>
  })}
</>
}

export default App








