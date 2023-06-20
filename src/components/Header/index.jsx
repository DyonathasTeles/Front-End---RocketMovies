import { Container, Profile } from "./style"

import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input placeholder="Search by title" type="text"/>

      <Profile className="profile">
        <div>
        <Link to={"/profile"}>Dyonathas Teles</Link>
        <span>exit</span>
        </div>
        <Link id="img" to={"/profile"}><img src="https://github.com/DyonathasTeles.png" alt="user image" /></Link>
      </Profile>
    </Container>
  )
}