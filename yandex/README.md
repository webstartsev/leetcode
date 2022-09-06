# Yandex Контест

## Чтение и отправка результата через файл

```
const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const n = fileContent.toString();
const result = fn(n);

fs.writeFileSync("output.txt", result.toString());
```
