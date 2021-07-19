#language: pt
@funcionais
Funcionalidade: Cadastro de contas

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto: 
	Dado que estou acessando a aplicação
	Quando informo o usuário "mr@mr"
	E a senha "mr@mr"
	E seleciono entrar
	Então visualizo a página inicial
	Quando seleciono Contas
	E seleciono Adicionar

@ignore	
Cenário: Deve inserir uma conta com sucesso
	E informo a conta "Conta de Teste"
	E seleciono Salvar
	Então a conta é inserida com sucesso
@ignore	
Cenário: Não deve inserir uma conta sem nome
	E seleciono Salvar
	Então sou notificado que o nome da conta é obrigatório
@ignore		
Cenário: Não deve inserir uma conta com nome já existente
	E informo a conta "Conta mesmo nome"
	E seleciono Salvar
	Então sou notificado que já existe uma conta com esse nome
	
Esquema do Cenário: Deve validar regras cadastro contas
	Quando informo a conta "<conta>"
	E seleciono Salvar
	Então recebo a mensagem "<mensagem>"
	
Exemplos:
	| conta            | mensagem                           |
	| Conta de teste   | Conta adicionada com sucesso!      |
	|                  | Informe o nome da conta            |
	| Conta mesmo nome | Já existe uma conta com esse nome! |
	
	