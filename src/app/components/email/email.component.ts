import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  constructor(public _MessageService: MessageService) {

  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
  }
}