import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Vandson Falcão</Text>
				<Text color="gray.50" fontSize="small">
					vandsonsf@gmail.com
				</Text>
			</Box>
			<Avatar
				size="md"
				name="Vandson Falão"
				src="https://avatars.githubusercontent.com/u/65142350?v=4"
			/>
		</Flex>
	);
}
