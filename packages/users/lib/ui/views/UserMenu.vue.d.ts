import Vue from "vue";
import { UI } from '@startupway/main/lib/ui';
import { SnackBarOptions, SimpleMenuOptions } from "@startupway/menu/lib/ui";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    ui: UI;
    options: SimpleMenuOptions;
    snackOptions: SnackBarOptions;
    snackbar: boolean;
}, {
    click(id: string): Promise<void>;
    update(prop: boolean): void;
}, {
    user: any;
}, Record<never, any>>;
export default _default;
//# sourceMappingURL=UserMenu.vue?rollup-plugin-vue=script.d.ts.map