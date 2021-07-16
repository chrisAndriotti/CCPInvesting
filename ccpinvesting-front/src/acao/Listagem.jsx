import React, { useEffect }  from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, withStyles, IconButton, Collapse, Box, Typography, TableHead } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getAcoes } from '../redux/acao/selectors';
import { buscarAcoes, excluirAcao } from '../redux/acao/actions';
import { Container } from '@material-ui/core';
import { KeyboardArrowUpIcon, KeyboardArrowDownIcon} from '@material-ui/icons/KeyboardArrowUp';
import Jumbotron from '../componentes/Jumbotron';
import { usuarioLogado } from '../redux/login/selectors';
// import { Cabecalho} from '../../componentes/Cabecalho'
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

const Listagem = props => {
  const [open, setOpen] = React.useState(false);
  const isUsuarioLogado = useSelector(usuarioLogado);
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
      <div>
        <Jumbotron />
        <Container >
          <StyledGrid container >
            <Grid item xs={10} >
              <TableContainer component={Paper}>
                <Table size="medium">
                  <TableBody >

                    {acoes.map(acao =>([
                      <TableRow key={acao.id} className="table">
                        <StyledTableCellAcaoNome width="20%" align="center">{acao.nome}</StyledTableCellAcaoNome>
                        <TableCell width="30%" align="center">{acao.descricao}</TableCell>
                        <TableCell width="20%" align="center">{acao.horaAtualizacao}</TableCell>
                        <StyledTableCellAcaoValor width="20%" align="center"> {acao.preco} BRL</StyledTableCellAcaoValor>
                        
                        {isUsuarioLogado &&
                          <TableCell>
                              <Button className="btn" > {/*onClick={() => setOpen(!open)}  */}
                              {/* {open ? <KeyboardArrowUpIcon/> : ""} */}
                              Comprar
                            </Button>
                          </TableCell>
                        }
                        {/* <TableCell>
                          <IconButton color="primary" onClick={() => this.deleteAcao(acao.id)}>
                            <StyledDeleteIcon/>
                          </IconButton>
                        </TableCell> */}
                      </TableRow>
                      // ,
                      // <TableRow key={acao.id}>
                      //   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
                      //     <Collapse in={open} timeout="auto" unmountOnExit>
                      //       <Box margin={1} justifyContent="center" alignItems="center" padding="20px">
                      //         <Typography variant="h6" gutterBottom component="div">
                      //           {acao.nome}
                      //         </Typography>
                      //         <TableHead>
                      //           <TableRow>
                      //             <TableCell>Date</TableCell>
                      //             <TableCell>Customer</TableCell>
                      //             <TableCell align="right">Amount</TableCell>
                      //             <TableCell align="right">Total price ($)</TableCell>
                      //           </TableRow>
                      //         </TableHead>
                      //         <TableBody>
                      //           <TableRow key={props.id}>
                      //             <TableCell component="th" scope="row">
                      //               {props.nome}
                      //             </TableCell>
                      //             <TableCell>{props.descricao}</TableCell>
                      //             <TableCell align="right">{props.preco}</TableCell>
                      //             <TableCell align="right">
                      //               {(props.preco * 100) / 100}
                      //             </TableCell>
                      //           </TableRow>
                      //           <TableRow>
                      //             <Button className="btn"onClick={() => setOpen(!open)}>
                      //               Confirmar compra
                      //             </Button>
                      //           </TableRow>
                      //         </TableBody>
                      //       </Box>
                      //     </Collapse>
                      //   </TableCell>
                      // </TableRow>
                    ]))}
                      
                    </TableBody>
                    
                  
                </Table>
              </TableContainer>
            </Grid>
          </StyledGrid>
        </Container>
      </div>
    )
}
export default Listagem;