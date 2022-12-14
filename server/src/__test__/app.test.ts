import { describe, expect, test, jest } from "@jest/globals"
import request from "supertest"
import app from "../app"

describe("Test app.ts", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })

  test("GET / default message", async () => {
    const res = await request(app).get("/")
    expect(res.text).toBe("These are not the droids you're looking for...")
  })
})

describe("Test coctail endpoint", () => {
  test("GET /api/coctails", (done) => {
    request(app)
      .get("/api/coctails")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })

  //AXIOS REAL
  test("GET /api/coctails REAL API ", async () => {
    const res = await request(app).get("/api/coctails")
    expect(res.body.length).toBe(8)
  })
})


// ** TEST fetch call for future reference:

//import  "node-fetch"
//     jest.mock("node-fetch", () =>
//       jest.fn(() =>
//         Promise.resolve({
//           json: async () => Promise.resolve({ test: 100 }),
//         })
//       )
//     )

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: async () => Promise.resolve({ test: 100 }),
//   })
// ) as jest.Mock