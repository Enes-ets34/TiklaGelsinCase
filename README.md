
# Tıkla Gelsin Case 🍔

### Technologies and Dependieces:

- Typescript
- React Native
- Expo CLI

# Example User
```
email: ornek@gmail.com
password:12345678
```
<div style="height: 0; padding-bottom: calc(53.13%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/65119b84e7e4a7f07c081d62?autoplay=true" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:100%" title="Embedded content made on Kapwing" width="100%"></iframe></div>

### Todos
- [x] **Discount**
- [x] **Menu Item Count**
- [x] **Add To Cart**
- [x] **Filter** Menu
- [x] **Login**
- [x] Buy and Clear Cart

### Getting Started

- Clone this repo
```
$ cd .
npm install
npm run start
```

### Start On Android
```
npm run android
```
### Start On IOS
```
npm run ios
```

# Folder Structure
```
├── constants/
│   ├─ actionTypes.ts // Actions names
│   └─ baseURL.tsx // Axios api URL
│
├── interfaces/
│   ├─ _MenuItem.ts 
│   └─ _User.ts
│
├── navigation/
│   └─ AppNavigator.tsx // Routing
│
├── screens/
│   └─ Cart/
|   |    └─  components/ // Components
|   |    └─  styles/ // Styling
|   |    └─  hooks/ // Custom Hooks
|   └─ index.tsx // Main Component
|   |
|   └─ Login/
|   |
|   └─ Menu/
|
├── store/ //Redux
│   └─ actions/
|   └─ reducers/
|   └─ index.ts
|
├── utils/
│   └─ appAxios.ts


```