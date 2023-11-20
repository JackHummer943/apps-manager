import React from 'react'
import ky from 'ky'
import { useQuery } from '@tanstack/react-query'
import { AppType } from './AppType'



export const AppList: React.FC = React.memo(() => {
const {data: apps} = useQuery({
   queryKey: ['apps'], 
   queryFn: () => ky.get('http://localhost:3000/apps').json<AppType[]>()
   })

// помечаем функцию как асинхронную
async function handleRemove(app) {
  // после разделителя указывааем id ресурса: ${app.id}
  // это значит что по этому id мы хтим удалить ресурс
  await ky.delete(`http://localhost:3000/apps/${app.id}`)
 // await reloadApps() 
}



  return <>
    {/* apps.? - пока запрос не выполнен ничего не отображай */}
  {apps?.map(app => {
    return <div key={app.id}>
      {app.name} <a href={app.url}>{app.url}</a> {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
      <button onClick={() => handleRemove(app)}>Удалить</button>
    </div>
  })}
  </>
})

