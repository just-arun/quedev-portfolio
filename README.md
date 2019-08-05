# quedev-portfolio

## INIT

change the name of `vuepress` folder to `.vuepress`

## Inside an Existing Project

If you have an existing project and would like to keep documentation inside the project, you should install VuePress as a local dependency. This setup also allows you to use CI or services like Netlify for automatic deployment on push.

```sh
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```


## to start a developement server

```sh
vuepress dev
```
## to generate a static sight
```sh
vuepress build
```

