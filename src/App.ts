import { Component, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';
import Home from './components/home/Home.vue';
// import Main from './components/Main.vue';
import Register from './components/register/Register.vue';

@Component({
    components: {
        // Main,
        Header,
        Home,
        Register,
    },
})

export default class App extends Vue {
    // private todo = '';
    // private todoList:string[] = [];
    // private modal = false;
    private changePageList = ['Register', 'Login', 'Home'];
    private selectedPage = this.changePageList[0];

    // private addTodo()  {
    //     console.log(this.todo);
    //     this.todoList.push(this.todo);
    //     console.log(this.todoList);
    //     this.todo = '';
    //     this.modal = false;
    // }

    // private remove(index: number) {
    //     console.log('remove');
    //     this.todoList.splice(index, 1);
    // }
    
    // // Modal
    // private openDialog() {
    //     this.modal = true;
    //     console.log(this.modal);
    // }

    // private closeDialog() {
    //     this.modal = false;
    // }

    private showPageNumber() {
        this.selectedPage = this.changePageList[2];
        console.log(this.selectedPage);
    }
}
