package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Acao;
import sc.ccpinvesting.ccpinvestingapi.repository.AcaoRepository;

@Service
public class AcaoService {
    
    @Autowired
    AcaoRepository acaoRepository;

    public List<Acao> buscarTodos()
    {
        return acaoRepository.findAll();
    }

    public Acao buscarPorId(Integer id)
    {
        return acaoRepository.findById(id).get();
    }

    public Acao salvar(Acao acao)
    {
        return acaoRepository.save(acao);
    }

    public Acao atualizar(Integer id, Acao acao)
    {
        Acao acaoLocalizada = buscarPorId(id);
        acaoLocalizada = acao;

        return acaoRepository.save(acaoLocalizada);
    }

    public void delete(Integer id)
    {
        acaoRepository.deleteById(id);
    }

}