## Protractor-slack-plugin

#### Installation

You can use yarn or npm

```
yarn add -D protractor-slack-plugin
```

```
npm install --save-dev protractor-slack-plugin
```

#### Usage

In the plugins section of your protractor config place the following

```
plugins: [{
    package: 'protractor-slack-plugin',
    failMessage: 'Oh noes {totalFailed} tests failed',
    token: '<my-token>',
    channel: 'general'
}],
```