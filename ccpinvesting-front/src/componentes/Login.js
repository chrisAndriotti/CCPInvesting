import React from 'react';
import '../index.css';

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
  TextField,
  withStyles,
} from '@material-ui/core';

const StyledTextField = withStyles((theme) => ({
  root: {
    font: 20,
  }
}))(TextField);

const StyledGrid = withStyles((theme) => ({
  root: {
    margin: '0 250px 0',
    padding: '10px'
  }
}))(Grid);

const StyledButton = withStyles((theme) => ({
  root: {
    margin: '50px 150px 0',
  }

}))(Button);

const StyledContainer = withStyles((theme) => ({
  root: {
    alignContent: 'center'
  }
}))(Container);

function Login() {
  return (
    <StyledContainer>
      <StyledGrid container justify="center" item xs={8}>

        <Grid item xs={7}>
          <FormControl fullWidth>
            <StyledTextField id="standard-basic" label="Email" color='secondary' />
          </FormControl>
        </Grid>
        <StyledGrid></StyledGrid>

        <Grid item xs={7}>
          <FormControl fullWidth>
            <StyledTextField id="standard-basic" label="Senha"/>
          </FormControl>
        </Grid>

        <StyledGrid item xs={10}>
          <StyledButton>
            <Button className="btn">Iniciar Sessão</Button>
          </StyledButton>
        </StyledGrid>

      </StyledGrid>
    </StyledContainer>
  );
}

export default Login;
