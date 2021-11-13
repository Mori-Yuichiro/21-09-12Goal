import { TodoDAO } from './Todo';

const dao = new TodoDAO();
dao.find().then((r) => {
    console.log('test');
    console.log(r);
});