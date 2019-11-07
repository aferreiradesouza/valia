import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-analise-criticas',
    templateUrl: 'analise-criticas.component.html'
})

export class AnaliseCriticasComponent implements OnInit {

    public sugestao1 = {value: 'DETRAN', showPrepend: true};
    public sugestao2 = {value: 'DETRAN', showPrepend: true};
    public sugestao3 = {value: 'DETRAN', showPrepend: true};

    constructor(public router: Router) { }

    ngOnInit() { }

    enviar() {
        let timerInterval
        Swal.fire({
            title: 'Aguarde um momento',
            timer: 2000,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
            onClose: () => {
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
                    text: 'Alterações realizadas com sucesso!'
                })
            }
        })
    }

    voltar() {
        this.router.navigateByUrl('/detalhe-remessa');
    }

    aceitar(num: number) {
        if(num === 1) {
            this.sugestao1.showPrepend = false;
        } else if (num === 2) {
            this.sugestao2.showPrepend = false;
        } else {
            this.sugestao3.showPrepend = false;
        }
    }

    rejeitar(num: number) {
        if(num === 1) {
            this.sugestao1.value = '';
            this.sugestao1.showPrepend = false;
        } else if (num === 2) {
            this.sugestao2.value = '';
            this.sugestao2.showPrepend = false;
        } else {
            this.sugestao3.value = '';
            this.sugestao3.showPrepend = false;
        }
    }
}