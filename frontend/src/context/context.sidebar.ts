import { createContext } from "react";

export interface SideBarContextType {
    leftIsOpen: boolean;
    rightIsOpen: boolean;
    toggleLeft: (valie: boolean) => void;
    toggleRight: (valie: boolean) => void;
}

export const SideBarContext = createContext<SideBarContextType | undefined>(undefined);