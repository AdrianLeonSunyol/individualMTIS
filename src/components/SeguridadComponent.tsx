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

declare var M: any;

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

  _onAsignarPermiso = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.state.restKeySec == "" || this.state.peticion.nif == "" || this.state.peticion.room == "") {
      M.toast({
        html: "Por favor, cumplemente los datos requeridos"
      });
    } else {
      await this.props.service.asignarPermisos(
        this.state.peticion.nif,
        this.state.restKeySec,
        this.state.peticion.room
      )
        .then((res) => {
          console.log(res);
          this._onResertFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _onDeletePermiso = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.state.restKeySec == "" || this.state.peticion.nif == "" || this.state.peticion.room == "") {
      M.toast({
        html: "Por favor, cumplemente los datos requeridos"
      });
    } else {
      await this.props.service.eliminarPermisos(
        this.state.peticion.nif,
        this.state.restKeySec,
        this.state.peticion.room
      )
        .then((res) => {
          console.log(res);
          this._onResertFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _onValidarUsuario = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.state.restKeySec == "" || this.state.peticion.nif == "" || this.state.peticion.room == "") {
      M.toast({
        html: "Por favor, cumplemente los datos requeridos"
      });
    } else {
      await this.props.service.validarUsuario(
        this.state.peticion.nif,
        this.state.restKeySec,
        this.state.peticion.room
      )
        .then((res) => {
          console.log(res);
          this._onResertFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _onVerPermisos = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.state.restKeySec == "" || this.state.peticion.nif == "") {
      M.toast({
        html: "Por favor, cumplemente los datos requeridos [RestKey, Nif]"
      });
    } else {
      await this.props.service.verPermisos(
        this.state.peticion.nif,
        this.state.restKeySec,
      )
        .then((res) => {
          console.log(res);
          this._onResertFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _onResertFields = () => {
    this.setState({
      peticion: {
        nif: "",
        room: ""
      },
      salas: []
    });
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
                <div className="card-title center">Gestión de seguridad</div>
                <div className="card-content center">
                  <form>
                    <div className="row center">
                      <div className="col s6 center">
                        <div className="row">
                          <div className="col s12  input-field">
                            <input type="text" placeholder="Código de Seguridad" name="restKeySec" onChange={this.handleChangeRestKey} value={this.state.restKeySec} />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col s12 input-field">
                            <input type="text" placeholder="Nif" name="nif" onChange={this.handleChange} value={this.state.peticion.nif} />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col s12  input-field">
                            <input type="text" placeholder="Sala Id" name="room" onChange={this.handleChange} value={this.state.peticion.room} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <div className="card">
                              <div className="card-title">
                                Salas
                              </div>
                              <div className="card-content">
                                <ul>
                                  {
                                    this.state.salas.map((sala) => {
                                      return (
                                        <li>sala.nombre</li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col s6 center">
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4" onClick={this._onAsignarPermiso}>Asignar Permiso</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row center">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4" onClick={this._onDeletePermiso}>Eliminar Permiso</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row center">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4" onClick={this._onValidarUsuario}>Validar Permisos</button>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row center">
                          <div className="col s12">
                            <button type="submit" className="btn light-blue darken-4" onClick={this._onVerPermisos}>Ver Permisos</button>
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
