import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
}

export default function NavLink({ children, icon }: NavLinkProps) {
	return (
		<Link display="flex" alignContent="center">
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</Link>
	);
}
