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
            case 'codigoOrdem': return 'Código Ordem';
            case 'codigoEmpresa': return 'Código Empresa';
            case 'numMatricula': return 'Número da Metrícula';
            case 'codigoVerba': return 'Código da Verba';
            case 'anoPagamento': return 'Ano de Pagamento';
            case 'mesPagamento': return 'Mês de Pagamento';
            case 'anoCompetencia': return 'Ano de Competencia';
            case 'mesCompetencia': return 'Mês de Competência';
            case 'valorFicha': return 'Valor da Ficha';
            case 'Livre': return 'Livre';
        }
    }

    static obterEnum() {
        let map: { id: number; name: string }[] = [];

        for (var n in Contribuicoes) {
            if (typeof Contribuicoes[n] === 'number') {
                map.push({ id: <any>Contribuicoes[n], name: n });
            }
        }
        return map;
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof Contribuicoes;
        return Contribuicoes[descricao];
    }
}
