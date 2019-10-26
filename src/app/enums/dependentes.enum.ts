enum Dependentes {
    'codigoOrdem' = 1,
    'codigoEmpresa' = 2,
    'numMatricula' = 3,
    'nomeDependente' = 4,
    'cpf' = 5,
    'dataNascimento' = 6,
    'estadoCivil' = 7,
    'rg' = 8,
    'orgaoExpedidorRg' = 9
}

export class DependentesEnum {
    static obterDescricao(num: number): string {
        switch (Dependentes[num]) {
            case 'codigoOrdem': return 'Código Ordem';
            case 'codigoEmpresa': return 'Código Empresa';
            case 'numMatricula': return 'Número da Metrícula';
            case 'nomeDependente': return 'Nome do Dependente';
            case 'cpf': return 'CPF';
            case 'dataNascimento': return 'Data de Nascimento';
            case 'estadoCivil': return 'Estado Civil';
            case 'rg': return 'RG';
            case 'orgaoExpedidorRg': return 'Orgão Expedidor';
        }
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof Dependentes;
        return Dependentes[descricao];
    }

    static obterEnum() {
        let map: { id: number; name: string }[] = [];

        for (var n in Dependentes) {
            if (typeof Dependentes[n] === 'number') {
                map.push({ id: <any>Dependentes[n], name: n });
            }
        }
        return map;
    }
}
