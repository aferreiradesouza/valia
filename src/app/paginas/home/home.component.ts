import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { EmpregadosEnum } from 'src/app/enums/empregados.enum';
import { StorageMemoryService } from 'src/app/services/storage-memory.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public csvContent: string;
    public headers: any[] = [];
    public layout_patrocinador = 0;
    public layout_valia = 0;
    public listaLayoutValia = EmpregadosEnum.obterEnum().sort((a, b) => a.id - b.id);
    public lista: Array<{layout_patrocinador: any, layout_valia: number}> = [];

    @ViewChild('input', {static: false}) input: any;

    constructor(public storageService: StorageMemoryService) { }

    ngOnInit() {
    }

    formatarLabel(codigo: number) {
        return EmpregadosEnum.obterDescricao(codigo);
    }

    onFileSelect(input: HTMLInputElement) {
        const files = input.files;
        if (files && files.length) {

            const fileToRead = files[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent: any) => {
                const textFromFileLoaded = fileLoadedEvent.target.result;
                const csvContent = <any>textFromFileLoaded;
                const result = csvContent.split(/(\r\n|\n|\r)/gm)[0].split(';');
                this.headers = result.sort();
            };
            fileReader.readAsText(fileToRead, "UTF-8");
        }
    }

    relacionar() {
        if(typeof this.layout_valia === 'string') {
            this.layout_valia = parseInt(this.layout_valia);
        }
        const data = {layout_patrocinador: this.layout_patrocinador, layout_valia: this.layout_valia};
        this.lista.unshift(data);
        this.listaLayoutValia = this.listaLayoutValia.filter(e => e.id !== this.layout_valia);
        this.headers = this.headers.filter(e => e !== this.layout_patrocinador);
        this.layout_valia = 0;
        this.layout_patrocinador = 0;
    }

    formatarLabelLista(num: number) {
        return EmpregadosEnum.obterDescricao(num)
    }

    remover(item) {
        console.log(item);
        const dataLayoutValia = {id: item.layout_valia, name: EmpregadosEnum.obterEnum().filter(e => e.id === item.layout_valia)[0].name};
        this.listaLayoutValia.push(dataLayoutValia);
        this.headers.push(item.layout_patrocinador);
        this.headers.sort();
        this.listaLayoutValia.sort((a, b) => a.id - b.id);
        this.lista = this.lista.filter(e => e.layout_valia !== item.layout_valia);
    }

    salvar() {
        this.reset();
    }

    reset() {
        this.layout_valia = 0;
        this.layout_patrocinador = 0;;
        this.input.nativeElement.value = '';
        this.headers = [];
        console.log(this.lista);
        this.lista = [];
    }
}