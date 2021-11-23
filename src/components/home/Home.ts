import Api from '@/api/index';
import { Component, Vue } from 'vue-property-decorator';
import Modal from '../modal/Modal.vue';

@Component({
    components: {
        Modal,
    },
})

export default class Home extends Vue {
    private todo = '';
    private todoList: string[] = [];
    private modal = false;

    // private init() {
    //     const result = new Api();
    //     const todo = result.getAllTodo();
    //     console.log('tst : ' + todo);
    // }

    private addTodo()  {
        const result = new Api();
        const todo = result.getAllTodo();
        console.log('tst : ' + todo);
        this.todoList.push(this.todo);
        this.todo = '';
        this.modal = false;
    }

    private remove(index: number) {
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
