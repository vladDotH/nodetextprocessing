# Установка зависимостей
`pnpm install`

# Запуск в dev режиме
`pnpm start:dev`

По умолчанию приложение доступно по адресу http://localhost:3334/

Swagger доступен на: http://localhost:3334/docs/

По умолчанию поиск производится в файле `./data/file.txt`

## Пример работы:
Запрос
```
curl -X 'GET' \
  'http://localhost:3334/?limit=10&query=INFO' \
  -H 'accept: application/json'
```
Ответ
```
{
  "num": 238,
  "line": "03/22 08:54:24 INFO   :......router_forward_getOI: Ioctl to query route entry successful"
}
```

# Сборка
`pnpm build:prod`

# Запуск собранного приложения
`pnpm start:prod`
