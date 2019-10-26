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
            case 'Brasil': return 'Brasil';
            case 'Outro': return 'Outro';
            default: return undefined;
        }
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof in26;
        return in26[descricao];
    }
}
