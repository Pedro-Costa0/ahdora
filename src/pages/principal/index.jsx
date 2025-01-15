import Cabecalho from "../../components/cabecalho";
import Redes from "../../components/redes";
import Carrosel from "./carrossel";
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
          <Carrosel/>
        </section>

        <section className="local">

          <h1 className="local-h1"><span>Nossa</span> Localização</h1>

          <div className="mapBox">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.2277747683726!2d-46.69767091042849!3d-23.714868550958457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f23b012aaf5%3A0xd2129d0837de6e04!2sEspa%C3%A7o%20Ahdora%20-%20Beleza%2C%20Sa%C3%BAde%20e%20Bem-Estar!5e0!3m2!1spt-BR!2sbr!4v1736914900161!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </section>

        <sectio className="avalie">
          
        </sectio>
      </div>
    </>
  );
}
