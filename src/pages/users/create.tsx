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
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
	name: yup.string().required("Campo obrigatorio"),
	email: yup.string().required("Campo obrigatorio").email("E-mail inválido"),
	password: yup.string().required("Campo obrigatorio").min(6, "Minimo de 6 caracteres"),
	password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Senhas divergentes"),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
		resolver: yupResolver(CreateUserFormSchema),
	});

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
		await new Promise((res) => setTimeout(res, 2000));
	};

	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<SideBar />

				<Box
					as="form"
					flex={1}
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								{...register("name")}
								error={formState.errors.name}
								label="Nome Completo"
							/>
							<Input
								{...register("email")}
								error={formState.errors.email}
								type="email"
								label="E-mail"
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								{...register("password")}
								error={formState.errors.password}
								type="password"
								label="Senha"
							/>
							<Input
								{...register("password_confirmation")}
								error={formState.errors.password_confirmation}
								type="password"
								label="Confirmação da senha"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href={"/users"} passHref>
								<Button
									as="a"
									colorScheme="whiteAlpha"
									leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
								>
									Cancelar
								</Button>
							</Link>
							<Button
								type="submit"
								colorScheme="pink"
								leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
								isLoading={formState.isSubmitting}
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
