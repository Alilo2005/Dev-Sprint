import { useEffect, useState } from "react"

const Worker = ({name, job, isWorking}: {name: string, job: string, isWorking: boolean}) => {

    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    useEffect(() => {
        console.log(`Worker ${name} is ${isWorking ? 'working' : 'not working'}`)
    }, [count])

    return (
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      <h2> Counter is : {count}</h2>
      <h1>{name}</h1>
      <h2>{job}</h2>
      {isWorking && <h3>Working</h3>}
      {!isWorking && <h3>Not Working</h3>}
      <hr />
    </div>
  )

}

export default Worker  