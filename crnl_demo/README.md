# crnl_demo

test crnl_demo

## Installation

```sh
npm install crnl_demo
```

## Usage

```js
import { multiply } from "crnl_demo";

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT


## 具体创建方法
```
npm install -g react-native-create-library
npx react-native-create-library --platforms ios,android rncl_demo
cd crnl_demo
npm install -g react-native-builder-bob
npx react-native-builder-bob init
```


## 创建完成之后编译遇到的问题
1. 无法调试问题  
   1. vscode需要安装插件 `React Native Tools` `https://github.com/microsoft/vscode-react-native`
2. 找不到入口函数问题
   1. 添加文件 `example/index.js`， 原来的文件是 `example/index.tsx`  
3. android编译报错问题 `No toolchains found in the NDK toolchains folder for ABI with prefix: arm-linux-androideabi`
   1. 需要设置gradle版本以及ndk目录
   2. `classpath("com.android.tools.build:gradle:4.1.0")`, 原来是3.5.3版本，必须4.x以上(https://stackoverflow.com/questions/66922162/no-toolchains-found-in-the-ndk-toolchains-folder-for-abi-with-prefix-arm-linux)  
   3. `android {ndkVersion '23.1.7779620' }`
4. 