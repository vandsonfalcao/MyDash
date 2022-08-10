import type { NextPage } from "next";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
const SignIn: NextPage = () => {
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				flexDir="column"
				width="100%"
				maxW={360}
				bg="gray.800"
				p={8}
				borderRadius={8}
			>
				<Stack spacing={4}>
					<Input name="email" type={"email"} label="E-mail" />
					<Input name="password" type="password" label="Senha" />
				</Stack>
				<Button type="submit" mt={6} colorScheme="pink" size="lg">
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
};

export default SignIn;
