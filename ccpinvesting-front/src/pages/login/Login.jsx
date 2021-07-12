import { useDispatch } from "react-redux";
import Login from "../../componentes/Login";
import { buscarToken, retornoOk } from "../../redux/login/actions"
import Alert from '@material-ui/lab/Alert';
import { useEffect } from "react";

const LoginPage = props => {
   
    const dispatch = useDispatch();

    useEffect(() => {
      console.log("success")
      dispatch(retornoOk());
  }, []);
   
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