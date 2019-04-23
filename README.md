[![Build Status](https://travis-ci.org/rsilveira65/movie-rental.svg?branch=master)](https://travis-ci.org/rsilveira65/movie-rental)

<h4 align="center">
  Movie Rental
</h4>
<br>

## Usage

With [npm](https://npmjs.org/) installed, run

    $ npm install

Make sure that you have [docker](https://www.docker.com) and [docker-compose](https://docs.docker.com/compose/) properly installed.

    $ cd docker-database && docker-compose up -d
    
Start the application by running    

    $ npm start

Server is running at http://127.0.0.1:3000

## REST Routes

- Basic Auth

Here is an example of what the request Auth heder might look like:
`Authorization: Basic dGVzdGluZw==`

- Client Creation
```bash
POST: http://localhost:3000/4all/movie-rental/client
```
Body:
```bash
{
    "name": "Rafael Silveira",
    "email": "me@rsilveira.dev",
    "pass": "testing"
}
```
Response
```bash
{
    "id": 27,
    "name": "Rafael Silveira",
    "email": "rsilveiracc2@gmail.com",
    "pass": "testing",
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Client Update
```bash
PUT: http://localhost:3000/4all/movie-rental/client/{CLIENT_ID}
```
Body:
```bash
{
    "name": "Rafael Oliveira",
    "email": "me@rsilveira.dev",
    "pass": "testing"
}
```
Response
```bash
{
    "id": 27,
    "name": "Rafael Oliveira",
    "email": "rsilveiracc2@gmail.com",
    "pass": "testing",
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Client Detail
```bash
GET: http://localhost:3000/4all/movie-rental/client/{CLIENT_ID}
```

- Client Delete
```bash
DEL: http://localhost:3000/4all/movie-rental/client/{CLIENT_ID}
```
- Client List
```bash
GET: http://localhost:3000/4all/movie-rental/clients
```

Response
```bash
[
    {
      "id": 27,
      "name": "Rafael Oliveira",
      "email": "rsilveiracc2@gmail.com",
      "createdAt": "2019-04-23T00:50:21.405Z"
    },
    {
      "id": 28,
      "name": "Rodrigo Cardoso",
      "email": "rodrogio@gmail.com",
      "createdAt": "2019-04-23T00:50:21.405Z"
    }
]

```

- Movie Create
```bash
POST: http://localhost:3000/4all/movie-rental/movie
```
Body:
```bash
{
    "title": "The Avengers: Endgame",
    "director": "Kevin Feige"
}
```
Response
```bash
{
    "id": 2,
    "title": "The Avengers: Endgame",
    "director": "Kevin Feige"
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Movie Update
```bash
PUT: http://localhost:3000/4all/movie-rental/movie/{MOVIE_ID}
```
Body:
```bash
{
    "title": "The Avengers: Age of Ultron",
    "director": "Kevin"
}
```
Response
```bash
{
    "id": 2,
    "title": "The Avengers: Age of Ultron",
    "director": "Kevin"
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Movie Detail
```bash
GET: http://localhost:3000/4all/movie-rental/movie/{MOVIE_ID}
```
Response
```bash
{
    "id": 2,
    "title": "The Avengers: Age of Ultron",
    "director": "Kevin"
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Movie Delete
```bash
DEL: http://localhost:3000/4all/movie-rental/movie/{MOVIE_ID}
```
- Movie Search
```bash
GET: http://localhost:3000/4all/movie-rental/movies?title=avengers
```
Response
```bash
[
    {
        "id": 2,
        "title": "The Avengers: Age of Ultron",
        "director": "Kevin"
        "createdAt": "2019-04-23T00:50:21.405Z"
    },
    {
          "id": 3,
          "title": "The Avengers: Endgame",
          "director": "Kevin Feige"
          "createdAt": "2019-04-23T00:50:21.405Z"
    }
]

```

Response
```bash
[
    {
      "id": 2,
      "title": "The Avengers: Age of Ultron",
      "director": "Kevin"
      "createdAt": "2019-04-23T00:50:21.405Z"
    },
    {
      "id": 3,
      "title": "The Avengers: Endgame",
      "director": "Kevin"
      "createdAt": "2019-04-23T00:50:21.405Z"
    }
]

```

- Movie Copy Create
```bash
POST: http://localhost:3000/4all/movie-rental/movie-copy
```
Body:
```bash
{
    "movieID": 2
}
```
Response
```bash
{
    "id": 1,
    "movieID": 2
    "status": "AVAILABLE"
}
```

- Movie Copy Update
```bash
PUT: http://localhost:3000/4all/movie-rental/movie-copy/{MOVIE_COPY_ID}
```
Body:
```bash
{
    "movieID": 2
    "status": "RENTED"
}
```
Response
```bash
{
    "id": 2,
    "movieID": 2,
    "status": "RENTED"
}
```

- Movie Copy Detail
```bash
GET: http://localhost:3000/4all/movie-rental/movie-copy/{MOVIE_COPY_ID}
```
Response
```bash
{
    "id": 2,
    "title": "The Avengers: Age of Ultron",
    "director": "Kevin"
    "createdAt": "2019-04-23T00:50:21.405Z"
}
```

- Movie Copy Delete
```bash
DEL: http://localhost:3000/4all/movie-rental/movie-copy/{MOVIE_COPY_ID}
```

- Rent Create
```bash
POST: http://localhost:3000/4all/movie-rental/rent
```
Body:
```bash
{
    "status": "RENTED",
    "clientId": 1,
    "movieCopyId": 2
}
```
Response
```bash
{
    "id": 1,
    "status": "RENTED",
    "clientId": 1,
    "movieCopyId": 2,
    "rentDate": "2019-04-23T00:50:21.405Z"
}
```

- Rent Update
```bash
PUT: http://localhost:3000/4all/movie-rental/rent/{RENT_ID}
```
Body:
```bash
{
    "movieID": 2
    "clientId": 1,
    "status": "AVAILABLE"
}
```
Response
```bash
{
    "id": 2,
    "movieID": 2,
    "clientId": 1,
    "status": "AVAILABLE"
}
```

- Rent Detail
```bash
GET: http://localhost:3000/4all/movie-rental/rent/{RENT_ID}
```
Response
```bash
{
    "id": 2,
    "movieID": 2,
    "clientId": 1,
    "status": "AVAILABLE"
}
```

- Rent List
```bash
GET: http://localhost:3000/4all/movie-rental/rents
```
Response
```bash
[
    {
      "id": 2,
      "movieID": 2,
      "clientId": 1,
      "status": "AVAILABLE"
    },
    {
      "id": 3,
      "movieID": 2,
      "clientId": 3,
      "status": "RENTED"
    }
]

```

## Tests

Run `npm test` from the root folder.
