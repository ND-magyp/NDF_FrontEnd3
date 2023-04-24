export class Persona {
  id?: number;
  banner: string;
  profile_image: string;
  nombre: string;
  apellido: string;
  titulo1: string;
  titulo2: string;
  cvpdf: string;
  textofooter: string;
  sobre_mi: string;
  email: string;
  password: string;

  constructor(banner: string, profile_image: string, nombre: string, apellido: string, titulo1: string, titulo2: string,
    cvpdf: string, textofooter: string, sobre_mi: string, email: string, password: string) {
    this.banner = banner;
    this.profile_image = profile_image;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo1 = titulo1;
    this.titulo2 = titulo2;
    this.sobre_mi = sobre_mi;
    this.cvpdf = cvpdf;
    this.textofooter = textofooter;
    this.email = email;
    this.password = password;
  }
}

