import { Container, Background, Form } from "./style"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignUp() {

  return (
   <Container>

    <Background/>

     <Form>
    <div >
      <h1>RocketMovies</h1>
      <p>Application to track everything you watch.</p>

      <h2>Create your account</h2>
    </div>
      
      <Input placeholder="Name" type="text" icon={FiUser}/> 
      <Input placeholder="E-mail" type="text" icon={FiLock}/> 
      <Input placeholder="Password" type="Password" icon={FiMail}/> 

    <div className="sign">
      <Button title={"Sign Up"} />
    </div>

    <Link to={"/"}> <FiArrowLeft/> Back to login </Link>

    </Form>

   </Container>
  )
}

