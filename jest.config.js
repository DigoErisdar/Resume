export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
    moduleFileExtensions: ['vue', 'js', 'ts'],
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons']
    }
}
