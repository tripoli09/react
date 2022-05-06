import "./style/Footer.css"
import fb from "./img/fb.png"
import tw from "./img/tw.png"
import ig from "./img/ig.png"
import email from "./img/email.png"
const Footer = () => {

return (
    <div>
    <footer  >
    <section>
        <a href="https://www.facebook.com/" target="_blank"> <img src={fb}alt="Facebook" width="3%"/> </a>
         <a href="https://www.instagram.com/?hl=es" target="_blank"> <img src={ig}alt="Instagram" width="3%"/> </a>
         <a href="https://twitter.com/home" target="_blank"> <img src={tw }alt="Twitter" width="3%"/> </a>
         <a href="https://mail.google.com/mail/" target="_blank"> <img src={email}alt="E-mail" width="3%"/> </a>
        
    </section>
    <h6 className="alineacionDerecha"> Todos los derechos reservados. </h6>
</footer>
</div>
)


}

export default Footer