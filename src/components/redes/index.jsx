import './index.scss';


export default function Redes(){

    return(
        <>
        <div className="container-redes">

            <ul className='redes-lista'>
                <li className="redes-item">
                    <a href="https://www.facebook.com/EspacoAhdora/?locale=pt_BR"><img src="/assets/images/face.png" alt="" className='redes' /></a>
                </li>
                <li className="redes-item">
                    <a href="https://www.instagram.com/espacoahdora/"><img src="/assets/images/instaa.png" alt="" className='redes' /></a>
                </li>
                <li className="redes-item">
                    <a href="https://wa.me/5511980432650"><img src="/assets/images/zapp.png" alt="" className='redes' /></a>
                </li>
            </ul>

        </div>
        </>
    )
}