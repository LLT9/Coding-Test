## Ting Shu Li - Backend Application in Nodejs

### Paths:

1.GET

- return string of Hello World

```
http://localhost:3000/hello
```

2.POST

- return sort array by merge sort algorithm

```
http://localhost:3000/sortnum
```

- req.body in JSON format

```
{
    "array": [5,9,3,2,7]
}
```

3.POST

- use passport local strategy to authenticate admin login or not
- generate JWT token and return it

```
http://localhost:3000/login //db version
http://localhost:3000/login/nodb //no db version
```

- req.body in JSON format

```
{
    "name": "admin",
    "password": "Admin&8181"
}

```

4.GET

- check admin is login or not

```
http://localhost:3000/is_auth
http://localhost:3000/is_auth/nodb
```

---

The differnece of db version and no db version are create MySQL connection or use keyv package to generate valid connection, make sure following steps before starting project.

Please make sure you have installed Node.js, Express and MySQL.

###Install

1. Store this project to local

```
git clone https://github.com/Coli-co/Coding-Test.git
```

2. Switch to folder

```
cd Coding-Test
```

3. Open project

```
code .
```

4. Install npm packages required

```
npm install
```

5. Install seeder

```
npm run seed // db version
npm run seed-nodb // no db version
```

6. Run Server

```
npm run dev
```

- In no db version, please provide valid MYSQL_URI parameter.
- See all parameter configure in .env.example file.
