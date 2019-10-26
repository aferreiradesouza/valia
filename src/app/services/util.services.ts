import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class UtilService {

    public patrocinadorId = 'e5cee7d3-f8e1-498f-80a3-b6627ac3201d';

    constructor(public ajax: AjaxService) { }

    async obterTemplate() {
        const url = `${environment.baseUrl}/Patrocinador/${this.patrocinadorId}/templates`;
        return await this.ajax.get<any>(url);
    }

    async enviarTemplate(tipoArquivo: any, body: any) {
        const url = `${environment.baseUrl}/Template/${this.patrocinadorId}/templates/importartemplate/${tipoArquivo}`;
        return await this.ajax.post<any>(url, body);
    }

    async enviarArquivos(tipoArquivo: any, body: any) {
        const url = `${environment.baseUrl}/Arquivo/ArquivosCsv/${this.patrocinadorId}/${tipoArquivo}`;
        return await this.ajax.post<any>(url, body);
    }
}