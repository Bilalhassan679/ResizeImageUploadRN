# ResizeImageUploadRN
## https://www.educative.io/answers/react-native-image-crop-picker
## https://www.youtube.com/watch?v=brE91Obyn78
## https://www.youtube.com/watch?v=iAdTT-eC1rk


## STEP 1
#### yarn add react-native-image-crop-picker
#### yarn pod

## STEP 2
#### For ANDROID
(android/build.gradle)
allprojects {
    repositories {
      mavenLocal()
      jcenter()
      maven { url "$rootDir/../node_modules/react-native/android" }

      // ADD THIS
      maven { url 'https://maven.google.com' }

      // ADD THIS
      maven { url "https://www.jitpack.io" }
    }
}

##

Add useSupportLibrary (android/app/build.gradle)


android {
    ...

    defaultConfig {
        ...
        vectorDrawables.useSupportLibrary = true
        ...
    }
    ...
}
    
    AndroidManifest.xml
    
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-feature android:name="android.hardware.camera" android:required="false" />
    <uses-feature android:name="android.hardware.camera.front" android:required="false" />


#### For IOS 
    info.plist
    NSPhotoLibraryUsageDescription
    NSCameraUsageDescription
    NSMicrophoneUsageDescription


## STEP 3

     yarn add axios
