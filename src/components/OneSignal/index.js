import React, { useState, useEffect, useContext, useCallback } from "react";

export const OneSignalContext = React.createContext();
const isBrowser = typeof window !== "undefined";
const appId = "fa1976a6-7f63-4da9-8964-f08ef1b22f5f";
let OneSignal = isBrowser ? window.OneSignal : {};
let OneSignalInit = false;
const allowUnsubscribe = false;

const initOneSignal = () => {
  if (OneSignalInit) return;
  if (isBrowser) {
    window.OneSignal.init({
      appId,
      autoResubscribe: true,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      },
      welcomeNotification: {
        title: "👋 Hello ",
        message: "Thanks for subscribing!"
      }
    });
    OneSignalInit = true;
  }
};

export const OneSignalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    OneSignal = window.OneSignal;
    setupOneSignal();
    OneSignal.on("subscriptionChange", updateSubscription);
  }, []);

  const setupOneSignal = () => {
    OneSignal.push(() => {
      if (!OneSignal.isPushNotificationsSupported()) {
        return;
      }
      initOneSignal();
      updateSubscription();
    });
  };

  const updateSubscription = async () => {
    try {
      const state = await OneSignal.getNotificationPermission();
      setLoading(false);
      setIsSubscribed(state === "granted");
    } catch (error) {
      console.error("Error getting notification status", error);
    }
  };

  const getSubscriptionState = () => {
    return Promise.all([
      OneSignal.isPushNotificationsEnabled(),
      OneSignal.isOptedOut()
    ]).then(result => {
      var isPushEnabled = result[0];
      var isOptedOut = result[1];
      return {
        isPushEnabled: isPushEnabled,
        isOptedOut: isOptedOut
      };
    });
  };

  const subscribe = useCallback(event => {
    getSubscriptionState().then(state => {
      if (state.isPushEnabled && allowUnsubscribe) {
        /* Subscribed, opt them out */
        OneSignal.setSubscription(false);
      } else {
        if (state.isOptedOut) {
          /* Opted out, opt them back in */
          OneSignal.setSubscription(true);
        } else {
          /* Unsubscribed, subscribe them */
          OneSignal.registerForPushNotifications();
        }
      }
    });
    event.preventDefault();
  }, []);

  return (
    <OneSignalContext.Provider
      value={{
        isSubscribed,
        loading,
        subscribe
      }}
    >
      {children}
    </OneSignalContext.Provider>
  );
};
