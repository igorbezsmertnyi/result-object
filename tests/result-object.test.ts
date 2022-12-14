import { Result, SuccessResult, FailedResult } from "../lib"

describe("Method: Success", () => {
  test("returns `SuccessResult` object with data", () => {
    const result = Result.success("Some data...")

    expect(result).toEqual(new SuccessResult("Some data..."))
  })

  test("object fields match to expected values", () => {
    const result = Result.success("Some data...")

    expect(result.data).toEqual("Some data...")
    expect(result.ok).toBeTruthy()
    expect(result.error).toBeUndefined()
  })
})

describe("Method: Failed", () => {
  test("returns `FailedResult` object with data", () => {
    const errorMock = new Error("Luke, I'm your error")
    const data = { test: "Test" }
    const result = Result.failed(errorMock, data)

    expect(result).toEqual(new FailedResult(errorMock, data))
  })

  test("object fields match to expected values", () => {
    const errorMock = new Error("Luke, I'm your error")
    const result = Result.failed(errorMock)

    expect(result.data).toBeUndefined()
    expect(result.ok).toBeFalsy()
    expect(result.error).toEqual(errorMock)
  })
})