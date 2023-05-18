---
title: Authentication in React Native, Easy, Secure, and Reusable solution 💪.
pubDatetime: 2020-08-25
tags: ["react", "react-native"]
keywords: ["react", "react-native", "react-auth"]
published: true
ogImage: ./images/react-native-auth.png
---

Authentication for a React/React Native project is a task that you will see in your project backlog whatever you are working on a simple or complex application. And having a complete guide or a generic approach to do it will help maintain code and save time.

In today’s article, I will share my solution, that I fell it’s the right way to handle authentication in a React Native Project. If you have some ideas to improve the implementation feel free to leave a comment.

For this guide, We aim to build a generic solution that handles most of the authentication use cases and easy to copy-paste in your next project.

From my experience dealing with the same task, i would say that the solution must be:

- Generic and reusable.
- Should provide a `useAuth` hook to access the Auth state and Actions.
- Should be secure, using the right solution to secure tokens and user data.
- Should provide A way to invoke the Athentication Action outside React component tree. ( call signOut inside an apollo graphql generic error as an example).
- Performance

![lets Go ](https://media.giphy.com/media/JykvbWfXtAHSM/giphy.gif)

## Approach :

We will need an Auth provider to save our auth state `status` and create some action as `signIn` `signUp` `signOut` to update the Auth state. Then we need to create a custom hook that we can use to access state and action anywhere in our code. We will use the most secure options to persist state and store user tokens. Finally, our solution will provide a way to get access to auth actions outside components three using some react refs tricks.

> will use Typescript for code example as we start using it for new projects 😎

## Create The Authentication Context.

Maybe you are familiar with a state Management library solution to handle such cases, but I think using React Conext Api is More than enough to handle authentication and provide a clean and complete solution without installing a third-party library.

> if you are using a state library to manage your project state, you can use it for Authentication too, and maybe get some inspiration from my solution.

First, we are going to create a simple Authentication context and implement the Provider components.

As we have 3 state `loading`, `singOut`, `signIn` for Auth `status`, I think using an enumeration state is the best choice to prevent bugs and to simplify the implementation. Also, we will need the `userToken` state to save the token.

Using a reducer hook approach to update the state will help make our code clean and easy to follow.

```ts
/// Auth.tsx
import * as React from "react";
import { getToken, setToken, removeToken } from "./utils.tsx";

interface AuthState {
  userToken: string | undefined | null;
  status: "idle" | "signOut" | "signIn";
}
type AuthAction = { type: "SIGN_IN"; token: string } | { type: "SIGN_OUT" };

type AuthPayload = string;

interface AuthContextActions {
  signIn: (data: AuthPayload) => void;
  signOut: () => void;
}

interface AuthContextType extends AuthState, AuthContextActions {}

const AuthContext = React.createContext<AuthContextType>({
  status: "idle",
  userToken: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, {
    status: "idle",
    userToken: null,
  });

  React.useEffect(() => {
    const initState = async () => {
      try {
        const userToken = await getToken();
        if (userToken !== null) {
          dispatch({ type: "SIGN_IN", token: userToken });
        } else {
          dispatch({ type: "SIGN_OUT" });
        }
      } catch (e) {
        // catch error here
        // Maybe sign_out user!
      }
    };

    initState();
  }, []);

  const authActions: AuthContextActions = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        dispatch({ type: "SIGN_IN", token });
        await setToken(token);
      },
      signOut: async () => {
        await removeToken(); // TODO: use Vars
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...state, ...authActions }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        status: "signIn",
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        status: "signOut",
        userToken: null,
      };
  }
};
```

We create our auth actions using `useMemo` hook to memoize them, This optimization helps to avoid generating new instances on every render.

To make using our state more enjoyable and easy, we will create a simple Hook that returns our Auth state and actions and throw an error whenever the user trying to get Auth state without wrapping React tree with `AuthProvider`

```jsx
// Auth.tsx
// ...

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be inside an AuthProvider with a value");
  }
  /*
    you can add more drived state here
    const isLoggedIn  = context.status ==== 'signIn'
    return ({ ...context, isloggedIn})
  */
  return context;
};
```

## Store Tokens: The secure way

It's a little bit confusing to see almost all people using local storage to store token as it's not the most secure one, maybe i can understand if people using it to make their post easy to follow, but i think it's not recommended to use it in production and instead you need to use secure storage solution such as Keychain.
Unfortunately React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms.

> [Read more about security in React Native](https://reactnative.dev/docs/security)

In this part we are going to implement the `getToken`, `setToken` and `removeToken` using [react-native-sensitive-data](https://mcodex.dev/react-native-sensitive-info/) package.

On Android, RNSInfo will automatically encrypt the token using keystore and save it into shared preferences and for IOS, RNSInfo will automatically save your data into user's keychain which is handled by OS.

To get started, First Make sure to install `react-native-sensitive-data` dependency :

```bash
yarn add react-native-sensitive-info@next
```

Then we can eaisly implement our helpers functions like the fllowing:

```ts
//utils.tsx
import SInfo from "react-native-sensitive-info";

const TOKEN = "token";
const SHARED_PERFS = "MyAppSharedPerfs";
const KEYCHAIN_SERVICE = "MyAppKeychain";
const keyChainOptions = {
  sharedPreferencesName: SHARED_PERFS,
  keychainService: KEYCHAIN_SERVICE,
};

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await SInfo.getItem(key, keyChainOptions);
  return value ? value : null;
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  return SInfo.setItem(key, value, keyChainOptions);
}
export async function removeItem(key: string): Promise<void> {
  return SInfo.deleteItem(key, keyChainOptions);
}

export const getToken = () => getItem<string>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: string) => setItem<string>(TOKEN, value);
```

If you are using expo you can switch to `expo-secure-data` package instead of `react-native-sensitive-info`

```ts
// utils-expo.tsx
import * as SecureStore from "expo-secure-store";

const TOKEN = "token";

export async function getItem(key: string): Promise<string | null> {
  const value = await SecureStore.getItemAsync(key);
  return value ? value : null;
}

export async function setItem(key: string, value: string): Promise<void> {
  return SecureStore.setItemAsync(key, value);
}
export async function removeItem(key: string): Promise<void> {
  return SecureStore.deleteItemAsync(key);
}

export const getToken = () => getItem(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: string) => setItem(TOKEN, value);
```

## Access Auth Actions outside component three.

One of the limitations using the provider in react is that you can't use context action outside the React component tree.

For Authentication workflow, i found my self want to signOut user on some error issue caught on Apollo client or maybe or inside a non-component thing.

Recently I found a quick and easy solution that lets you get access Auth context actions outside the component tree using a react reference.

The idea was to create a global React reference and use `useImperativeHandle` hook to expose auth actions to our global Ref like the following :

```ts
// Auth.tsx

// In case you want to use Auth functions outside React tree
export const AuthRef = React.createRef<AuthContextActions>();


export const AuthProvider = ({children}: {children: React.ReactNode}) => {

   ....
  // we add all Auth Action to ref
  React.useImperativeHandle(AuthRef, () => authActions);

  const authActions: AuthContextActions = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        dispatch({type: 'SIGN_IN', token});
        await setToken(token);
      },
      signOut: async () => {
        await removeToken(); // TODO: use Vars
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{...state, ...authActions}}>
      {children}
    </AuthContext.Provider>
  );
};

/*
you can eaisly import  AuthRef and start using Auth actions
AuthRef.current.signOut()
*/
```

## Demo

To use the solution we need to wrap our Root component with AuthProvider and start using `useAuth` to access and update state.

```ts
// App.tsx
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { AuthProvider, useAuth, AuthRef } from "./Auth";

// you can access to Auth action directly from AuthRef
// AuthRef.current.signOut()

const LogOutButton = () => {
  const { signOut } = useAuth();
  return <Button title="log Out" onPress={signOut} />;
};

const LogInButton = () => {
  const { signIn } = useAuth();
  return <Button title="log IN" onPress={() => signIn("my_token")} />;
};
const Main = () => {
  const { status, userToken } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        userToken : {userToken ? userToken : "null"}
      </Text>
      <View style={styles.actions}>
        <LogInButton />
        <LogOutButton />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
```

## Wrap Up

- You can find complete source code 👉 [react-native-auth](https://github.com/obytes/react-native-auth)
- Expo Demo : [Demo](https://snack.expo.io/@yjose/react-native-auth)

I hope you found that interesting, informative, and entertaining. I would be more than happy to hear your remarks and thoughts about this solution in The comments.

If you think other people should read this post. Tweet,share and [Follow me on twitter](https://twitter.com/ElaziziYoussouf) for the next articles.

> Originally published on [https://obytes.com/](https://www.obytes.com/blog/authentication-in-react-native-easy-secure-and-reusable-solution)
