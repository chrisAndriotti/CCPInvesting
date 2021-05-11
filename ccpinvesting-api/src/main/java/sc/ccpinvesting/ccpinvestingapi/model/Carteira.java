package sc.ccpinvesting.ccpinvestingapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
    public class Carteira {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @OneToOne
    @JoinColumn
    private Acao acoes;
    
    @Column
    private Double valor;

    public Carteira() {
    }

    public Carteira(Integer Id, Acao acoes, Double valor) {
        this.Id = Id;
        this.acoes = acoes;
        this.valor = valor;
    }

    
    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Acao getAcoes() {
        return acoes;
    }

    public void setAcoes(Acao acoes) {
        this.acoes = acoes;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

  

 
    
}
    
    