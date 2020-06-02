import React from 'react';

export class HomeComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col s12 m4">
            <div className="row center">
              <div className="col s10 center">
                <div className="card center">
                  <div className="card-image">
                    <img src="https://www.eclipse.org/bpel/images/conductor-4.jpg" />
                    <br />
                    <br />
                    <span className="card-title center" style={{ color: "black" }}>BPEL</span>
                  </div>
                  <div className="card-content">
                    <p>Muesta del servicio orquestado con bpel.</p>
                  </div>
                  <div className="card-action">
                    <a href="/bepl">Ver Servicio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="row">
              <div className="col s10 center">
                <div className="card">
                  <div className="card-image">
                    <img src="https://miro.medium.com/max/406/0*L68utcHXnuEQwaf1." />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span className="card-title center" style={{ color: "black" }}>Servicio Empleados</span>
                  </div>
                  <div className="card-content">
                    <p>Servicio de empleados desplegado siguiendo el paradigma rest.</p>
                  </div>
                  <div className="card-action">
                    <a href="/empleado">Ver Servicio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="row">
              <div className="col s10 center">
                <div className="card">
                  <div className="card-image">
                    <img src="https://miro.medium.com/max/406/0*L68utcHXnuEQwaf1." />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span className="card-title center" style={{ color: "black" }}>Servicio Seguridad</span>
                  </div>
                  <div className="card-content center">
                    <p>Servicio de seguridad deplegado siguiendo el paradigma rest.</p>
                  </div>
                  <div className="card-action">
                    <a href="/seguridad">Ver Servicio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
