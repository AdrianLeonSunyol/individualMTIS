export interface IEmployee {
  nif: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  poblacion: string;
  telefono: string;
  email: string;
  fechaNacimiento: string;
  numeroSeguridadSocial: string;
  iban: string;
}

export interface IEmployeeCreateRequest {
  Employee: IEmployee;
  restKeySec: string;
}

export interface IResponseCreate {
  status: number;
  error: string;
  Employee: IEmployee,
  actualizado?: boolean;
  borrado?: boolean;
  creado?: boolean;
}