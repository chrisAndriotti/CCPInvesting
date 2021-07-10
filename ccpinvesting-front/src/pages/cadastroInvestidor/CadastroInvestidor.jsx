import { Button, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";
import { Form, Formik } from "formik";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { buscarInvestidores, cadastrarInvestidor } from '../../redux/investidor/actions'
import { INVESTIDOR_INICIAL } from "../../util/constantes";


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
        
      },
      divs: {
        
        marginLeft: theme.spacing(4),
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textField: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '250px'

        // flexDirection: 'row',
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        
      },
      botao: {
        padding: '50px 0 0',
        marginLeft: theme.spacing()
      }
}));

const StyledTextField = withStyles((theme) =>({
    root: {
        padding:'10px 0 10px'
    }
}))(TextField)





const CadastroInvestidor = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const ref = useRef();

    const cadastrar = investidor => {
        
        dispatch(cadastrarInvestidor(investidor));
    
    }


  
      return (
        <Formik
        initialValues={props.investidor || INVESTIDOR_INICIAL }>
            <form className={classes.container}
             onSubmit={values => {
                 console.log(values)
             }}>
                <Grid container  >
                    <div className={classes.divs}>
                        <h3>Cadastro</h3>

                        <StyledTextField
                            className={classes.textField}
                            label="Usuário"
                            type="text"
                        />

                        <StyledTextField
                            className={classes.textField}
                            label="Senha"
                            type="password"
                        />
                        
                        <StyledTextField
                            className={classes.textField}
                            label="Repita a senha"
                            type="password"
                        />
                    </div>
                    <div className={classes.divs}>
                        <h3>
                            Dados pessoais
                        </h3>

                        <StyledTextField
                            className={classes.textField}
                            label="Primeiro nome"
                            type="text"
                        />
            
                        <StyledTextField
                            className={classes.textField}
                            label="Sobrenome"
                            type="text"
                        />
            
                        <StyledTextField
                            className={classes.textField}
                            id="standard-password-input"
                            label="CPF"
                            type="text"
                        />

                        <StyledTextField
                            className={classes.textField}
                            id="standard-password-input"
                            label="Telefone"
                            type="text"
                        />
                        
                        <StyledTextField
                            className={classes.textField}
                            id="standard-password-input"
                            label="Email"
                            type="email"
                        />

                        <StyledTextField
                            className={classes.textField}
                            label="Nascimento"
                            type="date"
                            
                        />

                    </div> 
                    <div className={classes.divs}>
                        <h3>
                            Endereço
                        </h3>

                        <StyledTextField
                            className={classes.textField}
                            label="País"
                            type="text"
                        />

                        <StyledTextField
                            className={classes.textField}
                            label="Estado"
                            type="text"
                        />

                        <StyledTextField
                            className={classes.textField}
                            label="Cidade"
                            type="text"
                        />

                        <StyledTextField
                            className={classes.textField}
                            label="Bairro"
                            type="text"
                        />
                        <StyledTextField
                            className={classes.textField}
                            label="Rua"
                            type="text"
                        />
                        <StyledTextField
                            className={classes.textField}
                            label="Número"
                            type="number"
                        />

                    </div>   
                </Grid>
                <div className={classes.botao}>
                    <button type="submit" className="btn" >Salvar</button>  
                </div>
            </form>
        </Formik>
        
      )
  }
  export default CadastroInvestidor;