module.exports = {
    testMatch:[
        '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)',
        '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs']
}