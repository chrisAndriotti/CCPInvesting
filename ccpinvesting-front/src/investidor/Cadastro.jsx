import { Grid, makeStyles, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Form, Formik } from "formik";
import  InputMask  from "react-input-mask";
import * as yup from 'yup';


const INVESTIDOR_INICIAL = {
   
    celular: "",
    cpf: "",
    email: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: 0,
    pais: "",
    rua: "",
    nascimento: "",
    nome: "",
    sobrenome: "",
    usuario: {
        login: "",
        senha: ""
    }
}

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
      },
      resize:{
        fontSize:15
      }
}));

const StyledTextField = withStyles((theme) =>({
    root: {
        padding:'10px 0 10px'
    }
}))(TextField)

const InvestidorSchema = yup.object().shape({
    usuario: yup.object().shape({ 
        login: yup.string().required('Informe um usuário para login').max(50, 'O campo deve ter no máximo 50 carateres'),
        senha: yup.string().required('Informe uma senha').max(50, 'O campo deve ter no máximo 50 carateres')
    }),
    // senha2: yup.string().required('Repita a senha').max(50, 'O campo deve ter no máximo 50 carateres'),
    nome: yup.string().required('Informe o seu nome').max(25, 'Informe somente o primeiro nome'),
    sobrenome: yup.string().required('Informe seu sobrenome'),
    cpf: yup.string().required('Informe seu CPF').max(11, 'Digite os 11 numeros do CPF.')
});

const Cadastro = props => {
    const classes = useStyles();

    const salvarInvestidor = (investidor, acoes) => {
            console.log("investidor ", investidor);
            acoes.setSubmitting(true);
            props.salvar(investidor);
            acoes.resetForm();
    }
    return (
        <Formik
        enableReinitialize
        validateOnMount
        validationSchema={InvestidorSchema}
        initialValues={ INVESTIDOR_INICIAL }
        onSubmit={(investidor, acoes) => salvarInvestidor(investidor, acoes)}
        render={({values, touched, errors, isSubmitting, setFieldTouched, setFieldValue}) =>{
        return (
            <Form className={classes.container}>
                <Grid container  >
                    <div className={classes.divs}>
                        <h3>Dados para o login</h3>

                        <StyledTextField
                            className={classes.textField}
                            name="usuario.login"
                            label="Usuário"
                            type="text"
                            value={values.usuario.login}
                            error={touched.login && errors.login}
                            helperText={touched.login && errors.login}
                            onFocus={() => setFieldTouched('usuario.login')}
                            onChange={event => setFieldValue('usuario.login', event.target.value)}
                            InputProps={{
                                classes: {
                                  input: classes.resize,
                                },
                              }}
                        />

                        <StyledTextField
                            className={classes.textField}
                            name="usuario.senha"
                            label="Senha"
                            type="password"
                            value={values.senha}
                            error={touched.senha && errors.senha}
                            helperText={touched.senha && errors.senha}
                            onFocus={() => setFieldTouched('usuario.senha')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('usuario.senha', event.target.value)}
                        />
                        
                        {/* <StyledTextField
                            className={classes.textField}
                            name="senha2"
                            label="Repita a senha"
                            type="password"
                            value={values.senha2}
                            error={touched.senha2 && errors.senha2}
                            helperText={touched.senha2 && errors.senha2}
                            onFocus={() => setFieldTouched('senha2')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('senha2', event.target.value)}
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
                            value={values.nome}
                            error={touched.nome && errors.nome}
                            helperText={touched.nome && errors.nome}
                            onFocus={() => setFieldTouched('nome')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('nome', event.target.value)}
                        />
            
                        <StyledTextField
                            className={classes.textField}
                            name="sobrenome"
                            label="Sobrenome"
                            type="text"
                            value={values.sobrenome}
                            error={touched.sobrenome && errors.sobrenome}
                            helperText={touched.sobrenome && errors.sobrenome}
                            onFocus={() => setFieldTouched('sobrenome')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('sobrenome', event.target.value)}
                        />
                        <InputMask 
                            mask="999.999.999-99"
                            type="text"
                            value={values.cpf}
                            error={touched.cpf && errors.cpf}
                            helperText={touched.cpf && errors.cpf}
                            onFocus={() => setFieldTouched('cpf')}
                           
                            onChange={event => setFieldValue('cpf', event.target.value)}
                        >
                            {() =>  <StyledTextField
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

                        <StyledTextField
                            className={classes.textField}
                            name="celular"
                            label="Telefone"
                            type="text"
                            value={values.celular}
                            error={touched.celular && errors.celular}
                            helperText={touched.celular && errors.celular}
                            onFocus={() => setFieldTouched('celular')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('celular', event.target.value)}
                        />
                        
                        <StyledTextField
                            className={classes.textField}
                            name="email"
                            label="Email"
                            type="email"
                            value={values.email}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                            onFocus={() => setFieldTouched('email')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('email', event.target.value)}
                        />

                        <InputMask 
                           
                        
                            value={values.nascimento}
                            error={touched.nascimento && errors.nascimento}
                            helperText={touched.nascimento && errors.nascimento}
                            onFocus={() => setFieldTouched('nascimento')}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('nascimento', event.target.value)}
                        >

                            {() => <StyledTextField
                                        className={classes.textField}
                                        name="nascimento"
                                        label="Nascimento"
                                        type="date"
                                    />
                            }    
                        </InputMask>
                        
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
                            value={values.pais}
                            error={touched.pais && errors.pais}
                            helperText={touched.pais && errors.pais}
                            onFocus={() => setFieldTouched('pais')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('pais', event.target.value)}
                        />

                        <StyledTextField
                            className={classes.textField}
                            name="estado"
                            label="Estado"
                            type="text"
                            value={values.estado}
                            error={touched.estado && errors.estado}
                            helperText={touched.estado && errors.estado}
                            onFocus={() => setFieldTouched('estado')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('estado', event.target.value)}
                        />

                        <StyledTextField
                            className={classes.textField}
                            name="cidade"
                            label="Cidade"
                            type="text"
                            value={values.cidade}
                            error={touched.cidade && errors.cidade}
                            helperText={touched.cidade && errors.cidade}
                            onFocus={() => setFieldTouched('cidade')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('cidade', event.target.value)}
                        />

                        <StyledTextField
                            className={classes.textField}
                            name="bairro"
                            label="Bairro"
                            type="text"
                            value={values.bairro}
                            error={touched.bairro && errors.bairro}
                            helperText={touched.bairro && errors.bairro}
                            onFocus={() => setFieldTouched('bairro')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('bairro', event.target.value)}
                        />
                        <StyledTextField
                            className={classes.textField}
                            name="rua"
                            label="Rua"
                            type="text"
                            value={values.rua}
                            error={touched.rua && errors.rua}
                            helperText={touched.rua && errors.rua}
                            onFocus={() => setFieldTouched('rua')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('rua', event.target.value)}
                        />
                        <StyledTextField
                            className={classes.textField}
                            name="numero"
                            label="Número"
                            type="number"
                            value={values.numero}
                            error={touched.numero && errors.numero}
                            helperText={touched.numero && errors.numero}
                            onFocus={() => setFieldTouched('numero')}
                            InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                            onChange={event => setFieldValue('numero', event.target.value)}
                        />

                    </div>   
                </Grid>
                <div className={classes.botao}>
                    <button type="submit" className="btn" disabled={isSubmitting}>Finalizar cadastro</button>  
                </div>
            </Form>
        )}}  
        />
    )
}
export default Cadastro;