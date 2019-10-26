enum in26 {
    'codigoOrdem' = 1,
    'codigoEmpresa' = 2,
    'numMatricula' = 3,
    'naturalidade' = 4,
    'naturezaRg' = 5,
    'ocupacao' = 6,
    'ufRg' = 7
}

export class In26Enum {
    static obterDescricao(num: number): string {
        switch (in26[num]) {
            case 'codigoOrdem': return 'Código Ordem';
            case 'codigoEmpresa': return 'Código Empresa';
            case 'numMatricula': return 'Número da Matricula';
            case 'naturalidade': return 'Naturalidade';
            case 'naturezaRg': return 'Natureza do RG';
            case 'ocupacao': return 'Ocupação';
            case 'ufRg': return 'UF do RG';
            default: return undefined;
        }
    }

    static obterEnum() {
        let map: { id: number; name: string }[] = [];

        for (var n in in26) {
            if (typeof in26[n] === 'number') {
                map.push({ id: <any>in26[n], name: n });
            }
        }
        return map;
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof in26;
        return in26[descricao];
    }
}
