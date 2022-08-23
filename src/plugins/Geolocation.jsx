import React from "react";
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder';
import { confirmAlert } from "react-confirm-alert";
import { Toast } from "@capacitor/toast";
import { Capacitor } from "@capacitor/core";


export const revereseGeocode = async (latitude, longitude) => {
   try {

      let options = {
         useLocale: true,
         maxResults: 1
      };

      // Result: {"latitude":37.4233913,"longitude":-122.08362100000001,"countryCode":"US","countryName":"United States","postalCode":"91801","administrativeArea":"California","subAdministrativeArea":"Santa Clara County","locality":"Mountain View","subLocality":"","thoroughfare":"S 5th St","subThoroughfare":"1233","areasOfInterest":["1233"]}
      const coordinates = await NativeGeocoder.reverseGeocode(latitude, longitude, options);
      confirmAlert({
         title: 'Result',
         message: coordinates[0].countryCode + ', ' + coordinates[0].countryName + ', ' + coordinates[0].thoroughfare + ', ' + coordinates[0].administrativeArea,
         buttons: [
            {
               label: 'Close',
               onClick: () => false,
            }
         ]
      });
   } catch (error) {
      Toast.show({ text: error });
   }

};


export const getCurrentPosition = async () => {
   try {
      const coordinates = await Geolocation.getCurrentPosition();
      const permission = await Geolocation.checkPermissions();
      if (permission.location == 'granted') {
         let latitude = coordinates.coords.latitude;
         let longitude = coordinates.coords.longitude;
         Toast.show({ text: 'Lat: ' + coordinates.coords.latitude + ', Long: ' + coordinates.coords.longitude });

         if (Capacitor.getPlatform() !== 'web') {
            revereseGeocode(latitude, longitude);
         }
      }

   } catch (error) {
      Toast.show({ text: error.message });
   }
}


export const watchPosition = async () => {
   try {
      let options = {
         enableHighAccuracy: true,
      };

      await Geolocation.watchPosition(options, (position, err) => {
         Toast.show({ text: 'Lat: ' + position.coords.latitude + ', Long: ' + position.coords.longitude });
      });
   } catch (error) {
      Toast.show({ text: error.message });
   }

};