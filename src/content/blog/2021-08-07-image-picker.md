---
title: How to build an image picker in React Native
tags: ["react", "react-native"]
keywords: ["react", "react-native", "libraries"]
ogImage: ./images/react-native-image-picker.png
pubDatetime: 2023-01-30
description: In this tutorial, we'll demonstrate how to use React Native Image Crop Picker to enable your users to select images from their devices or use the device's camera to capture and upload live photos to your app.
---

![banner](/images/react-native-image-picker.png)

> Originally published on [Logrocket Blog](https://blog.logrocket.com/)

In my experience working with React Native, one of the tasks I've found myself doing most often is building the functionality for uploading images from user devices. This can be challenging if you've never done it before.

In this tutorial, we'll demonstrate how to use [React Native Image Crop Picker](https://github.com/ivpusic/react-native-image-crop-picker) to enable your users to select images from their devices or use the device's camera to capture and upload live photos to your app.

To show how `react-native-image-crop-picker` works, we'll create a reusable image picker component that handles permission to select an image from the media library or take a new image using the camera.

By the end of the tutorial, you should use the image picker component like so:

```tsx
import * as React from "react";
import { View } from "react-native";
import { ImageOrVideo } from "react-native-image-crop-picker";
import { Avatar } from "./Avatar";

export const Profile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
    // upload image to server here
  };
  return (
    <Avatar
      onChange={onAvatarChange}
      source={require("./avatar-placeholder.png")}
    />
  );
};
```

Here's a simple demo of the finished result:

![final-demo](https://user-images.githubusercontent.com/11137944/128852095-6d28b38a-17aa-4268-a0a1-e23504532a42.gif)

## Choosing the right React Native image picker

There are two popular libraries you can use to implement the image picker component: `[react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker)` and `react-native-image-crop-picker`. React Native Image Picker is another React Native module for selecting media from the device library or camera. So why use React Native Image Crop Picker?

The advantage of using `react-native-image-crop-picker` is that, unlike `react-native-image-picker`, it enables you to crop and compress images. This is especially critical when building iOS apps because uploading large files could introduce performance issues. Compressing and cropping images are also helpful for users with low internet speed.

## Installing `react-native-image-crop-picker`

Let's create a new React Native project using a TypeScript template:

```bash
npx react-native init ImagePickerDemo  --template react-native-template-typescript
```

Next, install `react-native-image-crop-picker`:

```bash
yarn add react-native-image-crop-picker
```

Because `react-native-image-crop-picker` comes with some native dependencies, we need to install `pod` and rebuild the app:

```bash
cd ios && pod install && cd ..
```

To use `react-native-image-crop-picker` , you should add the following config to `info.plist`:

```bash
<key>NSPhotoLibraryUsageDescription</key>
<string>$(PRODUCT_NAME) would like to upload photos from your photo gallery</string>
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) requires to access camera for uploading photos to your profile or posts</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) requires to access Audio recording to record and uplod videos</string>
```

The `NSPhotoLibraryUsageDescription` config describes why you need access to user photos and why you're accessing the camera. If you only want to access images from the device library, you don't need to add the `NSMicrophoneUsageDescription` or `NSCameraUsageDescription` keys.

Now we're ready to build and open the app:

```bash
yarn ios
```

### Android Configuration

The Android configuration for `react-native-image-crop-picker` is as follows.

First, add `useSupportLibrary` (`android/app/build.gradle`):

```
android {
    ...

    defaultConfig {
        ...
        vectorDrawables.useSupportLibrary = true
        ...
    }
    ...
}
```

If you want to use the camera picker in your project, add the following to `app/src/main/AndroidManifest.xml`:

- `<uses-permission android:name="android.permission.CAMERA"/>`

3. If you want to allow the user to use their front camera, you should also add the following to `app/src/main/ AndroidManifest.xml`:

- `<uses-feature android:name="android.hardware.camera" android:required="false" />`
- `<uses-feature android:name="android.hardware.camera.front" android:required="false" />`

It's important to mention that you need to upgrade to [Android SDK 26+](https://developer.android.com/studio/releases/platforms). If you're using [React Native 0.64](https://blog.logrocket.com/whats-new-in-react-native-0-64/), you're safe. If that's not the case, make sure to update`android/app/build.gradle`:

```tsx
android {
    compileSdkVersion 27
    buildToolsVersion "27.0.3"
    ...

    defaultConfig {
      ...
      targetSdkVersion 27
      ...
    }
    ...
}
```

## Building an avatar profile update

In this section, we'll build a simple screen to update the user avatar. The idea is to create an image picker component to allow the user to upload a new avatar. The avatar component should extend its `prop` from the `Image` component, and we'll add `onChange` to handle uploading a new image from the user device.

We'll wrap our image with a pressable component to open the photo library when the user presses their profile picture. Opening the image library is as easy as calling the `openPicker` function from `react-native-image-crop-picker`.

Let's add a crop feature that allows users to crop the selected image before uploading:

```tsx
import React from "react";
import { Image, ImageProps, StyleSheet, TouchableOpacity } from "react-native";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };
  return (
    <TouchableOpacity onPress={pickPicture}>
      <Image
        style={styles.avatar}
        {...props}
        source={uri ? { uri } : props.source}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },
});
```

Now that our avatar component is ready to be used, let's create a profile screen and update the user's profile picture:

```tsx
import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { ImageOrVideo } from "react-native-image-crop-picker";
import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";

export const Profile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
    // upload image to server here
  };
  return (
    <View style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userRow}>
        <Avatar
          onChange={onAvatarChange}
          source={require("./avatar-placeholder.png")}
        />
        <UserInfo />
      </View>
      <View style={styles.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    flex: 1,
  },
  userRow: {
    alignItems: "center",
    padding: 15,
    marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: "#d8d8db",
  },
});
```

Here we added the `onChange` prop to the avatar. This will provide us with all the file info, which we can easily use to upload it to our server. Here is the result:

![demo](https://user-images.githubusercontent.com/11137944/128852288-5d6fd493-7619-459c-9c92-261136c7fa76.gif)

## Taking a photo using the device camera

Let's say we want to give the user the ability to take a photo from their camera and upload it. We should also give the user the option to select a photo from the library or use their device camera to take a new photo.

Note that `openCamera` won't work on iOS Simulator. To test it, you should run the app on a real device.

To use the camera, we only need to call the `openCamera` function instead of `openPicker`:

```tsx
import React from "react";
import {
  Image,
  ImageProps,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import { CameraIcon, ImageIcon } from "./icons";

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);
  const [visible, setVisible] = React.useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };

  return (
    <>
      <TouchableOpacity onPress={chooseImage}>
        <Image
          style={styles.avatar}
          {...props}
          source={uri ? { uri } : props.source}
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <SafeAreaView style={styles.options}>
          <Pressable style={styles.option} onPress={chooseImage}>
            <ImageIcon />
            <Text>Library </Text>
          </Pressable>
          <Pressable style={styles.option} onPress={openCamera}>
            <CameraIcon />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },

  options: {
    backgroundColor: "white",
    flexDirection: "row",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

Here's a demo of our finished React Native app:

![final-demo](https://user-images.githubusercontent.com/11137944/128852095-6d28b38a-17aa-4268-a0a1-e23504532a42.gif)

## Conclusion

Now you can copy-paste this image picker component whenever you need to build an image upload feature in a React Native app.

The full code is available in this [Github repo](https://github.com/yjose/react-native-image-picker-example) if you want to play around with this project.
I hope you found that interesting, informative, and entertaining. I would be more than happy to hear your remarks and thoughts.

If you think other people should read this post. Tweet, share and [Follow me on Twitter](https://twitter.com/ElaziziYoussouf) for the next articles.
