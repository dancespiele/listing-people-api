import * as Lab from 'lab';
import * as Code from 'code';
import * as request from 'request-promise';
import {addPerson, getPerson, delPerson} from './requests';
import {PyriteConnect} from 'pyrite-connect';
import {EmitterPlugin} from 'pyrite-connect-emitter';

const lab = Lab.script();

export { lab };

lab.experiment('People', () => {
  let id: string;
  
  lab.test('add person have to be success', async () => {
    const res = await request(addPerson);
    id = res.body._id;
    Code.expect(res.statusCode).to.be.equal(200);
    Code.expect(res.body.name).to.be.equal("camion");
  });
  lab.test('get person added last time', async () =>{
    const filter = {_id: id};
    getPerson.uri = `${getPerson.uri}?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const res = await request(getPerson);
    Code.expect(res.statusCode).to.be.equal(200);
    Code.expect(res.body).to.include('camion');
  })
  lab.test('delete person have to be success', async () => {
    delPerson.uri = `${delPerson.uri}/${id}`;
    const res = await request(delPerson);
    Code.expect(res.statusCode).to.be.equal(200);
  });
});