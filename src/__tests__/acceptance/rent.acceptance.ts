import {Client} from '@loopback/testlab';
import {ServiceLayerApplication} from '../..';
import {setupApplication} from './test-helper';

describe('Rent', () => {
    let app: ServiceLayerApplication;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('Should rent a movie', async () => {
        await client
            .post('/4all/movie-rental/rent')
            .auth('me@rsilveira.dev', 'testing')
            .send(
                {
                    "status": "RENTERED",
                    "clientId": 1,
                    "movieCopyId": 2
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
            .expect((res) => {
                res.body.status = "RENTERED";
                res.body.clientId = 1;
                res.body.movieCopyId = 2;
            })
    });

    it('Should list of rents', async () => {
        await client
            .get('/4all/movie-rental/rents')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    it('Rent detail', async () => {
        await client
            .get('/4all/movie-rental/rent/1')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });
});
