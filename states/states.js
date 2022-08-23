
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, "..", "db","database.sqlite");
const db = new sqlite3.Database(dbPath);

const callback = (err) => {
    if(err){
        console.error(err);
    };
};


const createRegionsTable = async () => {
const createRegion = `CREATE TABLE regions (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) NOT NULL UNIQUE, initials VARCHAR(2) NOT NULL UNIQUE)`;
db.run(createRegion, callback);
};

const createStatesTable = async () => {
const createStates = `CREATE TABLE states (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) NOT NULL UNIQUE, initials VARCHAR(2) NOT NULL UNIQUE, region VARCHAR(100) NOT NULL, region_id INTEGER NOT NULL, CONSTRAINT FK_Region_State FOREIGN KEY (region_id) REFERENCES regions(id))`;
db.run(createStates, callback);
};

const insertRegionsInfo = async () => {
db.serialize(() => {
const info = db.prepare(`INSERT INTO regions (name, initials) VALUES (?, ?)`);
info.run('Norte','N'),
info.run('Nordeste','NE'),
info.run('Sudeste','SE'),
info.run('Sul','S'),
info.run('Centro-Oeste','CO'),
info.finalize()
 }
)};

const insertStatesInfo = async () => {
db.serialize(() => {
const info = db.prepare(`INSERT INTO states (name, initials, region, region_id) VALUES (?, ?, ?, ?)`);
info.run('Rondônia','RO','Norte','1'),
info.run('Acre','AC','Norte','1'),
info.run('Amazonas','AM','Norte','1'),
info.run('Roraima','RR','Norte','1'),
info.run('Pará','PA','Norte','1'),
info.run('Amapá','AP','Norte','1'),
info.run('Tocantins','TO','Norte','1'),
info.run('Maranhão','MA','Nordeste','2'),
info.run('Piauí','PI','Nordeste','2'),
info.run('Ceará', 'CE','Nordeste','2'),
info.run('Rio Grande do Norte','RN','Nordeste','2'),
info.run('Paraíba','PB','Nordeste','2'),
info.run('Pernambuco','PE','Nordeste','2'),
info.run('Alagoas','AL','Nordeste','2'),
info.run('Sergipe', 'SE','Nordeste','2'),
info.run('Bahia','BA', 'Nordeste','2'),
info.run('Minas Gerais','MG','Sudeste','3'),
info.run('Espírito Santo','ES','Sudeste','3'),
info.run('Rio de Janeiro', 'RJ','Sudeste','3'),
info.run('São Paulo','SP','Sudeste','3'),
info.run('Paraná','PR','Sul','4'),
info.run('Santa Catarina','SC','Sul','4'),
info.run('Rio Grande do Sul','RS','Sul','4'),
info.run('Mato Grosso do Sul','MS','Centro-Oeste','5'),
info.run('Mato Grosso','MT','Centro-Oeste','5'),
info.run('Goiás','GO','Centro-Oeste','5'),
info.run('Distrito Federal','DF','Centro-Oeste','5');
info.finalize();
}
)};

module.exports = {
    createStatesTable,
    createRegionsTable,
    insertRegionsInfo,
    insertStatesInfo,
};