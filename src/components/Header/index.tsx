import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";

import Logo from "./Logo";
import NotificationsNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {
	const { onOpen } = useSidebarDrawer();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<Flex w="100%" as="header" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
			{!isWideVersion && (
				<IconButton
					aria-label="Open Navigator"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				/>
			)}
			<Logo />
			{isWideVersion && <SearchBox />}
			<Flex align="center" ml="auto">
				<NotificationsNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
