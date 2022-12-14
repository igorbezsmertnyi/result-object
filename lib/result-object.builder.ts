import { ResultObject } from './result-object.type'

export class SuccessResult<Data> {
  public error = undefined
  public ok = true

  constructor(public data: Data) {}
}

export class FailedResult<Data = undefined, Err = Error> {
  public ok = false

  constructor(public error: Err, public data: Data | undefined) {}
}

export class Result {
  static success<Data>(data: Data): ResultObject<Data> {
    return new SuccessResult<Data>(data)
  }

  static failed<Data = undefined, Err = Error>(
    error: Err,
    data?: Data
  ): ResultObject<Data, Err> {
    return new FailedResult<Data, Err>(error, data)
  }
}
