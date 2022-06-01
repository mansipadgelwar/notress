import { createContext, useContext } from "react";

const initialDataState = {
  notes: [],
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  return (
    <ServiceContext.Provider
      value={{ initialDataState }}
    ></ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
