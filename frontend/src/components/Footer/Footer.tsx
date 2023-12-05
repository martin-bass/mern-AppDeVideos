//Estilos
import "./Footer.css";

function Footer() {
  const anioActual: number = new Date().getFullYear();
  return (
    <div className="Footer">
      <p className="text-secondary">© {anioActual} Developed by Martín Lopez</p>
    </div>
  );
}

export default Footer;
