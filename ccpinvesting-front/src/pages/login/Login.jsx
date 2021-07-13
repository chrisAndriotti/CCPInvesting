import { useDispatch } from "react-redux";
import Login from "../../componentes/Login";
import { buscarToken } from "../../redux/login/actions"

const LoginPage = props => {
   
    const dispatch = useDispatch();

    const logar =  login => {
         dispatch(buscarToken(login))
    }

      return (
      <div>
        <Login enviar={logar}/>
      </div>
    )
  }
  export default LoginPage;