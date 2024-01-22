export const enum PRIORITY {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

export type Todo = {
    id: number;
    title: string;
    description?: string;
    priority :PRIORITY
    completed: boolean
    createdAt: Date;
}