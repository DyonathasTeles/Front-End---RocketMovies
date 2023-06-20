import { Container, Content, NewNote } from "./style"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { FiPlus} from "react-icons/fi"
import { AiFillStar, AiOutlineStar} from "react-icons/ai"


export function Home() {
  return (
    <Container>
      <Header/>

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