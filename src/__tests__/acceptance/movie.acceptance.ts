import {Client} from '@loopback/testlab';
import {ServiceLayerApplication} from '../..';
import {setupApplication} from './test-helper';

describe('Movie', () => {
    let app: ServiceLayerApplication;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('Should create a new movie', async () => {
        await client
            .post('/4all/movie-rental/movie')
            .auth('me@rsilveira.dev', 'testing')
            .send(
                {
                    "title": "The Avengers: Endgame",
                    "director": "Kevin Feige"
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
            .expect((res) => {
                res.body.title = "The Avengers: Endgame";
                res.body.director = "Kevin Feige"
            })
    });

    it('Should list movies', async () => {
        await client
            .get('/4all/movie-rental/movies')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    it('Movie detail', async () => {
        await client
            .get('/4all/movie-rental/movie/4')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    // it('Delete movie', async () => {
    //     await client
    //         .del('/4all/movie-rental/movie/5')
    //         .auth('rsilveiracc@gmail.com', 'testing2')
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    // });

    it('Update movie', async () => {
        await client
            .put('/4all/movie-rental/movie/4')
            .auth('me@rsilveira.dev', 'testing')
            .send(
                {
                    "title": "The Avengers: Age of Ultron",
                    "director": "Kevin Feige"
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
    });
});
