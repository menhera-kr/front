export type KeyOf<T> = Exclude<keyof T, number | symbol>;

export interface Place {
    기관명: string;
    기관구분: string;
    주소: {
        위도: string;
        경도: string;
        area1: string;
        area2: string;
        area3: string;
    };
    홈페이지: string;
    distance: number;
}
