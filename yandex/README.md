# Yandex Контест

## Чтение и отправка результата через файл

```
const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const content = fileContent.toString();
const result = fn(content);

fs.writeFileSync("output.txt", result.toString());
```
