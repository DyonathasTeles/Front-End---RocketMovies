import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Tag } from "../Tag";
import { Container } from "./style";



export function Note({data, ...rest}) {

    return (
        <Container {...rest}>

            <h1>{data.title}</h1>

            <div className="Stars">              
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            </div>

            <p>{data.description}</p>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}