import React from 'react'
import { IComponentProps } from './IComponentProps';

export interface IBpelComponentState {
  bpel: {
    numeroUnidades: number;
    referenciaProducto: string;
  }
}

declare var M: any;

export class BpelComponent extends React.Component<IComponentProps, IBpelComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      bpel: {
        numeroUnidades: 0,
        referenciaProducto: ""
      }
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const petcicionCompra = {
      ...this.state.bpel,
      [name]: value
    }

    this.setState({
      bpel: petcicionCompra
    });
  }

  _onComprarProducto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (this.state.bpel.numeroUnidades == 0 || this.state.bpel.referenciaProducto == "") {
      M.toast({
        html: "Por favor, introduzca los datos mínimos!"
      });
    } else {
      this.props.service.bpel(this.state.bpel.numeroUnidades, this.state.bpel.referenciaProducto)
        .then((res) => {
          console.log(res);
          M.toast({
            html: res.message
          });
          this.setState({
            bpel: {
              numeroUnidades: 0,
              referenciaProducto: ""
            }
          });
        })
        .catch((err) => {
          M.toast({
            html: err.message
          });
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row container">
          <div className="col s12 container">
            <div className="container">
              <div className="card">
                <br />
                <div className="card-title center">Proceso de compra</div>
                <div className="card-content center">
                  <form>
                    <div className="row center">
                      <div className="col s12">

                        <br />
                        <div className="row">
                          <div className="col s12 input-field">
                            <input type="text" placeholder="Numero de unidades" name="numeroUnidades" onChange={this.handleChange} value={this.state.bpel.numeroUnidades} />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col s12  input-field">
                            <input type="text" placeholder="Referencia de Producto" name="referenciaProducto" onChange={this.handleChange} value={this.state.bpel.referenciaProducto} />
                          </div>
                        </div>
                      </div>

                      <div className="col s12">
                        <br />
                        <br />
                        <div className="row">
                          <div className="col s6">
                            <button type="submit" className="btn light-blue darken-4" onClick={this._onComprarProducto}>Comprar</button>
                          </div>
                          <div className="col s6 center">
                            <li className="btn light-blue darken-4" onClick={() => {
                              this.setState({
                                bpel: {
                                  numeroUnidades: 0,
                                  referenciaProducto: ""
                                }
                              });
                            }}><a href="#!">Cancelar</a></li>
                          </div>
                        </div>
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
