import { useDispatch } from "react-redux";
import Login from "../../componentes/Login";
import { buscarToken } from "../../redux/login/actions"

const CadastroInvestidor = props => {
   
    const dispatch = useDispatch();
   
    const logar =  login => {
         dispatch(buscarToken(login))
    }

      return (
        <Login enviar={logar}/>
    )
  }
  export default CadastroInvestidor;