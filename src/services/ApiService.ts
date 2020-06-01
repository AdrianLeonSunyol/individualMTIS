import { IEmployee } from "../models/IEmployee"
import { resolve } from "dns";

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

  asignarPermisos = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      resolve({
        status: 200,
        message: "Ok"
      });
    });
  }

  eliminarPermisos = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      resolve({
        status: 200,
        message: "Ok"
      });
    });
  }

  validarUsuario = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      resolve({
        status: 200,
        message: "Ok"
      });
    });
  }

  verPermisos = (nif: string, restKeySec: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      resolve({
        status: 200,
        message: "Ok"
      });
    });
  }
}