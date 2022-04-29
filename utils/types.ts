// 이 파일은 Utility 타입, global type declaration 등 프로젝트 전반에 쓰이는 타입을 정의하기 위한 파일입니다

export type Nullable<T = any> = T | null | undefined;

export type Optional<T = any> = T | undefined;
