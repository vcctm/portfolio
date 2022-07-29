module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
}
