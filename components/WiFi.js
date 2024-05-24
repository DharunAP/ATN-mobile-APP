const WifiManager =require('react-native-wifi-reborn');
import { Button } from 'react-native';
import * as Location from 'expo-location';
import { useEffect } from 'react';

export const WiFi = ()=>{

    useEffect(() => {
        (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
        const location = await Location.getCurrentPositionAsync({});
        console.log('Location permission granted', location);
        })();
    }, []);


    connectWifi = () => {
        console.log(WifiManager)
        // WifiManager.connectToProtectedSSID('Guhan', 'guhan@0000', false).then(
        //   () => {
        //     console.log('Connected successfully!')
        //   },
        //   (err) => {
        //     console.log('Connection failed!')
        //     console.error(err)
        //   }
        // )
        WifiManager.getCurrentWifiSSID().then(
            ssid => {
              console.log("Your current connected wifi SSID is " + ssid);
            },
            () => {
              console.log("Cannot get current SSID!");
            }
          );
      }
    return(
        <Button
            onPress={connectWifi}
            title='Connect to Wifi'
            color='#841584'
        />
    )      
}