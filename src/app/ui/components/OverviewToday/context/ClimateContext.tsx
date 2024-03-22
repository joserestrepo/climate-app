"use client";

import { GetFavorites } from "@/app/lib/domain/usecases/GetFavorites";
import { Climate } from "@/app/lib/entities/Climate";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ClimateContextType } from "./models/climateContext.interface";

const defaultValue: ClimateContextType = {
  climateMap: new Map(),
  setClimateMap: () => {},
};

const ClimateContext = createContext<ClimateContextType>(defaultValue);

export const useClimateLocalStorage = () => useContext(ClimateContext);

export const ClimateContextProvider = ({ children }: any) => {
  const [climateMap, setClimateMap] = useState(new Map<string, Climate>());

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await GetFavorites();
      setClimateMap(response);
    };
    fetchFavorites();
  }, []);

  return (
    <ClimateContext.Provider value={{ climateMap, setClimateMap }}>
      {children}
    </ClimateContext.Provider>
  );
};

export default ClimateContextProvider;
