import logoCometa from '../assets/images/cometa_logo.png'
import logoFacebook from '../assets/images/logoFacebook.svg'
import logoInstagram from '../assets/images/logoInstagram.svg'
import logoYoutube from '../assets/images/logoYoutube.svg'


const Footer = () => {
    return (
        <footer>
            <img src={logoCometa} alt='Logo de Cometa'></img>
            <h3>Cometa Animal Shelter</h3>
            <p>correo@asociacioncometa.org</p>
            <p>617 04 09 92</p>
            <nav>
                <a href="https://www.facebook.com/AsociacionCometa">
                    <img src={logoFacebook} alt='Logo de Facebook'></img>
                </a>
                <a href="https://www.instagram.com/asociacion_cometa">
                    <img src={logoInstagram} alt='Logo de Instagram'></img>
                </a>
                <a href="https://www.youtube.com/@asociacioncometa6717">
                    <img src={logoYoutube} alt='Logo de Youtube'></img>
                </a>
            </nav>
        </footer>
    )
}

export default Footer
