import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
// import ModalDialog from './ModalDialog';

// @Component({
//     components: {
//         ModalDialog,
//     }
// })

@Component
export default class Main extends Vue {
    @Prop()
    private todo!: string;
    
    private modal = false;

    @Emit()
    private add() {
        return;
    }

    @Emit()
    private close() {
        return;
    }
}
