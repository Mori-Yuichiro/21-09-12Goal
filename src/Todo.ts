import { select } from './model/mysql';

export class Todo {
    public id = 0;
    public todo: string;
    constructor(todo: string) {
        this.todo = todo;
    }
}

export interface TodoRepository {
    find(): Promise<Todo|null>;
}

export class TodoDAO implements TodoRepository {
    public async find(): Promise<Todo|null> {
        const selectQuery = 'SELECT * FROM todos';
        const rows = await select(selectQuery);
        if (rows.length === 0) {
            return null;
        }
        const t = new Todo(rows[0].todo);
        t.id = rows[0].id;
        return t;
    }
}