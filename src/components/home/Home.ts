import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '../modal/Modal.vue';

@Component({
    components: {
        Modal,
    },
})

export default class Home extends Vue {
    private todo = '';
    private todoList:string[] = [];
    private modal = false;

    private addTodo()  {
        console.log(this.todo);
        this.todoList.push(this.todo);
        console.log(this.todoList);
        this.todo = '';
        this.modal = false;
    }

    private remove(index: number) {
        console.log('remove');
        this.todoList.splice(index, 1);
    }
    
    // Modal
    private openDialog() {
        this.modal = true;
        console.log(this.modal);
    }

    private closeDialog() {
        this.modal = false;
    }
}