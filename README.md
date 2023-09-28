# Design System

Design system básico feito para exercícios, com o auxílio do [Tachyons](http://tachyons.io/).

## Primeiros passos

Para instalar o pacote em sua máquina, digite o comando abaixo:

### `npm install`

## Funcionalidades gerais

### Estilos

Comando: variation

* Primary
* Secondary
* Dark
### Tamanhos

Comando: `size` (altera a largura do elemento), `fSize` (altera o tamanho da fonte)

* Big
* Medium
* Small

### Button
Exemplo:

### `<Button variation="secondary" size="big">Click me</Button>`

### Select
Para alterar o texto da label do select, utilize o comando `labelText`

Exemplo:

### ` <Select variation="secondary" fSize="big" size="big" labelText="Testando">`
### `    <option value="ola">ola</option> `
### ` </Select> `

### Flex
Faz a função de uma div com display flex
Comandos:
`direction` (flex-direction)
* row
* column

`align` (align-items)
* center
* start
* end

`justify` (justify-content)
* center
* start
* end
* around (space-around)
* between (space-between)
* evenly (space-evenly)

Exemplo: 
### ` <Flex direction='row' align='center' justify='around'> `
###        `(Insira o que quiser aqui) `
### ` </Flex> `
