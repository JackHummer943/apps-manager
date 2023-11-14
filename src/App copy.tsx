import { useState } from 'react'

import './App.css'


const appsData = [1,2,3].map(elem => {
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
    const formData = new FormData(e.currentTarget)
    const app = Object.fromEntries(formData.entries()) as never as AppType
    console.log(formData.get('name'), formData.get('url'))
     console.log(app.name , app.url)
    setApps([...apps, {id: 4,  healthy: false, url: ... app}])
    e.currentTarget.reset()
  }

  function removeApp(app){
    console.log('click')

    const index = apps.indexOf(app)
    const copy = [...apps]
    apps.splice(index, 1);

    setApps(copy)
  }

  return <>
  <form  onSubmit={handleAdd}>
    <input type='text' name='name' ></input>
    <br/>
    <input type='text' name='url' ></input>
    <br/>
    <input type='submit' name='url' ></input>
  </form>
    <button onClick={handleAdd}>Добавить</button>
    {apps.map(app => {
      return <div>
        {app.name} <a href = {app.url}>{app.url}</a>  {app.healthy ? 'HEALTHY' : 'UNHEALTY'}
        <button onClick= {()=>removeApp(app)}> Удалить</button>
        </div>
    })}
    </>
  }


export default App
