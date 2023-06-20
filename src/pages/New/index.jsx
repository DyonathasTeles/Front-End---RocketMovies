import { Container, Content, Section } from "./style"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { Textarea } from "../../components/Textarea"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"


export function New() {
  return(
    <Container>
    <Header/>

    <Content>
      <div className="header">  
      <Link to={"/"}> <FiArrowLeft/> Return </Link>
      <h1>New movies</h1>
      </div>

      <div className="inputs">
      <Input placeholder="Title" type="text"/>
      <Input placeholder="Your grade (from 0 to 5)" type="text"/>
      </div>

      <Textarea placeholder="Comments"/>

      <Section>
        <h2>Tags</h2>

        <div className="tags">
          <NoteItem value={"React"}/>
          <NoteItem placeholder="New tag" isnew/>
        </div>
      </Section>

      <div className="buttons">
      <Button title={"Delete note"} isBlack={true}/>
      <Button title={"Save editions"} />
      </div>

    </Content>
  </Container>
  )
}