import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';
import Main from './components/Main.vue';

@Component({
    components: {
        Main,
        Header,
    },
})

export default class App extends Vue {
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
