import { Container, Background, Form } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignIn() {

  return (
   <Container>
     <Form>
    <div>
      <h1>RocketMovies</h1>
      <p>Application to track everything you watch.</p>

      <h2>Login</h2>
    </div>
      
      <Input placeholder="E-mail" type="text" icon={FiLock}/> 
      <Input placeholder="Password" type="Password" icon={FiMail}/> 

    <Button title={"Sign in"}/>

    <Link to={"/register"}>Create an account</Link>
    </Form>

    <Background/>

   </Container>
  )
}

