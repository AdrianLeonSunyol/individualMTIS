import { IResponseCreate } from "../models/IEmployee"
import { IResponseSeguridad } from "../models/responseSeguridad";
import { IResponseBPEL } from "../models/bpelModels";

//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

export class ApiService {
  constructor(
    private bpelURL: string = "http://localhost:9090/procesoCompra",
    private empleadoNewURL: string = "http://localhost:9091/empleado/nuevo",
    private empleadoSeguridadURL: string = "http://localhost:9092/api/seguridad"
  ) {

  }

  bpel = (numeroUnidades: number, referenciaProducto: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var url = new URL(`${this.bpelURL}`);
         
      fetch(url.toString(), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "numeroUnidades": numeroUnidades,
          "referenciaProducto": referenciaProducto
        })
      })
      .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res: IResponseBPEL) => {
          if (res.status == 200)
            resolve(res);
          else
            reject(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      });
  }

  OBJtoXML = (obj: any) => {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += this.OBJtoXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += this.OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
  }

  createEmpleado = async (empleado: any) => {
    var employeeXML = `
    <Empleado version='1.0' encoding='UTF-8'>
      <Restkey>${empleado.Restkey}</Restkey>
      <Nif>${empleado.Nif}</Nif>
      <Nombre>${empleado.Nombre}</Nombre>
      <Apellidos>${empleado.Apellidos}</Apellidos>
      <Direccion>${empleado.Direccion}</Direccion>
      <Poblacion>${empleado.Poblacion}</Poblacion>
      <Telefono>${empleado.Telefono}</Telefono>
      <Email>${empleado.Email}</Email>
      <FechaNacimiento>${empleado.FechaNacimiento}</FechaNacimiento>
      <NumeroSeguridadSocial>${empleado.NumeroSeguridadSocial}</NumeroSeguridadSocial>
      <Iban>${empleado.Iban}</Iban>
    </Empleado>
  `;
    return await new Promise<any>((resolve, reject) => {
      fetch(this.empleadoNewURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: employeeXML,
      })
      .then((response) => {
        return response.json();
      })
      .then((res: IResponseCreate) => {
        if (res.status == 200)
          resolve(res);
        else 
          reject(res);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
  
  asignarPermisos = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var url = new URL(`${this.empleadoSeguridadURL}/asignarPermiso/${nif}/${sala}`);
      url.searchParams.set("RestKeySec", restKeySec);
         
      fetch(url.toString(), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res: IResponseSeguridad) => {
          if (res.status == 200)
            resolve(res);
          else 
            reject(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      });
  }

  eliminarPermisos = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var url = new URL(`${this.empleadoSeguridadURL}/eliminarPermiso/${nif}/${sala}`);
      url.searchParams.set("RestKeySec", restKeySec);
         
      fetch(url.toString(), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res: IResponseSeguridad) => {
          if (res.status == 200)
            resolve(res);
          else 
            reject(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      });
  }

  validarUsuario = (nif: string, restKeySec: string, sala: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var url = new URL(`${this.empleadoSeguridadURL}/validarUsuario/${nif}/${sala}`);
      url.searchParams.set("RestKeySec", restKeySec);
         
      fetch(url.toString(), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res: IResponseSeguridad) => {
          if (res.status == 200)
            resolve(res);
          else 
            reject(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      });
  }

  verPermisos = (nif: string, restKeySec: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var url = new URL(`${this.empleadoSeguridadURL}/seguridad/obtenerNiveles/${nif}`);
      url.searchParams.set("RestKeySec", restKeySec);
         
      fetch(url.toString(), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res: any) => {
          console.log(res);
          if (res.status == 200)
            resolve(res);
          else 
            reject(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      });
  }
}