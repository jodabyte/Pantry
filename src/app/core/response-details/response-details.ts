export interface ResponseDetails {
  ok: boolean,
  kind: string,
  message: string
}

export const success = (): ResponseDetails => ({ok: true, kind: '', message: ''});

export const failure = (kind: string, message: string): ResponseDetails => ({ok: false, kind, message});
