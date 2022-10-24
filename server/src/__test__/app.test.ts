
import { describe, expect, test } from "@jest/globals"
import request from "supertest"

import app from "../app"

describe("Test app.ts", () => {
  test("Server runs", async () => {
    const res = await request(app).get("/api/coctails")
    expect(res.statusCode).toBe(200)
  })
})

describe("Test response", () => {
  test("Get exactly 8 coctails", async () => {
    const res = await request(app).get("/api/coctails")
    expect(res.body).toHaveLength(8)
  })
})



