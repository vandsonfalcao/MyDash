import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

interface SidebarDrawerProviderProps {
	children: ReactNode;
}

export default function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
	const disclosure = useDisclosure();
	return (
		<SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
	);
}
