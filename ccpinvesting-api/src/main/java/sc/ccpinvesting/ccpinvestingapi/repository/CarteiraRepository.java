package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Carteira;

public interface CarteiraRepository extends JpaRepository <Carteira, Integer> {
    
}