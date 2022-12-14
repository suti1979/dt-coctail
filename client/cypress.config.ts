import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    baseUrl:"http://localhost:3000",
    viewportHeight: 1000,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...
      
      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    }
  }
})


  // e2e: {
  //   baseUrl: "http://localhost:3000",
  //   viewportHeight: 1000
  // }
