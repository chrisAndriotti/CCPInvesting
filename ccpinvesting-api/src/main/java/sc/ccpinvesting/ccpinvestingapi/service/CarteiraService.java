package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Carteira;
import sc.ccpinvesting.ccpinvestingapi.repository.CarteiraRepository;

@Service
public class CarteiraService {
    
    @Autowired
    CarteiraRepository carteiraRepository;


    public List<Carteira> buscarTodos()
    {
        return carteiraRepository.findAll();
    }

    public Carteira buscarPorId(Integer id)
    {
        return carteiraRepository.findById(id).get();
    }

    public Carteira criar()
    {
        var carteira = new Carteira();
        return carteira;
    }

    //Cada carteira deve ter um id
    public Carteira salvar(Carteira carteira)
    {
        return carteiraRepository.save(carteira);
    }

    
    public Carteira atualizar(Integer id, Carteira carteira)
    {
        Carteira carteiraLocalizada = buscarPorId(id);
        carteiraLocalizada = carteira;

        return salvar(carteiraLocalizada);
    }

    public void delete(Integer id)
    {
        carteiraRepository.deleteById(id);
    }

   
}
