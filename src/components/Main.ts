import { Component, Vue } from 'vue-property-decorator';
import ModalDialog from './ModalDialog';

@Component({
    components: {
        ModalDialog,
    }
})

@Component
export default class Main extends Vue {
    private todo = '';
    private todoList:string[] = [];
    private modal = false;

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

    // Modal
    private openDialog() {
        this.modal = true;
    }

    private closeDialog() {
        this.modal = false;
    }
}
