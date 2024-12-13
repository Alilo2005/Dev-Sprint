const Worker = ({name, job, isWorking}: {name: string, job: string, isWorking: boolean}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{job}</h2>
      {isWorking && <h3>Working</h3>}
      {!isWorking && <h3>Not Working</h3>}
      <hr />
    </div>
  )

}

export default Worker  