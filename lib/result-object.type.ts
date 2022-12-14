export interface ResultObject<Data, Err = Error> {
  ok: boolean
  data: Data | undefined
  error: Err | undefined
}
