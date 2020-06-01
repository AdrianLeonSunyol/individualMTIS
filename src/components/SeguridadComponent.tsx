import React from 'react'
import { IComponentProps } from './IComponentProps'

export interface ISeguridadComponentState {
  peticion: {
    nif: string;
    room: string;
  },
  salas: string[];
  restKeySec: string;
}

export class SeguridadComponent extends React.Component<IComponentProps, ISeguridadComponentState> {
  constructor(props: IComponentProps) {
    super(props);

    this.state = {
      peticion: {
        nif: "",
        room: ""
      },
      salas: [],
      restKeySec: ""
    };
  }

  _onAsignarPermiso = () => {

  }

  _onDeletePermiso = () => {

  }

  _onRevisarUsuario = () => {

  }

  _onVerPermisos = () => {

  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const new_set = {
      ...this.state.peticion,
      [name]: value
    }

    this.setState({
      peticion: new_set
    });
  }

  handleChangeRestKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    this.setState({
      restKeySec: value
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col s12">
            <div className="container">
              <div className="card">
                <br />
                <div className="card-title center">Register</div>
                <div className="card-content center">
                  <form>
                    <div className="row">
                      <div className="col s6">
                        <div className="row">
                          <div className="col s12  input-field">
                            <input type="text" placeholder="Código de Seguridad" name="restKeySec" onChange={this.handleChangeRestKey} value={this.state.restKeySec} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12 input-field">
                            <input type="text" placeholder="Nif" name="nif" onChange={this.handleChange} value={this.state.peticion.nif} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12  input-field">
                            <input type="text" placeholder="Sala Id" name="sala" onChange={this.handleChange} value={this.state.peticion.room} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">

                          </div>
                        </div>
                      </div>

                      <div className="col s6">
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4">Asignar Permiso</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4">Eliminar Permiso</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4">Validar Permisos</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4">Ver Permisos</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row center">
                      <div className="col s12 center">
                        <li className="btn light-blue darken-4" onClick={() => {
                          this.setState({
                            peticion: {
                              nif: "",
                              room: ""
                            },
                            restKeySec: "",
                            salas: []
                          });
                        }}><a href="#!">Cancelar</a></li>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
