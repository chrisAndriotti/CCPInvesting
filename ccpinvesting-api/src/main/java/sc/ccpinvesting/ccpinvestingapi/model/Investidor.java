package sc.ccpinvesting.ccpinvestingapi.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Investidor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @Column(nullable = false, length = 30)
    private String nome;

    @Column(nullable = false, length = 50)
    private String sobrenome;

    @Column(nullable = false, length = 11)
    private String cpf;

    @Column(nullable = false, length = 50)
    private String email;

    @Column(nullable = false, length = 50)
    private String celular;
    
    @Column(nullable = false)
    private LocalDate nascimento;

    @OneToMany
    @JoinColumn
    private List<Carteira> carteira;
    
    @OneToOne
    @JoinColumn
    private Endereco endereco;
    
    @OneToMany
    @JoinColumn
    private List<ContaBancaria> contaBancaria;
    
    
    public Investidor(){}
    
    public Investidor(Integer id, String nome, String sobrenome, String cpf, String email, String celular,
    Endereco endereco, List<ContaBancaria> contaBancaria, LocalDate nascimento, List<Carteira> carteira) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.celular = celular;
        this.endereco = endereco;
        this.contaBancaria = contaBancaria;
        this.nascimento = nascimento;
        this.carteira = carteira;

    }
    
    public List<Carteira> getCarteira() {
        return carteira;
    }

    public void setCarteira(List<Carteira> carteira) {
        this.carteira = carteira;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getSobrenome() {
        return sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCelular() {
        return celular;
    }
    public void setCelular(String celular) {
        this.celular = celular;
    }
    public Endereco getEndereco() {
        return endereco;
    }
    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
    public List<ContaBancaria> getContaBancaria() {
        return contaBancaria;
    }
    public void setContaBancaria(List<ContaBancaria> contaBancaria) {
        this.contaBancaria = contaBancaria;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

   
   
    
}
