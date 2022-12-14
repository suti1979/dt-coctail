import { test, expect, describe } from "@jest/globals"
import request from "supertest"
import app from "../app"
import axios from "axios"
import createMockAdapter from "axios-mock-adapter"
import { API_DATA, RES_DATA } from "./mockdata"

const mock = new createMockAdapter(axios)
mock.onGet().reply(200, API_DATA) // mock api response

describe("Mock test", () => {
  test("GET /api/coctails MOCK ", async () => {
    const res = await request(app).get("/api/coctails")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body).toEqual(RES_DATA) // mock parsed data from our backend
  })

  test("GET /api/coctails MOCK FAIL", async () => {
    mock.reset()
    const res = await request(app).get("/api/coctails")
    expect(res.statusCode).toBe(200)
    expect(res.body.error).toBe("Cannot get data...sorry: ")
  })
})

//npx jest --coverage
