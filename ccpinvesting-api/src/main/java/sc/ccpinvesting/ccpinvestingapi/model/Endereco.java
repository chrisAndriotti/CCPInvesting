package sc.ccpinvesting.ccpinvestingapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import sc.ccpinvesting.ccpinvestingapi.model.Enum.EstadosEnum;

@Entity
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, length = 50)
    private String rua;

    @Column(nullable = false, length = 30)
    private String bairro;
   
    @Column(nullable = false, length = 10)
    private Integer numero;

    @Column(nullable = false, length = 25)
    private String cidade;

    @Column(nullable = false, length =  15)
    private EstadosEnum estado;

    @Column(nullable = false, length = 10)
    private String pais;
    
    public Endereco(String rua, String bairro, Integer numero, String cidade, EstadosEnum estado, String pais) {
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }

    public String getRua() {
        return rua;
    }
    public void setRua(String rua) {
        this.rua = rua;
    }
    public String getBairro() {
        return bairro;
    }
    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    public Integer getNumero() {
        return numero;
    }
    public void setNumero(Integer numero) {
        this.numero = numero;
    }
    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    public EstadosEnum getEstado() {
        return estado;
    }
    public void setEstado(EstadosEnum estado) {
        this.estado = estado;
    }
    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }

}

