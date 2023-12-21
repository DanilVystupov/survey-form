# Проект "Servey form с использованием REST API, Vue 3 (Composition API), TypeScript и Pinia"

В качестве фреймворка использовал Vue.js с поддержкой TypeScript. Проект полностью адаптивен и представлять собой набор UI компонентов. Функционально доступна возможность пройти тестовый опрос и получить страницу с результатами опросов.

В рамках приложения текущая страница и результаты пройденных опросов сохраняются в стор контейнер (localStorage). На странице результатов представлена возможность сбросить текущее состояние опроса в исходное. Доступно пять вопросов. Для имитации отправки данных использовал асинхронные моки REST API на сервер https://jsonplaceholder.typicode.com/posts.

## Технологии

- Vue 3 (Composition API), TypeScript, Pinia
- Стилизация: SCSS
- Развертывание на Netlify
- Посмотреть [по клику](https://nimble-smakager-68797b.netlify.app/) 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
