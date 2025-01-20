Este programa permite listear un serie de tareas. Podemos agregar, editar y eliminar tareasy tambien marcar cada tareas como hecha, en progreso o pendiente.

Para usar el programa debemos:
1. Asegurarnos de que nuestro archivo JSON solo contenga un array []
2. Ejecutamos desde el CLI, usando el siguiente comando: node index.js --method -params ...
  Por ejemplo:
  * Añadir tarea: node index.js add "Cooking"
  * Actualizar tarea: node index.js update 1 "Cooking and eating" (1 es el id de la tarea)
  * Eliminar tarea: node index.jsx delete 1 (1 es el id de la tarea)
  * Marcar tarea en progreso o completada: node index.jsx mark-in-progress 1 || node index.jsx mark-done 1
  * Listar todas las tareas: node index.js list
  * Listar tareas por hacer: node index.js list todo
  * Listar tareas en progreso: node index.js list in-progress
  * Listar tareas completadas: node index.js list done

---------------------------------------------------------------------------------------------------------------

This program allows you to list a series of tasks. You can add, edit and delete tasks, and also mark each task as done, in progress or pending.

To use the program we must:
1. Make sure that our JSON file only contains an array []
2. Run it from the CLI, using the following command: node index.js --method -params ...
For example:
  * Add task: node index.js add "Cooking"
  * Update task: node index.js update 1 "Cooking and eating" (1 is the task id)
  * Delete task: node index.jsx delete 1 (1 is the task id)
  * Mark task in progress or completed: node index.jsx mark-in-progress 1 || node index.jsx mark-done 1
  * List all tasks: node index.js list
  * List tasks to do: node index.js list todo
  * List tasks in progress: node index.js list in-progress
  * List completed tasks: node index.js list done
