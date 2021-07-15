import React, { useEffect }  from 'react';
import { Avatar, Button, Card, CardActions, CardContent, Grid, makeStyles, TextField, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginUsuario } from '../redux/login/selectors';
import { getInvestidor } from '../redux/investidor/selectors';
import { buscarInvestidorPorLogin } from '../redux/investidor/actions'
import  InputMask  from "react-input-mask";
import chris from '../assets/chris.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        },
        divs: {        
            margin: '10px',
            textAlign: 'center',
        },
        textField: {
            margin:'10px',
            fontSize:'12px',
            width: '25em',
        },
        botao: {
            padding: '50px 0 0',
        },
        resize:{
            fontSize:15
        },
        avatar:{
            margin:'10px'
        },
        containerCard:{
            flexirection: 'column',
        },
        divsCard:{
            flex: 1,
            margin: '5px',
            background: 'tomato',
            textAlign: 'center',
        }
}));

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
                <div className={classes.containerCard}>
                    <Card>
                        <CardContent>
                            <div className={classes.divsCard}>
                                <Avatar className={classes.avatar} src="../assets/chris.jpg" />
                                Olá, {investidor.nome}
                            </div>
                            <div className={classes.divsCard}>
                                <p>
                                    SALDO:
                                </p>
                                <p>
                                    R$ {investidor.carteira}
                                </p>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Editar perfil</Button>
                        </CardActions>
                    </Card>
                </div>
                
                <div className={classes.divs}>
                    <h3>
                        Dados pessoais
                    </h3>
                  
                    <TextField
                        className={classes.textField}
                        name="nome"
                        label="Primeiro nome"
                        type="readonly"
                        value={investidor.nome}
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                    />
               
        
                    <TextField
                        className={classes.textField}
                        name="sobrenome"
                        label="Sobrenome"
                        type="text"
                        value={investidor.sobrenome}
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                    />
                    <InputMask 
                        mask="999.999.999-99"
                        type="text"
                        value={investidor.cpf}
                        
                    >
                    {() =>  <TextField
                               className={classes.textField}
                               name="cpf"
                               label="CPF"
                               InputProps={{
                                classes: {
                                    input: classes.resize,
                                },
                            }}
                        />
                    }       

                    </InputMask>
                    {/* <TextField
                        className={classes.textField}
                        name="cpf"
                        label="CPF"
                        type="text"
                        value={investidor.cpf}
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                    /> */}

                    <TextField
                        className={classes.textField}
                        name="celular"
                        label="Telefone"
                        type="text"
                        value={investidor.celular}
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                    />
                    
                    <TextField
                        className={classes.textField}
                        name="email"
                        label="Email"
                        type="email"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.email}
                    />

                    <TextField
                        className={classes.textField}
                        name="nascimento"
                        label="Nascimento"
                        type="date"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.nascimento}
                    />

                </div> 
             
                
                <div className={classes.divs}>
            
                    <h3>
                        Endereço
                    </h3>

                    <TextField
                        className={classes.textField}
                        name="pais"
                        label="País"
                        type="text"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.pais}
                    />

                    <TextField
                        className={classes.textField}
                        name="estado"
                        label="Estado"
                        type="text"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.estado}
                    />

                    <TextField
                        className={classes.textField}
                        name="cidade"
                        label="Cidade"
                        type="text"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.cidade}
                    />

                    <TextField
                        className={classes.textField}
                        name="bairro"
                        label="Bairro"
                        type="text"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.bairro}
                    />

                    <TextField
                        className={classes.textField}
                        name="rua"
                        label="Rua"
                        type="text"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.rua}
                    />

                    <TextField
                        className={classes.textField}
                        name="numero"
                        label="Número"
                        type="number"
                        InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                        value={investidor.numero}
                    />

                </div>   
                
            </div>
            
        </Grid>
                
        
    )
    

}

export default Perfil;