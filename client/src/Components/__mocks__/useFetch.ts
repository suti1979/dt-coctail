const mockResponse = {
  data: [
      {
        name: "Coctail",
        instructions: "do it",
        thumbnail: "http://pic",
        ingredients: ["1","2"]
      },
    ],
    error: false
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
