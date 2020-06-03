export interface ISeguridadRequest {
  restKeySec?: string;
  room?: string;
  sala?: string;
  nif: string;
}


export interface IResponseSeguridad {
  error: string;
  status: number;
  rooms: {nombre: string}[];
}

