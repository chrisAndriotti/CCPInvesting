package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Carteira;
import sc.ccpinvesting.ccpinvestingapi.model.Compra;
import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.repository.CompraRepository;


@Service
public class CompraService {
    
    @Autowired
    InvestidorService investidorService;
    
    @Autowired
    AcaoService acaoService;
    
    @Autowired
    CompraRepository compraRepository;

    @Autowired 
    CarteiraService carteiraService;


    public List<Compra> buscarTodos()
    {
        return compraRepository.findAll();
    }

    public Compra buscarCompraPorId(Integer id)
    {
        return compraRepository.findById(id).get();
    }

    // Cada compra deve ter um novo ID.
    public Compra salvar(Compra compra)
    {
        return compraRepository.save(compra);
    }

    public Investidor comprarAcao(Integer idInvestidor, Integer idAcao, Integer quantidade)
    {
        Compra compra = new Compra();
        compra.setAcaoId(idAcao);
        compra.setInvestidorId(idInvestidor);
        compra.setQuantidade(quantidade);

        salvar(compra);
        
        var investidor = investidorService.buscarPorId(idInvestidor);   
        var acao = acaoService.buscarPorId(idAcao);
        var totalCompra = calculoTotalCompra(idAcao, quantidade);

        Carteira carteiraVazia= carteiraService.criar();
        carteiraVazia.setAcoes(acao);
        carteiraVazia.setValor(totalCompra);

        investidorService.atualizaCarteira(idInvestidor, carteiraVazia);

        
        return investidor;
        
    }

    public Double calculoTotalCompra(Integer idAcao, Integer quantidadeAcao)
    {
        var acao = acaoService.buscarPorId(idAcao);
        var precoAcao = acao.getPreco();

        return precoAcao * quantidadeAcao;
        
    }

}
