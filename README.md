# Challenge 05 - Fullstack Web Development - Kelas 1 - Kampus Merdeka x Binar Academy

## 🚚 DELIVERY

```
1. Membuat  HTTP Server yang dapat digunakan untuk melakukan manajemen data mobil
- Manajemen data mobil harus dapat dilakukan dengan menggunakan browser, sesuai dengan desain yang tertera
- Manajemen data mobil harus dapat dilakukan melalui REST API (Menggunakan Postman)
- Manajemen data mobil meliputi aksi-aksi berikut : Menambahkan data mobil, Memodifikasi data mobil yang sudah ada, Menghapus data mobil yang sudah ada, Melihat daftar - mobil yang tersedia di dalam database
- Agar data mobil terpetakan dengan baik dan benar, maka entity relationship diagram harus tertera di dalam source code dari HTTP Server tersebut.
2. Membuat Entity Relationship Diagram dengan menggunakan dbdiagram.io
```

## 📊 Design

Figma Prototype : [Figma Prototype](https://www.figma.com/proto/H6xTtBW9Kzlf09nYnitvbH/BCR---Car-Management-Dashboard?node-id=18344%3A7128&scaling=scale-down-width&page-id=18343%3A5831&starting-point-node-id=18344%3A7128&hide-ui=1)<br>
Figma Project : [Figma Project](https://www.figma.com/file/H6xTtBW9Kzlf09nYnitvbH/BCR---Car-Management-Dashboard?node-id=18344%3A7128)

## ✨ Overview

```
- Dapat membuat sebuah HTTP Server dengan menggunakan Express.js.
- Dapat membuat sebuah HTTP Server sesuai dengan kaidah RESTful API.
- Dapat menggunakan Database Management System untuk membuat tabel, memodifikasi tabel, dan melakukan operasi CRUD.
- Dapat membuat sebuah HTTP Server yang dapat digunakan untuk melakukan operasi CRUD ke dalam Database melalui HTTP Request.
```

## 🔎 ERD (Entity Relationship Diagram)

![image](/public/images/ERD.jpg)

## 📦 Package

1. **List Package**

```
    body-parser
    cors
    dotenv
    ejs
    express
    express-ejs-layouts
    express-fileupload
    fastest-validator
    method-override
    mysql2
    nodemon
    sequelize
```

2. Installation

```
  npm init -y
  npm install body-parser cors dotenv ejs express express-ejs-layouts express-fileupload fastest-validator method-override mysql2 nodemon sequelize
```

## ✨ Route Web

- GET http://localhost:3000/cars/list
- POST http://localhost:3000/cars/add
- PUT http://localhost:3000/cars/edit/:id

## 🔥 Route API

```
- List Car    : http://localhost:3000/cars/
- Add car    : http://localhost:3000/cars/add
- Update Car  : http://localhost:3000/edit/:id
- Delete Car  : http://localhost:3000/cars/:id
```
