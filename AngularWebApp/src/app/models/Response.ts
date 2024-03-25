export interface Response<T> {
    dados: T;
    mensangem: string;
    sucesso: boolean;
}