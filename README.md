## RN-Redux-boilerplate
> (React Native + Redux + React Navigation)

#### 1. Install dependencies

###### React Navigation:
```
yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack
```

###### ESLint:
```
yarn add eslint-plugin-jest eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native @babel/eslint-parser -D
```

###### Redux:
```
yarn add redux react-redux redux-logger redux-saga reselect
```

###### Other:
```
yarn add prop-types
```

###### Linking:
```
cd ios && pod install && cd ..
```

#### 2. Remove unused packages and files
`.flowconfig`

```
yarn remove @react-native-community/eslint-config
```

#### 3. Helpers for the app example
```
yarn add @react-native-async-storage/async-storage
```

#### 4. Create (copy) files
1. `jest.config.js`
2. `metro.config.js`
3. needed dirs and files from example


#### 5. Add code
1. At the top of `index.js`:
`import 'react-native-gesture-handler';`
