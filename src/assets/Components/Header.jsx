import Styles from './header.module.css'
import Logo from '../imagens/logo.jpg'
import Lupa from '../imagens/lupa.png'


function Header() {

    return (
        <header className={Styles.menu}>
            <nav className={Styles.NavEsq}>
                <img className={Styles.logo} src={Logo}/>
            </nav>
            <nav className={Styles.NavCenter}>
                <p>Home</p>
                <p>Grand Canyan</p>
                <p>Escócia</p>
                <p>Muralha da China</p>
                <p>Aruba</p>
            </nav>
            <nav className={Styles.NavDir}>
                <input type="search"/>
                <img className={Styles.lupa} src={Lupa}/>
            </nav>
        </header>
    )
}

export default Header
