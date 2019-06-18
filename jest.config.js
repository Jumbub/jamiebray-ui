module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg?$": "jest-svg-transformer",
    "^.+\\.scss?$": "jest-css-modules-transform"
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
     "<rootDir>/__mocks__/fileMock.js",
  },
  "setupFilesAfterEnv": [
    "<rootDir>/configs/setupTests.js"
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
