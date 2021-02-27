import pg from 'pg';
import fs from 'fs';
import path from 'path';
import type { QlooGraphEntity, QlooGraphEntityData } from './lib/jeffTypes';
import { EntityType, jeffEntityTypeNumber } from './lib/jeffTypes';

function getLinesArray(file : string) : string[] {
  const data = fs.readFileSync(file, 'utf-8');
  const lines = data.split(/\r?\n/);
  return lines;
}

function makeLineObj(line : string) : QlooGraphEntity {
  const lineObject : QlooGraphEntity = JSON.parse(line) as QlooGraphEntity;
  return lineObject;
}

function getTypeId(entityType : string) {
  Object.values(EntityType).forEach((value) => {
    if (entityType === value) {
      const valueString = value;
      const typeId = jeffEntityTypeNumber[valueString];
      return typeId;
    } return '';
  });
}

export function getRestOfData(obj : QlooGraphEntity) : string {
  const cloneWithOutProps : QlooGraphEntityData = { ...obj };
  const prop1 : keyof typeof obj = 'entity_id';
  const prop2 : keyof typeof obj = 'types';
  delete cloneWithOutProps[prop1];
  delete cloneWithOutProps[prop2];
  const cloneWithOutPropsSt = JSON.stringify(cloneWithOutProps);
  return cloneWithOutPropsSt;
}

function jeffQuery() {
  const client = new pg.Client({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
  });

  const fileWithLines = path.resolve('entities.json');

  const lines = getLinesArray(fileWithLines);

  lines.forEach((line : string) => {
    const lineObj = makeLineObj(line);
    const entityId = lineObj.entity_id;
    const entityType = lineObj.types[0];
    const typeId = getTypeId(entityType);
    const restOfTheData = getRestOfData(lineObj);

    const text = 'INSERT INTO entity_data_test(entity_id, type_id, data) VALUES($1, $2, $3) RETURNING *';
    const values = [entityId, typeId, restOfTheData];
    client
      .query(text, values)
      .then((res) => { JSON.stringify(res.rows[0]); })
      .catch((e : Error) => console.error(e.stack));
  });
}

jeffQuery();

// the function below is before refactoring

/* function myQuery() {

  const client = new pg.Client({
    user: '',
    host: '',
    database: '',
    password: '',
    port: ,
  });

  client.connect()

  // read contents of the file
  const data : any = fs.readFileSync(__dirname+"/../entities.json",'utf-8');

  // split the contents by new line
  const lines : any = data.split(/\r?\n/);

  // Do something each line
  lines.forEach((line : any) => {

      //use this object to write to DB
      let obj : QlooGraphEntity = JSON.parse(line);
      let entity_id = obj.entity_id;
      let obj_entity_type = obj.types![0];

      let copy = Object.assign({}, obj)
      let prop1 : keyof typeof obj = 'entity_id';
      delete copy[prop1];
      let prop2 : keyof typeof obj = 'types';
      delete copy[prop2];

      let obj_string = JSON.stringify(copy);

      // Matching types
      Object.values(EntityType).forEach((value) => {
          // if type = type
          if ( obj_entity_type == value ) {
            let valueString = value;
            let type_id = jeffEntityTypeNumber[valueString];

            //query text
            let text =
            'INSERT INTO entity_data_test(entity_id, type_id, data) VALUES($1, $2, $3) RETURNING *'
            let values = [ entity_id, type_id, obj_string ]
            client
              .query(text, values)
              .then((res : any) => {
                return JSON.stringify(res.rows[0])})
              .catch((e : Error) => console.error(e.stack));
          }
      });
  });
};

myQuery(); */
