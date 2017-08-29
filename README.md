# TDDBC for TypeScript with Node.js

これは、TDDBCのTypeScript向けプロジェクトです。

## Documentation

### 動作環境

* Node.js : 4以上

### セットアップ

* まずはじめに、プロジェクトをcloneしてください。

```sh
$ git clone https://github.com/tddbc/typescript-mocha.git
```

* 次に、依存関係をダウンロードしてください。

```sh
$ npm install
```

* 最後に、下記の様に表示されるか、確認してください。

```sh
$ npm test

> typescript-mocha@0.1.0 pretest /path/to/projects/typescript-mocha
> npm run lint


> typescript-mocha@0.1.0 lint /path/to/projects/typescript-mocha
> tslint -c tslint.json 'src/**/*.ts' 'test/**/*.ts'


> typescript-mocha@0.1.0 test /path/to/projects/typescript-mocha
> mocha --compilers ts:ts-node/register --require source-map-support/register --full-trace --bail



  Sample
    .status
      ✓ は、trueであるべき
    #say()
      ✓ は、"Hello TDDBC!"が返ってくるべき


  2 passing (11ms)


$ 
```

### コマンド

| コマンド        | 内容                                                       |
|:----------------|:-----------------------------------------------------------|
| `npm test`      | lint とテストをまとめて行います                            |
| `npm run lint`  | コードの静的検証を行います                                 |
| `npm run watch` | ファイル変更を監視し、変更があったらテストを自動で行います |

## License
Copyright (c) 2017 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
