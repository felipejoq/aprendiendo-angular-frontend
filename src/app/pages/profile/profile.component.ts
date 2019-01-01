import { UsuarioService } from './../../services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario:Usuario;

  imagenSubir: File;

  imagenTemp: any;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  guardar(usuario: Usuario){

    if(!this.usuario.google){
      this.usuario.email = usuario.email;
    }
    this.usuario.nombre = usuario.nombre;


    this._usuarioService.actualizarUsuario(this.usuario)
        .subscribe();

  }

  seleccionImagen(archivo: File){
    console.log(archivo);
    console.log(this.imagenSubir);
    if(!archivo){
      this.imagenSubir = null;
      return;
    }

    if(archivo.type.indexOf('image')<0){
      swal('Solo imagenes', 'El archivo no es una imagen válida', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => {
      this.imagenTemp = reader.result;
    }

  }

  cambiarImagen(){
  console.log(this.imagenSubir);
  this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
