import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	IconButton,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";

export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: false,
	});
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<SideBar />

				<Box flex={1} borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Listagem de Usuários
						</Heading>
						{isWideVersion ? (
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar novo
							</Button>
						) : (
							<IconButton
								aria-label="Criar novo"
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								title="Criar novo"
								icon={<Icon as={RiAddLine} fontSize="20" />}
							/>
						)}
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={["4", "4", "6"]} color="gray.300" w="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuário</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px={["4", "4", "6"]}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Vandson Falcão</Text>
										<Text fontSize="sm" color="gray.300">
											vandsonsf@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril, 2022</Td>}
								<Td>
									{isWideVersion ? (
										<Button
											as="a"
											size="sm"
											fontSize="sm"
											colorScheme="purple"
											leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
										>
											Editar
										</Button>
									) : (
										<IconButton
											aria-label="Editar"
											as="a"
											size="sm"
											fontSize="sm"
											colorScheme="purple"
											title="Editar"
											icon={<Icon as={RiPencilLine} />}
										/>
									)}
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
