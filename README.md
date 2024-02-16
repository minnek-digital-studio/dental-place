# WordPress Template

# Install

Install the project dependencies:

```bash
composer install
npm install
```

# Docker

Before start the docker command be sure to create the `.env`, just rename the `.env.example` with the corresponding information.

Up the containers:

```bash
docker compose --env-file=./.env up -d
```

or

```bash
npm run docker:up
```

Down the containers:

```bash
docker compose --env-file=./.env down
```

or

```bash
npm run docker:down
```

# Themes

To work with a custom theme create the theme in the directory `themes` and add this line to he `.gitignore` file:

```
!/themes/mytheme
```

# Plugins

To work with a custom plugins, or a 3rd party required for the development, create the plugin in the directory `plugins` and add this line to he `.gitignore` file:

```
!/plugins/myplugin
!/plugins/3rdparty-plugin
```
