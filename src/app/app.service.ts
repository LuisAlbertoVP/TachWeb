import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
    telefono = '(04) 237-0175';
    celular = '+1 (646) 750-2306';
    correo = 'tach@yahoo.com';
    linkGoogleMaps = 'https://maps.app.goo.gl/BbPAjBoju1qCooD7A';
    linkFacebook = 'https://www.facebook.com/transautochabeli?mibextid=ZbWKwL';
    linkInstagram = 'https://www.instagram.com/transautochabeli25?igsh=MXhheDRzZjRvaHNiYQ==';

    linkWhatsapp(mensaje: string = ''): string {
        if (!mensaje) {
            mensaje = 'Hola, vi su página web y quisiera saber más sobre sus productos.';
        }
        return `https://wa.me/16467502306?text=${encodeURIComponent(mensaje)}`;
    }
}