import { Grid, makeStyles, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import '../index.css';
import * as yup from 'yup';

const LOGIN_INICIAL = {
  login: "",
  senha: ""
}

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // background: 'blue'
  },
  divs: {
    // marginLeft: theme.spacing(4),
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'green'
  },
  textField: {
    // background:"red",
    width: '300px',
    fontSize: 22
  },

}))
      
const LoginSchema = yup.object().shape({
  login: yup.string().required('Informe o usuário para login').max(50, 'O campo deve ter no máximo 50 carateres'),
  senha: yup.string().required('Informe sua senha').max(50, 'O campo deve ter no máximo 50 carateres'),  
});

const Login = props =>{
  const classes = useStyles();

  const enviarLogin = (login, acoes) => {
    console.log("login",login);
    acoes.setSubmitting(true);
    props.enviar(login);
    acoes.resetForm();
  }

  return (
    <Formik
    enableReinitialize
    validateOnMount
    validationSchema={LoginSchema}
    initialValues={ LOGIN_INICIAL }
    onSubmit={(login, acoes) => enviarLogin(login, acoes)}
    render={({values, touched, errors, isSubmitting, setFieldTouched, setFieldValue}) =>{
    return (
      <Form className={classes.container}>
        <Grid >

          <Grid className={classes.divs}>
            <TextField
            className={classes.textField}
            name="login"
            value={values.login}
            item xs={11}
            label="login"
            error={touched.login && errors.login}
            helperText={touched.login && errors.login}
            onFocus={() => setFieldTouched('login')}
            onChange={event => setFieldValue('login', event.target.value)}
            />
          </Grid>

          <Grid className={classes.divs}>
            <TextField
            className={classes.textField}
            name="senha"
            value={values.senha}
            item xs={11}
            label="senha"
            type="password"
            error={touched.senha && errors.senha}
            helperText={touched.senha && errors.senha}
            onFocus={() => setFieldTouched('senha')}
            onChange={event => setFieldValue('senha', event.target.value)}
            />
            
          </Grid>


          <Grid className={classes.divs}>
            <button 
            className="btn btnLogin"
            type="submit"
            disabled={isSubmitting}
            >
              Logar
            </button>
            
          </Grid>
        </Grid>
      </Form>

    )}}  
    />
  )
}

export default Login;
