package sc.ccpinvesting.ccpinvestingapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.Compra;
import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.service.CompraService;

@RestController
@RequestMapping("/compraAcao")
public class CompraController {
    
    @Autowired
    CompraService compraService;

    @GetMapping
    public List<Compra> pegarTodas()
    {
        return compraService.buscarTodos();
    }

    @PostMapping
    public Investidor realizarCompraAcao(@RequestBody Compra compra)
    {
        var investidor = compra.getInvestidorId();
        var acao = compra.getAcaoId();
        var quantidade = compra.getQuantidade();
        // var idAcao = compra.getAcaoId();
        // var idInvestidor = compra.getInvestidorId();
        // var quantidade = compra.getQuantidade();
       Investidor resultado = compraService.comprarAcao(investidor, acao, quantidade);

        return resultado;
    } 
   
}
