# Emonio P3 - Application

This is a Ionic-Cordova project written for the communication via Bluetooth between Android or iOS devices and a energy measure device 
called [Emonio P3](https://https://www.emonio.de).
It uses the [cordova-bluetooth-serial-plugin](https://github.com/don/BluetoothSerial) to enable communication with Bluetooth.
(*Android* uses **Classic Bluetooth** & *iOS* uses **Bluetooth Low Energy**.)

- Scan for devices 
- Connection to devices 
- Show device information
- Display energy data in table (update every 2 sec)
- Visualization of meter data in line chart (updates new data dynamically)
- Access to [Thingsboard](https://thingsboard.io) via App

##### What will come next:

- Configure your Emonio P3 device 


### Supported Platforms:

- Android 

- iOS

## Getting started: 

1. First make sure you have the latest version of [Node.js](https://nodejs.org/en/) installed.

2. Install Ionic and Cordova with the following command:

```
$ npm install -g cordova ionic
```
3. Move to any directory and clone this repository:

```
$ cd ./anyDirectory
$ git clone https://github.com/isaleticia/emonio.git
```

## Running the app:

> **Important:** You need to run the app on real device otherwise Bluetooth won’t work. 

### For Android:

#### Requirements:

- Updated Android SDK tools, platform and component dependencies. Available through Android Studio’s [SDK Manager](https://developer.android.com/studio/intro/update)

Follow [these](https://ionicframework.com/docs/building/android) steps.

Now run the **Emonio P3-App** on connected android device:

```
$ ionic cordova run android --device 
```

### For iOS:

#### Requirements:

- Xcode 7 or higher 
- iOS 9
- A free [Apple ID](https://appleid.apple.com/#!&page=signin) or paid Apple Developer account

Follow [these](https://ionicframework.com/docs/building/ios) steps.

Now run the **Emonio P3-App** on connected iOS device:

```
$ ionic cordova run ios --device
```




