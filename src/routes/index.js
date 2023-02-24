import React, {useState} from "react";
import UserContext from "../context/UserContext";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const [userPeso, setUserPeso] = useState(0)
  return (
    <UserContext.Provider value={{userPeso,  setUserPeso}}>
      <AppRoutes />
    </UserContext.Provider>
  );
}