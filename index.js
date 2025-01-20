const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0];


fs.readFile('./task.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }
  try {
    const allTasks = JSON.parse(data);

    switch (command) {
        case 'add':
            if (!args[1]) {
                console.error('Error: Debes proporcionar una descripción para la tarea.');
                process.exit(1);
            }

            let newTask = {
                description: `${args[1]}`,
                status: 'todo',
                createdAt: `${new Date().toLocaleString()}`,
                updatedAt: null
            };

            const newId = allTasks.length > 0 ? Math.max(...allTasks.map(task => task.id)) + 1 : 1;
            newTask = {id:newId,...newTask};
            allTasks.push(newTask);

            fs.writeFile('./task.json', JSON.stringify(allTasks, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return;
            }
            console.log('Tarea añadida con éxito:', newTask);
            });
            break;
        case 'update':
            if (args.length!==3) {
                console.error('Error: No has proporcionado los suficientes argumentos');
                process.exit(1);
            }

            allTasks.map((task)=>{
                if(task.id===parseInt(args[1])){
                    task.description=args[2];
                    task.updatedAt=`${new Date().toLocaleString()}`;
                    console.log('Tarea actualizada con éxito:', task);
                }
            });
            fs.writeFile('./task.json', JSON.stringify(allTasks, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
            });
            break;
        case 'delete':
            if (!args[1]) {
                console.error('Error: Debes proporcionar un id.');
                process.exit(1);
            }

            if(allTasks.length === 0){
                console.log('No hay ninguna tarea para eliminar.');
            }

            allTasks.map((task)=>{
                if(task.id===parseInt(args[1])){
                    const index = allTasks.indexOf(task);
                    allTasks.splice(index, 1);
                    console.log('Tarea eliminada correctamente.')
                }
            });
            fs.writeFile('./task.json', JSON.stringify(allTasks, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
            });

            break;
        case 'mark-in-progress':
            if (!args[1]) {
                console.error('Error: Debes proporcionar un id.');
                process.exit(1);
            }

            allTasks.map((task)=>{
                if(task.id===parseInt(args[1])){
                    task.status='in-progress';
                    task.updatedAt=`${new Date().toLocaleString()}`;
                    console.log('El estado de la tarea fue actualizado')
                }
            });
            fs.writeFile('./task.json', JSON.stringify(allTasks, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
            });
            break;
        case 'mark-done':
            if (!args[1]) {
                console.error('Error: Debes proporcionar un id.');
                process.exit(1);
            }

            allTasks.map((task)=>{
                if(task.id===parseInt(args[1])){
                    task.status='done';
                    task.updatedAt=`${new Date().toLocaleString()}`;
                    console.log('El estado de la tarea fue actualizado')
                }
            });
            fs.writeFile('./task.json', JSON.stringify(allTasks, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
            });
            break;
        case 'list':
            switch (args[1]) {
                case 'done':
                    allTasks.map((task)=>{
                        if(task.status==='done'){
                            const id = task.id;
                            const description = task.description;
                            console.log(id+': '+description);
                        }
                    });
                    break;
                case 'in-progress':
                    allTasks.map((task)=>{
                        if(task.status==='in-progress'){
                            const id = task.id;
                            const description = task.description;
                            console.log(id+': '+description);
                        }
                    });
                    break;
                case 'todo':
                    allTasks.map((task)=>{
                        if(task.status==='todo'){
                            const id = task.id;
                            const description = task.description;
                            console.log(id+': '+description);
                        }
                    });
                    break;
                default:
                    allTasks.map((task)=>{
                        const id = task.id;
                        const description = task.description;
                        console.log(id+': '+description);
                    });
                    break;
            }
            break;
        default:
            break;
    }

  } catch (parseErr) {
    console.error('Error al analizar el archivo JSON:', parseErr);
  }
});
