import Student from "./Student"

function App() {

  return (
    <>
    <Student name="spongebob" age={30} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidward" age={30} isStudent={false} />
    <Student name="Sandy" age={42} isStudent={true} /> 
    </>
  );
}

export default App
