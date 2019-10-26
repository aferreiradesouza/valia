enum Dependentes {
    'codigoOrdem ' = 1,
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
    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof Dependentes;
        return Dependentes[descricao];
    }
}
