import { Container, Content, NewNote } from "./style"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { FiPlus} from "react-icons/fi"
import { AiFillStar, AiOutlineStar} from "react-icons/ai"

import { useEffect, useState } from "react"
import { api } from "../../services/api"


export function Home() {

  const [search, setSearch] = useState("")
  const[tag, setTag] = useState([])
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tag}`)
      console.log(response.data);
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}/>

      <Content>

        <div className="header">
        <h1>My Movies</h1>
        <div>
        <NewNote to="/new">
          <FiPlus/>
          Add Movie
        </NewNote>
        </div>
        </div>

      
        <section className="Notes">
          
        {
          notes.map( note => (
            <Note key={String(note.id)} data={note} />
          ))          
        }

          <div className="Note">

  <h2>Interestellar</h2>
  <div className="Stars">
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiOutlineStar/>
  </div>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    uisquam eum incidunt nobis, aliquid facere blanditiis explicabo animi facilis! Magni voluptatem incidunt 
    rerum adipisci autem laboriosam maiores ab quam temporibus quos
    Lorem, ipsum dolor sit amet... 
  </p>         

  <div className="tags">
  <Tag title={"React"}/>
  <Tag title={"Node"}/>
  <Tag title={"Stars"}/>
  </div>

          </div>

          <div className="Note">

          <h2>Interestellar</h2>
          <div className="Stars">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            uisquam eum incidunt nobis, aliquid facere blanditiis explicabo animi facilis! Magni voluptatem incidunt 
            rerum adipisci autem laboriosam maiores ab quam temporibus quos
            Lorem, ipsum dolor sit amet... 
          </p>         

          <div className="tags">
          <Tag title={"React"}/>
          <Tag title={"Node"}/>
          <Tag title={"Stars"}/>
          </div>

          </div>

        </section>


      </Content>
    </Container>
  )
}