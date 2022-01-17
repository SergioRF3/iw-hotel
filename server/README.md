# **Instrucciones**

- Antes de ejecutar debemos cargar la base de datos y poblarla mediante los siguientes comandos:

```cmd
  knex migrate:rollback
  knex migrate:latest
  knex seed:run
```
