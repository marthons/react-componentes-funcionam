import { IoCloseCircle, IoHeart, IoHeartOutline } from "react-icons/io5";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size : 25, 
        onClick : favoritar
    }

    return (<div className="colaborador">
        <IoCloseCircle
            size={15}
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito
                    ? < IoHeart {...propsFavorito} color="#ff0000" />
                    : < IoHeartOutline {...propsFavorito} />}
            </div>
        </div>
    </div>)
}

export default Colaborador