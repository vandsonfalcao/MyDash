import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function createUser() {
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<SideBar />

				<Box flex={1} borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="name" label="Nome Completo" />
							<Input name="email" type="email" label="E-mail" />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="password" type="password" label="Senha" />
							<Input
								name="password_condirmation"
								type="password"
								label="Confirmação da senha"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Button
								colorScheme="whiteAlpha"
								leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
							>
								Cancelar
							</Button>
							<Button
								colorScheme="pink"
								leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
