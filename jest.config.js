module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg?$": "jest-svg-transformer",
    "^.+\\.scss?$": "jest-css-modules-transform"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.js"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "globals": {
    'ts-jest': {
      "tsConfig": 'tsconfig.test.json'
    }
  }
}
