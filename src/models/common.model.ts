export enum ResponseType {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
}

export type FunctionResponse<T> =
	| [ResponseType.ERROR, Error]
	| [ResponseType.SUCCESS, T];
