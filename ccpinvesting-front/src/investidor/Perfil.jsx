import React, { useEffect }  from 'react';
import { Button, Grid, makeStyles, TextField, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginUsuario } from '../redux/login/selectors';
import { getInvestidor } from '../redux/investidor/selectors';
import { buscarInvestidorPorLogin } from '../redux/investidor/actions'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        // // flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row'
        // flexFlow: 'row wrap',
        // justifyContent: 'space-between'
       
  
      },
      divs: {
        // padding: '50px',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
        // width:'400px'
        // flex: 1,
        margin: '10px',
        textAlign: 'center',
        // fontSize: '1.5em',
        // background: 'red',
      },
      textField: {
        // display: 'flex',
        // flexWrap: 'wrap',
        width: '25em',
        // background:'green'

      },
      botao: {
        padding: '50px 0 0',
      }
}));

const StyledTextField = withStyles((theme) =>({
    root: {
        margin:'10px',
        // padding:'5px'
    }
}))(TextField)

const Perfil = props => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const loginInvestidor = useSelector(loginUsuario)
    const investidor = useSelector(getInvestidor);


    useEffect(() =>{
         (buscarInvestidor(loginInvestidor));
    }, []);

    const buscarInvestidor = async (login) => {
        await dispatch(buscarInvestidorPorLogin(login));
    }

    return (

        <Grid className={classes.container} key={investidor.id} >
            
            <div>
                {/* <div className={classes.divs}>
                    <button className="btn" lable="Buscar" >EDITAR</button>
                </div> */}
                
                <div className={classes.divs}>
                    <h3>
                        Dados pessoais
                    </h3>
                  
                    <StyledTextField
                        className={classes.textField}
                        name="nome"
                        label="Primeiro nome"
                        type="readonly"
                        value={investidor.nome}
                    />
               
        
                    <StyledTextField
                        className={classes.textField}
                        name="sobrenome"
                        label="Sobrenome"
                        type="text"
                        value={investidor.sobrenome}
                    />
        
                    <StyledTextField
                        className={classes.textField}
                        name="cpf"
                        label="CPF"
                        type="text"
                        value={investidor.cpf}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="celular"
                        label="Telefone"
                        type="text"
                        value={investidor.celular}
                    />
                    
                    <StyledTextField
                        className={classes.textField}
                        name="email"
                        label="Email"
                        type="email"
                        value={investidor.email}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="nascimento"
                        label="Nascimento"
                        type="date"
                        value={investidor.nascimento}
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
                        value={investidor.pais}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="estado"
                        label="Estado"
                        type="text"
                        value={investidor.estado}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="cidade"
                        label="Cidade"
                        type="text"
                        value={investidor.cidade}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="bairro"
                        label="Bairro"
                        type="text"
                        value={investidor.bairro}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="rua"
                        label="Rua"
                        type="text"
                        value={investidor.rua}
                    />

                    <StyledTextField
                        className={classes.textField}
                        name="numero"
                        label="Número"
                        type="number"
                        value={investidor.numero}
                    />

                </div>   
                
            </div>
            
        </Grid>
                
        
    )
    

}

export default Perfil;