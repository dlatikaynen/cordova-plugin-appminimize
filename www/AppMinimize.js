var appMinimize2 = {
  minimize: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AppMinimize', 'minimize', []);
  },
  
  sentToBackground: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AppMinimize', 'sendToBackground', []);  
  }
}

if (!window.plugins) { window.plugins = {}; }

window.plugins.appMinimize2 = appMinimize2;
return window.plugins.appMinimize2;
