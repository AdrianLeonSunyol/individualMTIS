import { IEmployee } from "../models/IEmployee"

export class ApiService {
  constructor(
    private bpelURL: string = "http://localhost:9090",
    private empleadoNew: string = "http://localhost:9091",
    private empleadoSeguridad: string = "http://localhost:9092"
  ) {

  }

  bpel = () => {

  }

  createEmpleado = (empleado: IEmployee) => {
    return new Promise<any>((resolve, reject) => {
      resolve({
        status: 200,
        message: "OK"
      });
    });
  }

  asignarPermisos = () => {

  }

  eliminarPermisos = () => {

  }

  validarUsuario = () => {

  }

  verPermisos = () => {

  }
}