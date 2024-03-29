import React from "react";

export type IComponentProps<T extends React.FC<any>> = T extends React.FC<
  infer O
>
  ? O
  : never;
  

  export type Func<T extends any[] = any[], U extends any = any> = (...args: T) => U;

export type VoidFunc<T extends any[]> = Func<T, void>

// https://stackoverflow.com/questions/60872063/enforce-typescript-object-has-exactly-one-key-from-a-set
export type ExactlyOneKey<K extends keyof any, V, KK extends keyof any = K> = {
    [P in K]: { [Q in P]: V } &{ [Q in Exclude<KK, P>]?: undefined } extends infer O ? { [Q in keyof O]: O[Q] }: never;
}[K];

export type ExactlyAllKey<K extends keyof any, V> = {
    [P in K]: V;
};

export type ExactlyOneOrAllKey<K extends keyof any, V> =
    | ExactlyOneKey<K, V>
    | ExactlyAllKey<K, V>;


export type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K> }> = Partial<T> & Required<U[keyof U]>;

export type ExactlyOne<T, U = {[K in keyof T]: Pick<T, K> }> =  Required<U[keyof U]>;

export type ExactlyOrWithPromise<K> = K | Promise<K>;

export type ExactlyOrArray<T> = T | T[]

export type ExcludeProp<
  T extends { [key: string | symbol | number]: any },
  U extends string | symbol | number
> = {
  [Q in Exclude<keyof T, U>]: T[Q];
};

export type StrKeys<T> = Extract<Keys<T>, string>

export type Keys<T> = {
    [K in keyof T]: K
}[keyof T]

export type Values<T> = {
    [K in keyof T]: T[K]
}[keyof T]

export type PropListener<T> = {[K in StrKeys<T> as `on${Capitalize<K>}`]? : (...args: any[]) => void}

export type Prop<T> =`on${Capitalize<StrKeys<T>>}`

export type FuncParams<T extends (...args: any[]) => any> = T extends (... args: infer O) => any ? O : never;

export type FuncReturn<T extends (...args: any[]) => any> = T extends (... args: any[]) => infer O ? O : never;

export type ArrType<T> = T extends [...args: infer O] ? O[number] : never;


export type FuncType<T extends Func> = Func<FuncParams<T>,ReturnType<T>>

export type AddAsyncType<T extends Func> = Func<FuncParams<T>, Promise<ReturnType<T>>>

export type Constructor<T extends any = any, A extends any[] = any[]> = {
    new (...args: A): T;
  };

export type ConstructorParamsType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: infer O) => any ? O : never

export type ConstructorReturnType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: any[]) => infer O ? O : never;

export type PromiseReturnType<T> = T extends Func<any[], Promise<infer O>> ? O : never; 

// https://stackoverflow.com/questions/21224922/is-there-a-way-to-represent-a-non-negative-integer-in-typescript-so-that-the-com
export type NonNegativeInteger<T extends number> =
 `${T}` extends `-${number}` | `${number}.${number}`
            ? never 
            : T;

// TODO: Move this to the bigger types library, tuchi the library and publish. 
// TODO: There should be a more general way for doing this combo for unlimited number of text
export type TwoStrCombo<T extends string, U extends string> = T | U | `${T} ${U}` | `${U} ${T}`;

export type ThreeStrCombo<T extends string, U extends string, V extends string> = T | U | V |  `${T} ${U}` | `${T} ${V}` | `${U} ${T}`| `${U} ${V}`  |`${V} ${T}`  |`${V} ${U}`  |   `${T} ${V} ${U}` | `${T} ${U} ${V}` | `${U} ${V} ${T}` | `${U} ${T} ${V}`  | `${V} ${T} ${U}` | `${V} ${U} ${T}`;

// export type ShallowPartial<T, U extends string> = {
//     [K in keyof T]: CC<T, U> extends {} ? {K?: T[K]} : {K: T[K]}
// }[keyof T]

// type C  = {df: string, g: string}

// type CC<T, U extends string> = U extends keyof T ? T : never 

// const cc: CC<C, 'df'> = {df: 'sd', g:'f'}

// const c: ShallowPartial<C, 'df'> = {df: 's'}