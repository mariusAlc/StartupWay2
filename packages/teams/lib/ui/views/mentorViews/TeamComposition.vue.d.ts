import Vue from "vue";
import { Team, VisualUser } from "../../../common";
import { User, UserTeams } from "@startupway/users/lib/ui";
import { SnackBarOptions } from "@startupway/menu/lib/ui";
import { UI } from '@startupway/main/lib/ui';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    ui: UI;
    emailRules: (((e: string) => true | "You have entered an invalid email address!") | ((f: string) => true | "Filed cannot be empty!"))[];
    userValid: boolean;
    extendedImage: string;
    extendDialog: boolean;
    roles: string[];
    teams: Team[];
    team: string;
    location: string;
    users: User[] | (User & UserTeams)[];
    allUsers: User[] | (User & UserTeams)[];
    teamId: string;
    item: User & UserTeams & VisualUser;
    dialog: boolean;
    universities: string[];
    search2: string;
    headers2: ({
        text: string;
        align: string;
        sortable: boolean;
        value: string;
    } | {
        text: string;
        value: string;
        align?: undefined;
        sortable?: undefined;
    })[];
    remove: boolean;
    add: boolean;
    addUsersDialog: boolean;
    acceptDialog: boolean;
    createNewUserDialog: boolean;
    createFirstName: string;
    createLastName: string;
    createEmail: string;
    createRole: string;
    toRemove: (User & UserTeams)[];
    toAdd: never[];
    loading: boolean;
    loadingPage: boolean;
    toDel: User & UserTeams;
    snackOptions: SnackBarOptions;
    snackbar: boolean;
}, {
    extendImage(image: string): void;
    hasUser(user: User & UserTeams): boolean;
    getUsers(teamId: string): Promise<boolean>;
    getAllUsers(): Promise<boolean>;
    modifyUsers(users: (User[] | (User & UserTeams)[])): Promise<(User[] | (User & UserTeams)[])>;
    openLink(link: string): void;
    updateUserInfo(): Promise<void>;
    openDialog(user: (User & UserTeams & VisualUser)): void;
    exitDialog(): void;
    accept(type: string): void;
    deny(): void;
    createUser(): Promise<void>;
    addUsers(): Promise<void>;
    removeUsers(): Promise<void>;
    getUserImage(avatar: string, userId: string): Promise<string>;
    update(prop: boolean): void;
    refreshLists(): Promise<boolean>;
}, {
    user: any;
}, Record<never, any>>;
export default _default;
//# sourceMappingURL=TeamComposition.vue?rollup-plugin-vue=script.d.ts.map