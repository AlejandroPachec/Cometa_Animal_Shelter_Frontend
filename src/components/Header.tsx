import logoCometa from '../assets/images/cometa_logo.png'


const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={logoCometa} className="w-[80px]" alt='Logo de Cometa'></img>
            <nav className="flex gap-5">
                <a href="">¿Quiénes somos?</a>
                <a href="">Colabora</a>
                <a href="">Adopción</a>
                <a href="">Hazte socio</a>
                <a href="">Aparecidos</a>
                <a href="">Contacto</a>
            </nav>
        </div>
    )
}

export default Header
