import { Component } from "react";
import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, withStyles, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';

const StyledGrid = withStyles((theme) => ({
    root: {
      
    }
  }))(TableContainer);
  
  const StyledTableCellAcaoNome = withStyles((theme) => ({
    root: {
      color: '#f4511e',
      fontWeight: '1000',
      font: '400 15px Lato, sans-serif'
    }
  }))(TableCell);
  
  const StyledTableCellAcaoValor = withStyles((theme) => ({
    root: {
      font: '400 14px Lato, sans-serif'
    }
  }))(TableCell);
  
  const StyledDeleteIcon = withStyles((theme) => ({
    root: {
      color: '#f4511e'
    }
  }))(DeleteIcon)

class Listagem extends Component{
    
    handleExcluir(id) {
        console.log("Excluiu:", id);
        this.props.excluir(id);
    }

    render() {
        const { acoes } = this.props;

        if (!acoes || acoes.length === 0) {
            return <span>Não existem acões a serem listados</span>
        }

    return (
        <Container >
          <StyledGrid container >
            <Grid item xs={10} >
              <TableContainer component={Paper}>
                <Table size="medium">
                  <TableBody >
  
                    {acoes.map(acao =>(
                      <TableRow key={acao.id} className="table" >
                        <StyledTableCellAcaoNome width="20%" align="center">{acao.nome}</StyledTableCellAcaoNome>
                        <TableCell width="30%" align="center">{acao.descricao}</TableCell>
                        <TableCell width="20%" align="center">{acao.horaAtualizacao}</TableCell>
                        <StyledTableCellAcaoValor width="20%" align="center">BRL {acao.preco}</StyledTableCellAcaoValor>
                        <TableCell><Button className="btn" >Comprar</Button></TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => this.handleExcluir(acao.id)}>
                            <StyledDeleteIcon/>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
  
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </StyledGrid>
        </Container>
      )
    }
}

export default Listagem;
