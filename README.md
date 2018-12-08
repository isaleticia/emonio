# Emonio P3 - Application

This is a Ionic-Cordova project written for the communication via Bluetooth between Android or iOS devices and a energy measure device 
called [Emonio P3](https://https://www.emonio.de).
It uses the [cordova-bluetooth-serial-plugin](https://github.com/don/BluetoothSerial) to enable communication over Bluetooth.
(*Android* uses **Classic Bluetooth** & *iOS* uses **Bluetooth Low Energy**.)

- Scans for devices 
- Connects to devices 
- Shows device information 

##### What will come next:

- Configure your Emonio P3 device 


### Supported Platforms:

- Android 

- iOS **(not working yet)**

## Getting started: 

1. First make sure you have the latest version of [Node.js](https://nodejs.org/en/) installed.

2. Install ionic and Cordova with the following command:

```
$ npm install -g cordova ionic
```
3. Move to any directory and clone this repository:

```
$ cd ./anyDirectory
$ git clone https://github.com/isaleticia/emonio.git
```

## Running the app:

> **Important:** You need to run the app on a real device otherwise Bluetooth won’t work. 

### For Android:

#### Requirements:
- [Java JDK](https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)
- [Android Studio](https://developer.android.com/studio/)
- Updated Android SDK tools, platform and component dependencies. Available through Android Studio’s [SDK Manager](https://developer.android.com/studio/intro/update)

Now run the **Emonio P3-App** on a connected android device:

```
$ ionic cordova run android --device 
```

### For iOS:

#### Requirements:

- Xcode 7 or higher 
- iOS 9
- A free [Apple ID](https://appleid.apple.com/#!&page=signin) or paid Apple Developer account

Now run the **Emonio P3-App** on a connected iOS device:

```
$ ionic cordova run ios --device
```




