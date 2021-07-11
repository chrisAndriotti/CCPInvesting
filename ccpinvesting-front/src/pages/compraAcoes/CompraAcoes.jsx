import React, { useEffect }  from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, withStyles, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getAcoes } from '../../redux/acao/selectors';
import { buscarAcoes, excluirAcao } from '../../redux/acao/actions';
import { Container } from '@material-ui/core';
import { Cabecalho} from '../../componentes/Cabecalho'
const StyledGrid = withStyles((theme) => ({
  root: {
    margin:'0 80px 0'
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

const CompraAcoes = props => {

  // const classes = useStyles();
  const acoes = useSelector(getAcoes)
  const dispatch = useDispatch();

  useEffect(() =>{
    carregarAcoes();
  }, []);

  const carregarAcoes = async () => {
    // const acoes = await AcaoAPI.buscarAcoes();
    await dispatch(buscarAcoes());
  }

  const deleteAcao = async (id) => {
    console.log("this ", this);
    await excluirAcao(id);
    this.carregarAcoes();
   
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
                      {/* <TableCell>
                        <IconButton color="primary" onClick={() => this.deleteAcao(acao.id)}>
                          <StyledDeleteIcon/>
                        </IconButton>
                      </TableCell> */}
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
export default CompraAcoes;