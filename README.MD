# cordova-plugin-appminimize [![License](https://img.shields.io/github/license/tomloprod/cordova-plugin-appminimize.svg)](http://www.opensource.org/licenses/mit-license.php)

**AppMinimize** is a cordova plugin to minimize (or send to background) the application on android devices

## Supported Platforms

- Android

## Installation

Cordova:

    cordova plugin add cordova-plugin-appminimize

## Usage

This plugin exports an object with one method called "minimize" and another one called "sendToBackground":

```javascript
window.plugins.appMinimize.minimize();
```

## Ionic Example

In this example the application is minimized by pressing the back button

```javascript
$ionicPlatform.registerBackButtonAction(function (event) {
    event.preventDefault();
    window.plugins.appMinimize.minimize();
}, 100);
  
$ionicPlatform.registerBackButtonAction(function (event) {
    event.preventDefault();
    window.plugins.appMinimize.sendToBackground();
}, 100);
```


## TypeScript Example

In this example the application is minimized by pressing the back button

```bash
ionic cordova plugin add cordova-plugin-appminimize
npm install --save @ionic-native/app-minimize
```

```typescript
import { AppMinimize } from '@ionic-native/app-minimize';

...

constructor(private appMinimize: AppMinimize) { }

...

this.platform.registerBackButtonAction(() => {
    this.appMinimize.minimize();
});
  
this.platform.registerBackButtonAction(() => {
    this.appMinimize.sendToBackground();
});
```
