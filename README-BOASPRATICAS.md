## Boas práticas de código para React

- package.json 
    - deixar tudo separado, em blocos, dependencias de testes, separados por tema/objetivo do pacote

- não usamos HTML no react, o que usamos é JSX
- componentes precisam ser iniciados e criados com letras maíscula 
-  o return com parênteses é normal no javascript quando queremos retornar coisas com mais de uma linha.
- o componente react não pode retornar dois elementos root. Se você quiser retornar dois, alguém precisa ser pai dos dois para que o componente só retorna um elemento.
- também pode-se usar fragment, que é um container vazio com intuito de criar um pai. `<> </>`
- babel repl é um ótimo lugar onde podemos entender como o babel traduz o código jsx para que o browser consiga ler
- o webpack é uma ferramente de build/bundle
- quando rodamos npm run build, perceba que uma pasta chamada build será criada e vai organizar tudo em pastas, static, css, media, js etc.
![how webpack works](../../../../var/folders/lp/dq8n65ys1w120vyl0wd__c600000gn/T/TemporaryItems/NSIRD_screencaptureui_5c70Se/Screen%20Shot%202023-04-10%20at%2010.53.12.png)
- o webpack faz tudo ficar mimificado 
- quando a gente faz deploy a gente faz deploy da pasta build, que é a pasta que é feita o deploy e e tudo que contém o que o browser entende. é como se fosse um tradutor para a linguagem do navegador. A pasta BUILD é a pasta do deploy que será hospedado em algum lugar.
- o state são dados que o componente utuliza (amei essa definição. simples e direta)
- o constructor no react recebe props, sempre.
- ao de `const name = this.state.name` use `const { name } = this.state`. No react, usamos muito a sintaxe de destructuring para acessar dados do state.
- quando queremos que o evento não faça o que ele fazia enteriormente, e queremos aplicar um novo código, usamos o preventDefault. Ele não vai fazer o que ele fazia antes, ele vai fazer o que eu quero que ele faça.
- RENDER é chamado toda vez que mudamos ou atualizamos a página.
- !!!!!! para não precisar usar o BIND do this eu posso mudar as minhas funções para arrow Function
- os métodos life cycle não podem virar arrow function 
- ler sobre PUBLIC CLASS FIELDS
- usar handle no início de métodos
- função de zip: unir dois arrays