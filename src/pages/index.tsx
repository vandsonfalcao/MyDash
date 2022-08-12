import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";

type Inputs = {
	email: string;
	password: string;
};

const SignInFormSchema = yup.object().shape({
	email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
	password: yup.string().required("Campo obrigatório"),
});

const SignIn: NextPage = () => {
	const router = useRouter();

	const { register, handleSubmit, formState } = useForm<Inputs>({
		resolver: yupResolver(SignInFormSchema),
	});

	const handleSignIn: SubmitHandler<Inputs> = async (data) => {
		await new Promise((res) => setTimeout(res, 2000));
		if (data.email === "vandsonsf@gmail.com" && data.password === "qwerty") {
			router.push("/dashboard");
		}
	};

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
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>
					<Input
						type="email"
						label="E-mail"
						{...register("email")}
						error={formState.errors.email}
					/>
					<Input
						type="password"
						label="Senha"
						{...register("password")}
						error={formState.errors.password}
					/>
				</Stack>
				<Button
					type="submit"
					mt={6}
					colorScheme="pink"
					size="lg"
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
};

export default SignIn;
