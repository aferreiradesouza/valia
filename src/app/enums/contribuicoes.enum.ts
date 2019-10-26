enum Contribuicoes {
    'codigoOrdem' = 1,
    'codigoEmpresa' = 2,
    'numMatricula' = 3,
    'codigoVerba' = 4,
    'anoPagamento' = 5,
    'mesPagamento' = 6,
    'anoCompetencia' = 7,
    'mesCompetencia' = 8,
    'valorFicha' = 9,
    'Livre' = 10,
}

export class ContribuicoesEnum {
    static obterDescricao(num: number): string {
        switch (Contribuicoes[num]) {
            case 'Brasil': return 'Brasil';
            case 'Outro': return 'Outro';
            default: return undefined;
        }
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof Contribuicoes;
        return Contribuicoes[descricao];
    }
}
