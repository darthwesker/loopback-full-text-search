# loopback-full-text-search
Add Full-text search when using the `q` parameter in the `where` clause for [Loopback 3](https://loopback.io/).

## Installation

```bash
npm install --save loopback-full-text-search
```

## Usage

Modify your server/component-config.json to include this module and configure the models and field you want to include in the Full-text search:

```json
"loopback-full-text-search": {
  "models": [
    {
      "name": "book",
      "fields": ["name", "description"]
    },
    {
      "name": "user",
      "fields": ["name"]
    }
  ]
}
```

And the make the Full-text search using the `q` parameter in the `where` clause:
```json
{ 
  "where": {
    "q": "loopback" 
  }
}
```

## react-admin

You can use loopback-full-text-search with [react-admin](https://github.com/marmelab/react-admin).

```js
// in src/books.js
const BookFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const BookList = (props) => (
  <List {...props} filters={<BookFilter />} >
    ...
  </List>
);
```

Don't forget to check [loopback-content-range](https://github.com/darthwesker/loopback-content-range) and [react-admin-loopback](https://github.com/darthwesker/react-admin-loopback).

## License

This library is licensed under the [MIT Licence](LICENSE).