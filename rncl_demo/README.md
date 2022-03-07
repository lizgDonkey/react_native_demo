
# react-native-rncl-demo

## Getting started

`$ npm install react-native-rncl-demo --save`

### Mostly automatic installation

`$ react-native link react-native-rncl-demo`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rncl-demo` and add `RNRnclDemo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRnclDemo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRnclDemoPackage;` to the imports at the top of the file
  - Add `new RNRnclDemoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rncl-demo'
  	project(':react-native-rncl-demo').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rncl-demo/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rncl-demo')
  	```


## Usage
```javascript
import RNRnclDemo from 'react-native-rncl-demo';

// TODO: What to do with the module?
RNRnclDemo;
```
  

## 具体创建方法
```
npm install -g react-native-create-library
npx react-native-create-library --platforms ios,android rncl_demo
```