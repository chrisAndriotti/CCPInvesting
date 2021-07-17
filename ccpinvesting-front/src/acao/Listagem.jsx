import React, { useEffect }  from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button, withStyles,Collapse, Input } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { getAcoes } from '../redux/acao/selectors';
import { buscarAcoes, excluirAcao } from '../redux/acao/actions';
import { Container } from '@material-ui/core';
import Jumbotron from '../componentes/Jumbotron';
import { loginUsuario, usuarioLogado } from '../redux/login/selectors';
import { getInvestidor } from '../redux/investidor/selectors';
import { comprar } from '../redux/compra/actions';
import { COMPRA_INICIAL } from '../util/constantes';
import { Form, Formik } from 'formik';
import { buscarInvestidorPorLogin } from '../redux/investidor/actions';
import * as yup from 'yup';
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


const StyledInput = withStyles((theme) =>({
  root:{
    textAlignLast:'center',
    width:'50px',
    borderColor:'#f4511e'
  }
}))(Input)

const Listagem = props => {
 
  const [open, setOpen] = React.useState(false);
  const isUsuarioLogado = useSelector(usuarioLogado);
  const acoes = useSelector(getAcoes)
  const investidor = useSelector(getInvestidor)
  const loginInvestidor = useSelector(loginUsuario)
  // const compraInitial = useSelector(setCompra) 
  const dispatch = useDispatch();
  const compraInitial = COMPRA_INICIAL

  useEffect(() =>{
    carregarAcoes();
    buscarInvestidor(loginInvestidor);

  }, []);

  const buscarInvestidor = async (login) => {
    await dispatch(buscarInvestidorPorLogin(login));
  }
  const carregarAcoes = async () => {
    await dispatch(buscarAcoes());
  }
  const comprarAcao = compra => {
    console.log('dispatch',compra)
    dispatch(comprar(compra))
  }

  const enviarCompra = (compra, acao) => {
    compra.acaoId=acao
    compra.investidorId=investidor.id
    compra.quantidade=parseInt(compra.quantidade)
    console.log("compra:",compra)
    comprarAcao(compra)
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
                      
                      <TableRow key={acao.id} className="table" href="#collapse">
                        <StyledTableCellAcaoNome width="20%" align="center">{acao.nome}</StyledTableCellAcaoNome>
                        <TableCell width="30%" align="center">{acao.descricao}</TableCell>
                        <TableCell width="20%" align="center">{acao.horaAtualizacao}</TableCell>
                        <StyledTableCellAcaoValor width="20%" align="center"> {acao.preco} BRL</StyledTableCellAcaoValor>
                        
                        {isUsuarioLogado &&
                          <TableCell>
                            {open && 
                              <Button className="btn" onClick={() => setOpen(!open)}>  
                                Voltar
                              </Button>
                            }
                            {!open &&
                              <Button className="btn" onClick={() => setOpen(!open)}>  
                                Comprar
                              </Button>
                            }
                          </TableCell>
                        }
                        <Formik
                          enableReinitialize
                          validateOnMount
                          // initialValues={ compraInitial }
                          initialValues={ compraInitial }
                          // validationSchema={yup.object().shape({ quantidade: yup.number().max(20, "maximo 20 por compra").required("requer") })}
                          onSubmit={(compraInitial, acoes) => enviarCompra(compraInitial,acao.id)}
                          render={({values, touched, errors, isSubmitting, setFieldTouched, setFieldValue}) =>{
                          return (
                            <div>
                              
                              <Collapse id="collapse" in={open} timeout="auto" unmountOnExit>
                                <Form>
                                  <TableCell width="1%">
                                    <StyledInput
                                      name="quantidade"
                                      value={values.quantidade}
                                      error={touched.quantidade && errors.quantidade}
                                      helperText={touched.quantidade && errors.quantidade}
                                      onFocus={() => setFieldTouched('quantidade')}
                                      onChange={event => setFieldValue('quantidade', event.target.value)}
                                      // InputProps={{ inputProps: { min: 0, max: 10 } }}
                                      type="number"
                                      placeholder="Qtd."
                                      
                                      />
                                  </TableCell>
                                  <TableCell width="1%">
                                    <button type="submit"  className='btn btnConfirmar' disabled={isSubmitting} >Confirmar</button>
                                    {/* onClick={() => montarCompra(values.acaoId)} */}
                                  </TableCell>
                                </Form>
                              
                              </Collapse>
                            </div>
                        )}}  
                        />
                      
                      </TableRow>
              
                      // {/* <TableRow>
                      //   
                      // </TableRow> */}
                      
                 
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