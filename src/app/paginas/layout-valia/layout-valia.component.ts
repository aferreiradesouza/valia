import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-layout-valia',
    templateUrl: 'layout-valia.component.html'
})

export class LayoutValiaComponent implements OnInit {
    public cadastro: any;
    public beneficiarios: any;
    public IN26: any;
    public arrecadacao: any;

    constructor(public router: Router) { }

    ngOnInit() { }

    irAPI() {
        this.router.navigateByUrl('/api');
    }

    irLayoutPersonalizado() {
        this.router.navigateByUrl('/layout-personalizado');
    }

    disabledButton() {
        return this.cadastro || this.beneficiarios || this.arrecadacao || this.IN26
    }

    send() {
        let timerInterval
        Swal.fire({
            title: 'Aguarde um momento',
            timer: 2000,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
            onClose: (dismiss) => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.timer
            ) {
                Swal.fire({
                    title: 'Sucesso!',
                    type: 'success',
                    text: 'Seus arquivos foram enviados com sucesso.',
                    footer: `<a href="/detalhe-remessa">Ver detalhes</a>`
                })
            }
        })
    }
}
