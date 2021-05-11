package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Carteira;
import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.repository.InvestidorRepository;

@Service
public class InvestidorService {
    
    @Autowired
    InvestidorRepository investidorRepository;

    @Autowired
    CarteiraService carteiraService;

    public List<Investidor> buscarTodos()
    {
        return investidorRepository.findAll();
    }

    public Investidor buscarPorId(Integer id)
    {
        return investidorRepository.findById(id).get();
    }

    public Investidor salvar(Investidor investidor)
    {
        return investidorRepository.save(investidor);
    }

    public Investidor atualizar(Integer id, Investidor investidor)
    {
        Investidor investidorLocalizado = buscarPorId(id);
        investidorLocalizado = investidor;

        return investidorRepository.save(investidorLocalizado);
    }

    public void delete(Integer id)
    {
        investidorRepository.deleteById(id);
    }

    public void atualizaCarteira (Integer idInvestidor, Carteira carteira)
    {
        var investidor = buscarPorId(idInvestidor);
        var carteiraExistente = investidor.getCarteira();

        if(carteiraExistente != null){
            carteiraExistente.add(carteira);
        }
        else
        {
            List<Carteira> novaCarteira = new ArrayList<Carteira>();
            novaCarteira.add(carteira);
            investidor.setCarteira(novaCarteira);
        }

        carteiraService.salvar(carteira);
        salvar(investidor);
    }



}
