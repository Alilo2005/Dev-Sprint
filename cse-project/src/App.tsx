
import './App.css'
import './components/Name.tsx'
import Worker from './components/Worker'
function App() {

  return (
    <>
      <Worker name="John" job="Software Engineer" isWorking={true} />
      <Worker name="Jane" job="Doctor" isWorking={false} />
      <Worker name="Jack" job="Teacher" isWorking={true} />
      <Worker name="Jill" job="Nurse" isWorking={false} />
    </>

  )
}

export default App
