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
          <div className="cards">
            <div className="card-um">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-dois">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-tres">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-quatro">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-cinco">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-seis">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>

            <div className="card-sete">
              <h2 className="card-titulo"></h2>
              <h3 className="card-subtt"></h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
