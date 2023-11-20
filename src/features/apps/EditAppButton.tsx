// внопка (модальное окно)
import React, { FormEventHandler } from 'react'
import ky from 'ky'
import {AppType} from './AppType'

export const EditAppButton: React.FC = React.memo(() => {
   // определяем функцию как асинхронную вставив async
   const handleAdd: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) // если в этот объект передать ссылку на форму, можно извлеч данные из этой формы
    const app = Object.fromEntries(formData.entries()) as never as AppType    //получаем данные в виде объекта
    await ky.post('http://localhost:3000/apps', {
      json: {healthy: false, ...app}
    }).json<AppType>();
 //   await reloadApps()
    e.currentTarget.reset() 
  }

{/* добавляем фоорму */}
    return <form onSubmit={handleAdd}>
    <input type='text' name='name'></input>
    <br />
    <input type='text' name='url'></input>
    <br />
    <button type='submit'>Добавить</button>
    </form>
})
