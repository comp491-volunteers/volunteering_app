# Map Integration - volunteering_app

## 📍 Overview
This branch (`map-interface`) adds an interactive Istanbul event map to the volunteering app using React Native Maps.

## ✅ What's Been Added

### New Files:
1. **`components/map/IstanbulMap.js`** - Main map component with event markers
2. **`app/map.tsx`** - Map screen route
3. **`app/test-map.tsx`** - Test screen for easy navigation to map (for development)

### Modified Files:
1. **`app/(tabs)/index.tsx`** - Added blue "View Event Map" button to home screen
2. **`app.json`** - Added Google Maps configuration for Android
3. **`package.json`** - Added `react-native-maps` dependency
4. **`tsconfig.json`** - Configured to allow JavaScript files alongside TypeScript

## 🗺️ Features

### Current Events (3 locations):
- **Taksim Square** - "Meet up at Taksim"
- **Kadıköy** - "Meet up at Kadıköy"  
- **Koç University Rumelifeneri Campus** - "Progress Meeting at Koç University Istanbul"

### Map Features:
- ✅ Interactive pan and zoom
- ✅ Red pins for events (turn gold when selected)
- ✅ Event details card appears when tapping a pin
- ✅ User location tracking
- ✅ Compass and scale
- ✅ "My Location" button

## 🚀 How to Use

### Testing the Map:
1. Start the dev server: `npm start`
2. Scan QR code with Expo Go
3. On the home screen, tap the blue "📍 View Event Map" button
4. Tap any pin to see event details

### Direct Navigation:
- URL route: `/map`
- Test route: `/test-map`

## 📦 Dependencies Added

```json
"react-native-maps": "1.20.1"
```

## 🔧 Configuration Changes

### Android Setup (for future deployment):
Added Google Maps API key configuration in `app.json`:
```json
"android": {
  "config": {
    "googleMaps": {
      "apiKey": "YOUR_GOOGLE_MAPS_API_KEY_HERE"
    }
  }
}
```

**Note:** Before deploying to Android, you'll need to:
1. Get a Google Maps API key from Google Cloud Console
2. Replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` in `app.json`

### iOS:
No additional configuration needed - MapKit is built into iOS.

## 🔄 Integration with Login System

The map component is standalone and can be easily integrated:

```typescript
import IstanbulMap from '@/components/map/IstanbulMap';

// Use in any screen
<IstanbulMap />
```

For navigation after login:
```typescript
import { router } from 'expo-router';

// Navigate to map
router.push('/map');
```

## 📝 Future Enhancements

### Replace Dummy Data:
Currently uses hardcoded events. To integrate with backend:

```javascript
// In IstanbulMap.js, replace generateDummyEvents with:
const [events, setEvents] = useState([]);

useEffect(() => {
  fetch('YOUR_API_ENDPOINT/events')
    .then(response => response.json())
    .then(data => setEvents(data));
}, []);
```

### Event Data Structure:
```javascript
{
  id: number,
  title: string,
  description: string,
  coordinate: {
    latitude: number,
    longitude: number
  }
}
```

## 🧪 Testing Checklist

- [x] Map displays correctly on iOS
- [x] All 3 event pins appear at correct locations
- [x] Tapping pins shows event details
- [x] Map is responsive and interactive
- [x] Navigation button works from home screen
- [ ] Test on Android (requires API key setup)

## 👥 Team Integration Notes

### For Frontend Team:
- Map component is in `components/map/IstanbulMap.js`
- Import and use anywhere in the app
- Fully self-contained, no external dependencies except `react-native-maps`

### For Backend Team:
- API should return events with `latitude` and `longitude` fields
- See "Event Data Structure" above for format

### For Database Team:
- Store event coordinates as decimal degrees
- Latitude: -90 to 90
- Longitude: -180 to 180

## 📚 Resources

- [React Native Maps Documentation](https://github.com/react-native-maps/react-native-maps)
- [Expo Location Services](https://docs.expo.dev/versions/latest/sdk/location/)
- [Google Maps API Key Setup](https://developers.google.com/maps/documentation/android-sdk/get-api-key)

## 🐛 Known Issues

- None currently

## 📧 Contact

For questions about the map integration, contact Damla.

---

**Branch:** `map-interface`  
**Last Updated:** October 30, 2025  
**Status:** ✅ Ready for testing and review
