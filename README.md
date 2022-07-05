This is a simple CRUD project.

## Getting Started

run the development server:

```bash
npm run dev
# and
npx prisma studio
```

## Create a docker postgres container

Server [http://localhost:3000](http://localhost:3000) with your browser to see the result,
With prisma you can see the database schema.

## Creating HTTP requests

GET

```
[
	{
		"id": 21,
		"name": "Testing new user",
		"login": "test",
		"password": "1234"
	}
]
```

POST

```
{
	"name": "Testing new user",
	"login":"test",
	"password":"1234"
}
```

PUT

```
#if user and id exist, will be updated.

{
	"id":21,
	"name":"New user",
	"login":"NewLogin",
	"password":"123"
}
```

DELETE

```
#Simple delete with id only
{
	"id":21
}
```
