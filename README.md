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

## License

This library is licensed under the [MIT Licence](LICENSE).