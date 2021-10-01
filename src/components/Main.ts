import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

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
