$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "Como um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta de teste",
        "Conta adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de teste\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"mr@mr\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"mr@mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});