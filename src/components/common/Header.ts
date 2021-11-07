import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop()
    private selectedPage = '';

    private logout() {
        this.$emit('logout');
    }
}
