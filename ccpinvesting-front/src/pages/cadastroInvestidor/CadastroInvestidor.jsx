import { Grid, makeStyles, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { INVESTIDOR_INICIAL } from "../../util/constantes";
import * as yup from 'yup';
import  Cadastro  from "../../investidor/Cadastro";
import { useEffect } from "react";
import { cadastrarInvestidor } from "../../redux/investidor/actions";


const CadastroInvestidor = props => {
   
    const dispatch = useDispatch();
   
    const salvarInvestidor =  investidor => {
         dispatch(cadastrarInvestidor(investidor))
    }

      return (
        <Cadastro salvar={salvarInvestidor}/>
    )
  }
  export default CadastroInvestidor;