/* TODO 

Criar um Script SQL que cria uma tabela de ESTADOS (ou states) com as colunas id e name;
Criar um script SQL que crie as inserções dos 26 estados;
Livre para ir além;

*/

const path = require('path')
const pathToFunctions = path.join(__dirname, "states", "states.js")
const { createStatesTable, createRegionsTable, insertStatesInfo, insertRegionsInfo } = require(pathToFunctions);

async function main(){
await createRegionsTable(),
await createStatesTable();
await insertRegionsInfo();
await insertStatesInfo();
};

main();

