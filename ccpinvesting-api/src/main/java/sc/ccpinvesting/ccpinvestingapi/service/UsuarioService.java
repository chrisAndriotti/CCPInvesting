package sc.ccpinvesting.ccpinvestingapi.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.model.Usuario;
import sc.ccpinvesting.ccpinvestingapi.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    InvestidorService investidorService;
    
    public Usuario cadastrar(Usuario usuario){
        usuario.setAtivo(true);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> pegarTodos(){
        return usuarioRepository.findAll();
    }

    // public Investidor buscarPorLogin(String login){
    //     var buscarUsuario = usuarioRepository.findByLogin(login).get().getId();
    //     var investidorLocalizado = investidorService.buscarTodos()
    //                             .stream()
    //                             .filter(i -> i.getUsuario().getId() == buscarUsuario)
    //                             .findFirst()
    //                             .get();

    //     return investidorLocalizado;    
    // } 

    

}
