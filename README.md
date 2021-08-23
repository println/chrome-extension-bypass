# Canvas Bypass
A browser extension

# Sobre

> O **Canvas Bypass** é uma extensão de navegador com a finalidade de auxiliar usuários do ***Canvas*** imprimir testes e provas  realizadas.

## Compatiblidade
* Chrome
* Firefox
* Outros (não testados) 

## Aspectos gerais

* Manipula `tags` html em:
  * `*.instructure.com/courses/*/assignments/*/submissions/*`
  * `*.instructure.com/courses/*/quizzes/*`
* Adiciona um botão para anonimizar testes e provas

***
## Instalação e Utilização

A utilização da extensão é bem simples. Basta instalar, navegar até o teste ou prova e acionar o **botão verde** para anonimizar o gabarito, deixando apenas as questões.

> ### Via Testes
> ![Via Testes/Provas](https://raw.githubusercontent.com/println/chrome-extension-bypass/master/.doc/via-testes.png)

> ### Via Notas
> ![Via Notas](https://raw.githubusercontent.com/println/chrome-extension-bypass/master/.doc/via-notas.png)

### Como instalar
A instalação recomendada é via modo desenvolvedor, mas é possível usar o binário do Chrome ou Firefox.

#### Usar em modo desenvolvedor
1. Obtenha o código desse repositório
   1. Via [download](https://github.com/println/chrome-extension-bypass/archive/refs/heads/master.zip) 
   2. Ou faça um `git clone` 
2. Abra o navegador
   1. No Chrome
      1. `Menu > Mais Ferramentas > Extensões`
      2. Habilite o `development mode`, no canto superior esquerdo
      3. Clique em `Carregar sem compactação`
      4. Selecione a pasta com o código e dê `Abrir`
   2. No Firefox
      1. Digite na barra de endereços: `about:debugging`
      2. Clique em `Este Firefox`
      3. Em seguida, clique no botão `Carregar extensão temporária`
      4. Selecione a pasta com o código e dê `Abrir`

> A extensão do Firefox é temporária, removida após fechar o navegador 

#### Usar via "binário"
Siga para a seção de [releases do github](https://github.com/println/chrome-extension-bypass/releases) e escolha a última versão da extensão do Firefox(.xpi) ou Chrome(.crx).

> A extensão do Chrome deve ser instalada como uma `external extension`
