import React, { createContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const getEnrollmentDb = async () => {
    try {
      let loggedIn = window.api.connected;
      if (!loggedIn) {
        loggedIn = await window.api.autoLogin();
      }
      if (!loggedIn) {
        loggedIn = await window.api.connect(true);
      }
      return await window.api.openDatastore("enrolment");
    } catch (e) {
      console.log("Error in getEnrollmentDb, cannot log in " + e.message);
    }
  };

  const authenticate = async () => {
    let loggedIn = await window.api.autoLogin();
    if (!loggedIn) {
      loggedIn = await window.api.connect(true);
    }
    return loggedIn;
  };
  const isAuthenticated = () => {
    return window.api.connected;
  };
  const logout = async () => {
    await window.api.connect(false);
  };

  return (
    <Provider
      value={{
        isAuthenticated,
        getEnrollmentDb,
        authenticate,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.any,
};

export { AppContext, AppProvider };
