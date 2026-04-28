# Assignment – Mini Instagram Feed

Build a React Native app that mimics the basic structure of an Instagram home screen using static data. Everything lives on a single screen — no navigation needed.

---

## Setup

### 1. Create a new Expo project

```bash
npx create-expo-app mini-instagram
cd mini-instagram
```

Check `package.json` — make sure it says `"expo": "~54.0.x"`. If it says 52, run:

```bash
npx expo install expo@~54.0.0
```

### 2. Install required packages

```bash
npx expo install expo-asset react-native-screens react-native-safe-area-context
npm install babel-preset-expo
```

### 3. Create `babel.config.js` in the project root

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

### 4. Start the app

```bash
npx expo start --clear
```

---

## App Structure

```
App.jsx     ← single screen, everything lives here
data.js     ← static data
```

---

## The Screen – Instagram Feed

One screen with two sections:

**Stories (horizontal FlatList)**
- A horizontal scrolling row of story circles at the top
- Each story shows a coloured circle with the username below it
- Use `showsHorizontalScrollIndicator={false}`

**Posts (vertical FlatList)**
- A scrollable list of posts below the stories
- Each post shows: username, a coloured placeholder box instead of an image, caption, and like count
- Show a "No posts yet." message if the posts array is empty

---

## Static Data

Create a `data.js` file in the project root with hardcoded arrays:

```js
export const STORIES = [
  { id: '1', username: 'alice' },
  { id: '2', username: 'bob' },
  { id: '3', username: 'carol' },
  // add more...
];

export const POSTS = [
  { id: '1', username: 'alice', caption: 'Beautiful day! ☀️', likes: 142 },
  { id: '2', username: 'bob', caption: 'Coffee time ☕', likes: 87 },
  { id: '3', username: 'carol', caption: 'Weekend vibes 🎉', likes: 203 },
  // add more...
];
```

Import them in `App.jsx`:

```js
import { STORIES, POSTS } from './data';
```

---

## Requirements

- [ ] Stories rendered in a **horizontal** `FlatList`
- [ ] Posts rendered in a **vertical** `FlatList`
- [ ] Both lists use `keyExtractor`
- [ ] Posts list has a `ListEmptyComponent`
- [ ] `SafeAreaView` wraps the whole screen
- [ ] Both lists are styled — not default layout
- [ ] Static data lives in a separate `data.js` file

---

## Tips

- For story circles, use a `View` with `borderRadius` set to half the width/height
- For image placeholders, use a `View` with a background colour and fixed height
- Use `ItemSeparatorComponent` on the posts list for a clean divider between posts
- Use the posts `FlatList` with a `ListHeaderComponent` for the stories row so the whole screen scrolls together naturally

---

## Note on AI Usage

You are welcome to use AI tools (Claude, ChatGPT, Copilot etc.) to help you build this. However, make sure you understand every line of code that's generated.
