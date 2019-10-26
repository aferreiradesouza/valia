import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detalhe-remessa',
    templateUrl: 'detalhe-remessa.component.html'
})

export class DetalheRemessaComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit() { }

    irCriticas() {
        this.router.navigateByUrl('analise-criticas');
    }
}
