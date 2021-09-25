import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
    // create modal
    private todo = '';
    private todoList:string[] = [];

    private addTodo()  {
        console.log(this.todo);
        this.todoList.push(this.todo);
        console.log(this.todoList);
        this.todo = '';
    }

    private remove(index: number) {
        console.log('remove');
        this.todoList.splice(index, 1);
    }

    
}
