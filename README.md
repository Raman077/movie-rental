[![Build Status](https://travis-ci.org/rsilveira65/movie-rental.svg?branch=master)](https://travis-ci.org/rsilveira65/movie-rental)

<h4 align="center">
  Movie Rental
</h4>
<br>

## Usage

With [npm](https://npmjs.org/) installed, run

    $ npm install

Make sure that you have [docker](https://npmjs.org/) and [docker-compose](https://npmjs.org/) properly installed.

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

## Tests

Run `npm test` from the root folder.
