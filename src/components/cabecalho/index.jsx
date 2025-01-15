import "./index.scss";

export default function Cabecalho() {
  return (
    <>
      <div className="container-cabecalho">
        <img src="/assets/images/logoo.png" alt="" className="container-logo" />



        <ul className="lista">
          <li className="lista-item">
            <a href="#local">Quem Somos</a>
          </li>
          <li className="lista-item">
            <a href="#avaliar">Localização</a>
          </li>
          <li className="lista-item">
            <a href="#QS">Nos Avalie</a>
          </li>
          <li className="lista-item">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </>
  );
}
