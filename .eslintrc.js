module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-alert': 'off',
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    'no-console': 'off', // console.log() 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'error', // 사용하지 않는 변수 금지
    'react/react-in-jsx-scope': 'off', // react-in-jsx-scope 설정 off
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extenstions: ['.js', '.jsx'],
      },
    },
  },
};
