import Cabecalho from "../../components/cabecalho";
import Redes from "../../components/redes";
import "./index.scss";

export default function principal() {
  return (
    <>
      <Cabecalho />
      <Redes />
      <div className="container">
        <section className="home">
          <div className="cta">
            <h1 className="titulo">Ahdora</h1>

            <p className="descricao">
              <span>N</span>osso espaço promove bem-estar <br /> e satisfação
              através de <br /> procedimentos Estéticos e <br />
              Terapêuticos personalizados.
            </p>

            <div className="cta-button">
              <a href="" className="btn-default">
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="banner">
            <img
              className="banner-ahdora"
              src="/assets/images/colorido.png"
              alt=""
            />
          </div>
        </section>

        <section className="profissionais">

          <h1 className="card-h1">Profissionais</h1>

          <div className="cards">
            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Dora</h2>
              <h3 className="card-subtt">Podologia</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Maria</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Lucilene</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Luiz</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Elaine</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Edgar</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Celina</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Cida</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</h3>
            </div>

            <div className="card">
              <img src="assets/images/userverde.png" alt="" />
              <h2 className="card-titulo">Michele</h2>
              <h3 className="card-subtt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
