enum Empregados {
    'codigoOrdem' = 1,
    'codigoEmpresa' = 2,
    'numMatricula' = 3,
    'situacao' = 4,
    'nomeEmpregado' = 5,
    'cpf' = 6,
    'rg' = 7,
    'orgaoExpedidorRg' = 8,
    'dataExpedicaoRg' = 9,
    'orgaoLotacao' = 10,
    'dataNascimento' = 11,
    'estadoCivil' = 12,
    'nomePai' = 13,
    'nomeMae' = 14,
    'sexo' = 15,
    'endereco' = 16,
    'bairro' = 17,
    'cidade' = 18,
    'uf' = 19,
    'cep' = 20,
    'dddFixo' = 21,
    'telefoneFixo' = 22,
    'dataInscricao' = 23,
    'banco' = 24,
    'agencia' = 25,
    'conta' = 26,
    'nacionalidade' = 27,
    'ramal' = 28,
    'salario' = 29,
    'email' = 30,
    'telCelular' = 31,
    'dddCelular' = 32,
    'dataAdmissao' = 33,
    'dataAfastamento' = 34,
    'dataInicioAlteracaoSituacao' = 35,
    'dataDemissao' = 36,
    'dataDesligamentoPlano' = 37,
    'motivoDemissao' = 38,
    'dataObito' = 39,
    'codigoConfidencialidade' = 40,
    'codigoContratoTrabalho' = 41,
    'codigoEstruturalEmpregado' = 42,
    'percentualContribuicao' = 43,
    'numeroPlano' = 44,
    'contribuicaoEsporadica' = 45,
    'dataInicio' = 46,
    'dataFim' = 47,
    'livre' = 48,
}

export class EmpregadosEnum {
    static obterDescricao(num: number): string {
        switch (Empregados[num]) {
            case 'codigoOrdem': return 'Código Ordem';
            case 'codigoEmpresa': return 'Código Empresa';
            case 'numMatricula': return 'Número Matricula';
            case 'situacao': return 'Situação' ;
            case 'nomeEmpregado': return 'Nome Empregador';
            case 'cpf': return 'CPF' ;
            case 'rg': return 'RG' ;
            case 'orgaoExpedidorRg': return 'Orgão Expedidor RG';
            case 'dataExpedicaoRg': return 'Data Expedição RG';
            case 'orgaoLotacao' : return 'Orgão Lotação';
            case 'dataNascimento' : return 'Data Nascimento';
            case 'estadoCivil' : return 'Estado Civil';
            case 'nomePai' : return 'Nome Pai';
            case 'nomeMae' : return 'Nome Mãe';
            case 'sexo' : return 'Sexo';
            case 'endereco' : return 'Endereço';
            case 'bairro' : return 'Bairro';
            case 'cidade' : return 'Cidade';
            case 'uf' : return 'UF';
            case 'cep' : return 'CEP';
            case 'dddFixo' : return 'DDD Fixo';
            case 'telefoneFixo' : return 'Telefone Fixo';
            case 'dataInscricao' : return 'Data Inscrição';
            case 'banco' : return 'Banco';
            case 'agencia' : return 'Agencia';
            case 'conta' : return 'Conta';
            case 'nacionalidade' : return 'Nacionalidade';
            case 'ramal' : return 'Ramal';
            case 'salario' : return 'Salário';
            case 'email' : return 'E-mail';
            case 'telCelular' : return 'Telefone Celular';
            case 'dddCelular' : return 'DDD Celular';
            case 'dataAdmissao' : return 'Data de Admissão';
            case 'dataAfastamento' : return 'Data Afastamento';
            case 'dataInicioAlteracaoSituacao' : return 'Data de Início da Alteração da Situação';
            case 'dataDemissao' : return 'Data de Demissão';
            case 'dataDesligamentoPlano' : return 'Data de Desligamento do Plano';
            case 'motivoDemissao' : return 'Motivo da Demissão';
            case 'dataObito' : return 'Data de Obito';
            case 'codigoConfidencialidade' : return 'Código de Confidencialidade';
            case 'codigoContratoTrabalho' : return 'Código de Contrato de Trabalho';
            case 'codigoEstruturalEmpregado' : return 'Código Estrutural Empregado';
            case 'percentualContribuicao' : return 'Percentual da Contribuição';
            case 'numeroPlano' : return 'Número do Plano';
            case 'contribuicaoEsporadica' : return 'Contribuição Esporadica';
            case 'dataInicio' : return 'Data de início';
            case 'dataFim' : return 'Data fim';
            case 'livre' : return 'Livre';
        }
    }

    static obterEnum() {
        let map: {id: number; name: string}[] = [];
        
        for(var n in Empregados) {
            if (typeof Empregados[n] === 'number') {
                map.push({id: <any>Empregados[n], name: n});
            }
        }
        return map;
    }

    static obterNumerador(str: string): number {
        const descricao = str as keyof typeof Empregados;
        return Empregados[descricao];
    }

    static valueOfDescription(str: string): string {
        const descricao = str as keyof typeof Empregados;
        return this.obterDescricao(Empregados[descricao]);
    }
}
