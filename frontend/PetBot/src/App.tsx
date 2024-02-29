import './App.css'
import UserRoutes from './routes/UserRoutes';

function App() {

  return (
    <>
      <div className="h-screen bg-white flex flex-col items-center justify-center  mx-auto ">
        <UserRoutes />
      </div>
    </>
  )
}

export default App;