import {Todo} from "@/type/Todo";

export type UserCredentials = {
    email: string;
    password: string;
}

export type SignupInformation = UserCredentials & {
    nickname: string;
    passwordConfirm: string;
}
type Level = {
    id: number;
    level: number;
    maxExperience: number;
}
export type UserInformation = {
    id: number;
    email: string;
    nickname: string;
    levelId: number;
    curExperience: number;
    todos: Todo[]
}
