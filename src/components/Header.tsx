import logoCometa from '../assets/images/cometa_logo.png'


const Header = () => {

  return (
    <>
    <img src={logoCometa} alt='Logo de Cometa'></img>
    <nav>
      <a href="">¿Quiénes somos?</a>
      <a href="">Colabora</a>
      <a href="">Adopción</a>
      <a href="">Hazte socio</a>
      <a href="">Aparecidos</a>
      <a href="">Contacto</a>
    </nav>
    </>
    )
}

export default Header