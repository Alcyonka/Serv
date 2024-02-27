
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
type User = {
    id: number;
    firstname: string;
    lastname: string;
    passportNum: number;
    INN: number;
    isAdult: boolean;
}

//������ ������� ������� ����� ��������� ���, ������� �������� �������� Keys � ��� ���� ����� ���� number
type NumberOnly<T> = {
    T[P] extends number ? T[P] : never;
}

