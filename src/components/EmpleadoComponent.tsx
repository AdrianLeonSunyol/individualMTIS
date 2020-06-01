import React from 'react'
import { IEmployee } from '../models/IEmployee'
import { IComponentProps } from './IComponentProps';

export interface IEmployeeComponentState {
  empleado: IEmployee;
  restKeySec: string;
}

declare var M: any;

export class EmpleadoComponent extends React.Component<IComponentProps, IEmployeeComponentState> {
  initEmployee: IEmployee = {
    apellidos: "",
    direccion: "",
    email: "",
    fechaNacimiento: "",
    iban: "",
    nif: "",
    nombre: "",
    numeroSeguridadSocial: "",
    poblacion: "",
    telefono: "",
  }

  constructor(props: IComponentProps) {
    super(props);

    this.state = {
      empleado: this.initEmployee,
      restKeySec: ""
    };
  }

  _isEmpty = (employee: IEmployee): boolean => {
    return (
      employee.apellidos == "" ||
      employee.nombre == "" ||
      employee.nif == "" ||
      employee.numeroSeguridadSocial == "" ||
      employee.telefono == "" ||
      employee.poblacion == "" ||
      employee.iban == "" ||
      employee.email == "" ||
      employee.fechaNacimiento == "" ||
      employee.direccion == ""
    )
      ? true
      : false;
  }

  _onCreateEmployee = async (event: any) => {
    event.preventDefault();
    if (this._isEmpty(this.state.empleado)) {
      M.toast({
        html: "Por favor introduce los valos mínimos!"
      });
    } else {
      console.log("vamos a registrar el empleado");
      await this.props.service.createEmpleado(this.state.empleado)
        .then((res) => {
          console.log(res);
          this.setState({
            empleado: this.initEmployee
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const newEmpleado = {
      ...this.state.empleado,
      [name]: value
    };

    this.setState({
      empleado: newEmpleado
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
                  <form onSubmit={this._onCreateEmployee}>
                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Código de seguridad" name="restKeySec" onChange={this.handleChangeRestKey} value={this.state.restKeySec} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Nombre" name="nombre" onChange={this.handleChange} value={this.state.empleado.nombre} />
                      </div>
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Apellidos" name="apellidos" onChange={this.handleChange} value={this.state.empleado.apellidos} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.empleado.email} />
                      </div>
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Teléfono" name="telefono" onChange={this.handleChange} value={this.state.empleado.telefono} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Dirección" name="direccion" onChange={this.handleChange} value={this.state.empleado.direccion} />
                      </div>
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Población" name="poblacion" onChange={this.handleChange} value={this.state.empleado.poblacion} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Nif" name="nif" onChange={this.handleChange} value={this.state.empleado.nif} />
                      </div>
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Fecha de Nacimiento" name="fechaNacimiento" onChange={this.handleChange} value={this.state.empleado.fechaNacimiento} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="Número de Seguridad Social" name="numeroSeguridadSocial" onChange={this.handleChange} value={this.state.empleado.numeroSeguridadSocial} />
                      </div>
                      <div className="col s12 m6 input-field">
                        <input type="text" placeholder="IBAN" name="iban" onChange={this.handleChange} value={this.state.empleado.iban} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s6">
                        <button type="submit" className="btn light-blue darken-4">Crear Empleado</button>
                      </div>
                      <div className="col s6">
                        <li className="btn light-blue darken-4" onClick={() => { this.setState({ empleado: this.initEmployee }); }}><a href="#!">Cancelar</a></li>
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
