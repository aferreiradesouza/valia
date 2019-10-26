import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpregadosEnum } from 'src/app/enums/empregados.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { DependentesEnum } from 'src/app/enums/dependentes.enum';
import { ContribuicoesEnum } from 'src/app/enums/contribuicoes.enum';
import { In26Enum } from 'src/app/enums/in26.enum';
import { UtilService } from 'src/app/services/util.services';

export interface ILayoutPersonalizado {
    layout: any;
}

@Component({
    selector: 'app-layout-personalizado',
    templateUrl: 'layout-personalizado.component.html'
})

export class LayoutPersonalizadoComponent implements OnInit {
    public csvContent;
    public headers: any[] = [];
    public layout_patrocinador = 0;
    public layout_valia = 0;
    public listaLayoutValia;
    public lista: Array<{ layout_patrocinador: any, layout_valia: number }> = [];
    public step: 1 | 2 = 1;
    public data: ILayoutPersonalizado;
    public codSelected: 1 | 2 | 3 | 4;

    public cadastro: any;
    public beneficiarios: any;
    public in26: any;
    public arrecadacao: any;
    public form = {
        cadastro: '',
        beneficiarios: '',
        in26: '',
        arrecadacao: '',
    }

    @ViewChild('empregadosInput', { static: false }) empregadosInput: any;
    @ViewChild('dependentesInput', { static: false }) dependentesInput: any;
    @ViewChild('in26Input', { static: false }) in26Input: any;
    @ViewChild('arrecadacaoInput', { static: false }) arrecadacaoInput: any;

    constructor(public router: Router, public route: ActivatedRoute, public utilService: UtilService) { }

    ngOnInit() {
        this.data = this.route.snapshot.data['data'];
    }

    formatarLabel(codigo: number) {
        if (this.codSelected === 1) {
            return EmpregadosEnum.obterDescricao(codigo);
        } else if (this.codSelected === 2) {
            return DependentesEnum.obterDescricao(codigo);
        } else if (this.codSelected === 3) {
            return ContribuicoesEnum.obterDescricao(codigo);
        } else if (this.codSelected === 4) {
            return In26Enum.obterDescricao(codigo);
        }
    }

    onFileSelect(input: HTMLInputElement) {
        const files = input.files;
        this.csvContent = files;
        if (files && files.length) {

            const fileToRead = files[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent: any) => {
                const textFromFileLoaded = fileLoadedEvent.target.result;
                const csvContent = <any>textFromFileLoaded;
                const result = csvContent.split(/(\r\n|\n|\r)/gm)[0].split(';');
                this.headers = result.sort();
            };
            console.log(this.headers);
            fileReader.readAsText(fileToRead, "UTF-8");
        }
    }

    formatarLabelLista(num: number) {
        return EmpregadosEnum.obterDescricao(num)
    }

    relacionar() {
        if (typeof this.layout_valia === 'string') {
            this.layout_valia = parseInt(this.layout_valia);
        }
        const data = { layout_patrocinador: this.layout_patrocinador, layout_valia: this.layout_valia };
        this.lista.unshift(data);
        this.listaLayoutValia = this.listaLayoutValia.filter(e => e.id !== this.layout_valia);
        this.headers = this.headers.filter(e => e !== this.layout_patrocinador);
        this.layout_valia = 0;
        this.layout_patrocinador = 0;
    }

    remover(item) {
        let dataLayoutValia;
        if (this.codSelected === 1) {
            dataLayoutValia = { id: item.layout_valia, name: EmpregadosEnum.obterEnum().filter(e => e.id === item.layout_valia)[0].name };
        } else if (this.codSelected === 2) {
            dataLayoutValia = { id: item.layout_valia, name: DependentesEnum.obterEnum().filter(e => e.id === item.layout_valia)[0].name };
        } else if (this.codSelected === 3) {
            dataLayoutValia = { id: item.layout_valia, name: ContribuicoesEnum.obterEnum().filter(e => e.id === item.layout_valia)[0].name };
        } else if (this.codSelected === 4) {
            dataLayoutValia = { id: item.layout_valia, name: In26Enum.obterEnum().filter(e => e.id === item.layout_valia)[0].name };
        }
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
        this.layout_patrocinador = 0;
        this.empregadosInput.nativeElement.value = '';
        this.dependentesInput.nativeElement.value = '';
        this.in26Input.nativeElement.value = '';
        this.arrecadacaoInput.nativeElement.value = '';
        this.headers = [];
        this.lista = [];
    }

    irLayoutValia() {
        this.router.navigateByUrl('/layout-valia');
    }

    irAPI() {
        this.router.navigateByUrl('/api');
    }

    setStep(num: 1 | 2, cod?: 1 | 2 | 3 | 4, type?: 'criar' | 'editar') {
        this.step = num;
        if (cod) {
            this.codSelected = cod
            if (cod === 1) {
                if (type === 'criar') {
                    this.listaLayoutValia = EmpregadosEnum.obterEnum().sort((a, b) => a.id - b.id);
                } else {
                    this.listaLayoutValia = [];
                    this.headers = [];
                    this.lista = this.data.layout.filter(e => e.tipoArquivo === cod)[0].listaMapeamentos.map(e => {
                        return { layout_patrocinador: e.header, layout_valia: e.chave };
                    });
                }
            } else if (cod === 2) {
                if (type === 'criar') {
                    this.listaLayoutValia = DependentesEnum.obterEnum().sort((a, b) => a.id - b.id);
                } else {
                    this.listaLayoutValia = [];
                    this.headers = [];
                    this.lista = this.data.layout.filter(e => e.tipoArquivo === cod)[0].listaMapeamentos.map(e => {
                        return { layout_patrocinador: e.header, layout_valia: e.chave };
                    });
                }
            } else if (cod === 3) {
                if (type === 'criar') {
                    this.listaLayoutValia = ContribuicoesEnum.obterEnum().sort((a, b) => a.id - b.id);
                } else {
                    this.listaLayoutValia = [];
                    this.headers = [];
                    this.lista = this.data.layout.filter(e => e.tipoArquivo === cod)[0].listaMapeamentos.map(e => {
                        return { layout_patrocinador: e.header, layout_valia: e.chave };
                    });
                }
            } else {
                if (type === 'criar') {
                    this.listaLayoutValia = In26Enum.obterEnum().sort((a, b) => a.id - b.id);
                } else {
                    this.listaLayoutValia = [];
                    this.headers = [];
                    this.lista = this.data.layout.filter(e => e.tipoArquivo === cod)[0].listaMapeamentos.map(e => {
                        return { layout_patrocinador: e.header, layout_valia: e.chave };
                    });
                }
            }
        }
    }

    verificarExistenciaTemplate(cod: number): boolean {
        return this.data.layout.map(e => e.tipoArquivo).indexOf(cod) > -1;
    }

    async criarLayout() {
        await this.utilService.enviarTemplate(this.codSelected, this.lista).then(resp => {
            this.setStep(1)
        });
    }

    onSubmit() {
        console.log(this.empregadosInput);
        console.log({
            empregados: this.empregadosInput.nativeElement.files
        });
    }
}