import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
    selector: 'app-detalhe-remessa',
    templateUrl: 'detalhe-remessa.component.html'
})

export class DetalheRemessaComponent implements OnInit {
    constructor(public router: Router, public ajax: AjaxService) { }

    ngOnInit() { }

    irCriticas() {
        this.router.navigateByUrl('analise-criticas');
    }

    public baixar() {
        window.open('https://drive.google.com/uc?export=download&id=1Jr1DIlC8rw9VrSjLBmmkwXodpOX_O_lj', '_blank');
    }
}
