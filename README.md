# react-redux-mongoDB-todoadd

> A simple todolist app built with React, Redux & MongoDB.

Implement the basics of RESTful API.

## Development

go to `[root dir]/clint/`:

Run

```
npm install
```

After setting your MongoDB Atlas cluster, type following in your `/config/dev.js`:

```js
module.exports = {
  mongoURI:
    'mongodb+srv://{username}:{password}@{database_name}.mongodb.net/todo?retryWrites=true'
};
```

for Local DB `/config/dev.js`:

```js
module.exports = {
  mongoURI: 'mongodb://localhost:27017/todo'
};
```

Run:

```bash
npm i && npm i --prefix client  # install dependencies
npm run dev                     # run the development environment
```
