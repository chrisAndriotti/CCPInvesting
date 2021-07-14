
import { Button, Container, Grid, makeStyles, Table, TableBody, TableContainer, TableHead, TextField, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { buscarInvestidorPorId } from "../services/investidor";
import { loginUsuario } from '../redux/login/selectors';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
      },
      divs: {
        
        // marginLeft: theme.spacing(4),
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textField: {
        // display: 'flex',
        // flexWrap: 'wrap',
        width: '300px',

        flexDirection: 'row',
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        
      },
      botao: {
        padding: '50px 0 0',
      }
}));

const StyledTextField = withStyles((theme) =>({
    root: {
        padding:'13px 0 13px'
    }
}))(TextField)

const Perfil = props => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const investidor = useSelector(loginUsuario)

    // useEffect(() =>{
    //     buscarInvestidor();
    // }, []);

    // const buscarInvestidor = async () => {
    //     // const acoes = await AcaoAPI.buscarAcoes();
    //     await dispatch(buscarInvestidorPorLogin());
    // }

    return (

        <Grid className={classes.container} >
            <Button lable="Buscar" ></Button>
            <div>
                <div className={classes.divs} >
                    <h3>Dados de login</h3>

                    <StyledTextField
                       
                        className={classes.textField}
                        name="login"
                        label="Usuário"
                        type="text"
                        value={investidor.login}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="senha"
                        label="Senha"
                        type="password"
                        value={investidor.senha}
                    />
                    
                    {/* <TextField
                        className={classes.textField}
                        name="senha2"
                        label="Repita a senha"
                        type="password"
                                                    /> */}
                </div>
                <div className={classes.divs}>
                    <h3>
                        Dados pessoais
                    </h3>

                    <StyledTextField
                        className={classes.textField}
                        name="nome"
                        label="Primeiro nome"
                        type="text"
                    />
        
                    <StyledTextField
                        className={classes.textField}
                        name="sobrenome"
                        label="Sobrenome"
                        type="text"
                    />
        
                    <StyledTextField
                        className={classes.textField}
                        name="cpf"
                        label="CPF"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="celular"
                        label="Telefone"
                        type="text"
                    />
                    
                    <StyledTextField
                        className={classes.textField}
                        name="email"
                        label="Email"
                        type="email"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="nascimento"
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
                        name="pais"
                        label="País"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="estado"
                        label="Estado"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="cidade"
                        label="Cidade"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="bairro"
                        label="Bairro"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="rua"
                        label="Rua"
                        type="text"
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="numero"
                        label="Número"
                        type="number"
                    />

                </div>   
            </div>
            
        </Grid>
                
        
    )
    

}

export default Perfil;