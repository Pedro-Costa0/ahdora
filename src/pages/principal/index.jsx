import Cabecalho from "../../components/cabecalho";
import Redes from "../../components/redes";
import Carrosel from "./carrossel";
import "./index.scss";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

export default function principal() {
  return (
    <>
      <Cabecalho />
      <Redes />
      <div className="container">
        <section id="QS" className="home">
          <div className="cta">
            <h1 className="titulo">Ahdora</h1>

            <p className="descricao">
              <span>N</span>osso espaço promove<br /> bem-estar e satisfação
              através de <br /> procedimentos Estéticos e <br />
              Terapêuticos personalizados.
            </p>

            <div className="cta-button">
              <a
                href="https://www.instagram.com/espacoahdora/"
                className="btn-default"
              >
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

        <section id="local" className="profissionais">
          <h1 className="card-h1">Profissionais</h1>
          <Carrosel />
        </section>

        <section id="avalie" className="local">
          <h1 className="local-h1">
            <span>Nossa</span> Localização
          </h1>

          <div className="mapBox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.2277747683726!2d-46.69767091042849!3d-23.714868550958457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f23b012aaf5%3A0xd2129d0837de6e04!2sEspa%C3%A7o%20Ahdora%20-%20Beleza%2C%20Sa%C3%BAde%20e%20Bem-Estar!5e0!3m2!1spt-BR!2sbr!4v1736914900161!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="contato" className="avalie">
          <h1 className="avalia-h1">Avaliações</h1>

          <div className="coments">
            <div className="box">
              <h2 className="box-h2">Agda Cedro</h2>
              <img className="star" src="/assets/images/estrelas.png" alt="" />

              <p className="box-p">
                Espaço maravilhoso, a Dora é super atenciosa e paciente. Conheci
                a podologia e viciei não largo mais. Tudo organizado, material
                esterelizado ela abre tudo na sua frente,tem uma mão
                maravilhosa.
              </p>
            </div>

            <div className="box">
              <h2 className="box-h2">Rhuama Leite</h2>
              <img className="star" src="/assets/images/estrelas.png" alt="" />

              <p className="box-p">
                Grandes profissionais, tanto na área de podologia como
                estética!! Me sinto tão a vontade e super indico. O resultado do
                trabalho dá ótimos frutos, porque vocês semeiam com dedicação e
                muita motivação.
              </p>
            </div>
            <div className="box">
              <h2 className="box-h2">Jennifer Nascimento</h2>
              <img className="star" src="/assets/images/estrelas.png" alt="" />

              <p className="box-p">
                Lugar limpo e organizado, um ótimo atendimento desde a recepção.
                Fui atendida pela depiladora que foi super gente boa,
                atenciosa, simpática e paciente. Super recomendo.
              </p>
            </div>
          </div>

          <div className="bt-avaliar">
            <a
              href="https://www.google.com/search?client=opera-gx&sca_esv=9e7358a0bf207c7d&authuser=1&sxsrf=AHTn8zoYAHE0kZi6PJgd9k2P7ZheiZHiRQ:1742082442015&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzVyn2FsFySwZ8Yn9qJO4lekqZGPoDjrRItf3_5uxRY5jTKYMtzirem6Z5kS4hQ5FlN3H6h8ANVeBg9vpZkknUN1Ek5XU4c6UMwhxve19Kwiv6lKKcbYws2W-odPzeY2FPew3Ecns635uuFd-w11OjSo3N5_B&q=Espa%C3%A7o+Ahdora+-+Beleza,+Sa%C3%BAde+e+Bem-Estar+Coment%C3%A1rios&sa=X&ved=2ahUKEwi6voDpoo2MAxVgrJUCHeFeBdMQ0bkNegQIKBAE&biw=1493&bih=794&dpr=1#"
              className="avaliar"
            >
              Avaliar
            </a>
          </div>
        </section>
      </div>

      <footer>
        <img src="/assets/images/logoRedondo.png" alt="" className="logoR" />

        <img src="/assets/images/wave.svg" alt="" className="wave" />
      </footer>
    </>
  );
}
