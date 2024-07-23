import { DataSource } from "typeorm"
import { Todo } from "../entities/todo.entity";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Bablobeto",
    database: "shr_crud_project",
    synchronize: true,  // This will auto-create the table
    entities: [
        Todo
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;
