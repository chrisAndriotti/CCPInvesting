import React from 'react';

const Inicio = (props) => {
  return (
    <div>
      {/*(1) Elemento 1 */}
      {/* (2) Elemento 2 */}

      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>Sobre CCPInvesting</h2>
            <br />
            <h4>
              Com mais de 650 fundos, títulos de renda fixa, tesouro direto,
              câmbio, previdência e absolutamente todas as opções pra se
              investir em ações, a Órama tem um portfólio completo e um time de
              assessores especializados pra ajudar a achar o investimento
              perfeito pra você.
            </h4>
            <br />
            <p>bla bla bla</p>
            <br />
            <button className="btn btn-default btn-lg">Fale conosco</button>
          </div>
          {/* (3) Elemento 3 */}
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>
      {/* (4) Elemento 4 */}
      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo "></span>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <br />
            <h4>
              <strong>MISSÃO:</strong> Missão dada missão cumprida
            </h4>
            <br />
            <p>
              <strong>VISÃO:</strong> bla blá e bláaaaa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
