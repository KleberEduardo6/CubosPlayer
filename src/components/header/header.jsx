import Logo from '../../assets/logo.svg'
import Profile from '../../assets/profile.jpg'
import './header.css'

export default function Header(){

return(
    <header>
        <img src={Logo} alt="logo do site escrito cubos player com um botão de play entre as duas palavras" />
        <div>
            <img src={Profile} alt="foto de perfil" />
            <p>Bem vindo, Daniel.</p>
        </div>
    </header>
)
}
