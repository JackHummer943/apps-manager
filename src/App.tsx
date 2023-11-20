import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { EditAppButton } from './features/apps/EditAppButton'
import { AppList } from './features/apps/AppList'



const queryClient = new QueryClient()

function App() {

  // const [apps, setApps] = useState<AppType[]>([])
  
  // useEffect(() => {
  //  reloadApps()
  // }, [])
  
  // функция возвращает объект асинхронной задачи
  // он неявно создастся, когда выполнится (вызовется) await
  // const reloadApps = async () => {
  //   try {
  //     // json<AppType[]>() - указываем <AppType[]> для typeScript
  //     const apps = await ky.get('http://localhost:3000/apps')
  //     .json<AppType[]>();
  //    setApps(apps)
  //   }
  //   catch(err) {
  //     console.error(err)
  //   }
  // }


  return <QueryClientProvider client={queryClient}>
  <EditAppButton/>
  <AppList />
</QueryClientProvider>
}

export default App








