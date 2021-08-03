## Install mongodb

Refer to Mongodb documentation : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Clone this package 
```
$ git clone https://github.com/izzianyramli/lighthouse-backend.git
$ cd lighthouse-backend
```

## Install this package
```
$ npm install
```

## Run
After installation is compeleted, run 
```
$ node .
```

Backend server is up on port 1337 `(localhost:1337)`

### Routes
```
POST /login (for login authentication)
GET /count/project (projects total cost)
GET /count/company-source (total of source of company registration)
GET /count/company-location (total of each company location)
```

### Models
```
/Account
/Company
/Lighthouse
/Project
/ProjectUpdate
```