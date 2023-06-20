import { Container, Form, Avatar } from "./style"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"



export function Profile() {
  return (
    <Container>
      <header>
        <Link to={"/"}>
          <FiArrowLeft/>
          Return    
        </Link>
        </header>

        <Form>

          <Avatar>
            <img src="https://github.com/DyonathasTeles.png" alt="" />

            <label htmlFor="avatar">
              <FiCamera/>
              <input type="file" id="avatar"/>
            </label>
          </Avatar>

          <Input placeholder="Name" type="text" icon={FiUser}/>
          <Input placeholder="E-mail"  type="text" icon={FiMail}/>
          <Input placeholder="Current password" type="password" icon={FiLock}/>
          <Input placeholder="New password" type="password" icon={FiLock}/>

          <Button title={"Save"}/>
        </Form>


    </Container>
  )
}