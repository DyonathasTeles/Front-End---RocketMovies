import { Container, Profile, SignOut } from "./style"

import { Input } from "../Input"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import AvatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({...rest}) {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input placeholder="Search by title" type="text" {...rest} />

      <Profile className="profile">
        <div>
        <Link to={"/profile"}>{user.name}</Link>
        <SignOut onClick={signOut}>exit</SignOut>
        </div>
        <Link id="img" to={"/profile"}><img src={avatarUrl} alt={user.name} /></Link>
      </Profile>
    </Container>
  )
}