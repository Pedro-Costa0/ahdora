import "./index.scss";

export default function Cabecalho() {
  return (
    <>
      <div className="container-cabecalho">
        <img src="/assets/images/logoo.png" alt="" className="container-logo" />



        <ul className="lista">
          <li className="lista-item">
            <a href="#QS">Quem Somos</a>
          </li>
          <li className="lista-item">
            <a href="#local">Localização</a>
          </li>
          <li className="lista-item">
            <a href="#avalie">Nos Avalie</a>
          </li>
          <li className="lista-item">
            <a href="https://wa.me/5511980432650">Contato</a>
          </li>
        </ul>
      </div>
    </>
  );
}
