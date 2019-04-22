import {Client} from '@loopback/testlab';
import {ServiceLayerApplication} from '../..';
import {setupApplication} from './test-helper';

describe('Movie Copy', () => {
    let app: ServiceLayerApplication;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('Should create a new movie copy', async () => {
        await client
            .post('/4all/movie-rental/movie-copy')
            .auth('me@rsilveira.dev', 'testing')
            .send(
                {
                    "movieId": 4
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
    });
});
