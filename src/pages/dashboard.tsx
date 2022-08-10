import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const options: ApexOptions = {
	chart: {
		toolbar: { show: false },
		zoom: { enabled: false },
		foreColor: theme.colors.gray[500],
	},
	grid: { show: false },
	dataLabels: { enabled: false },
	tooltip: { enabled: false },
	xaxis: {
		type: "datetime",
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			"2021-03-18T00:00:00.0000Z",
			"2021-03-19T00:00:00.0000Z",
			"2021-03-20T00:00:00.0000Z",
			"2021-03-21T00:00:00.0000Z",
			"2021-03-22T00:00:00.0000Z",
			"2021-03-23T00:00:00.0000Z",
			"2021-03-24T00:00:00.0000Z",
		],
	},
	fill: {
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};
const series: ApexAxisChartSeries = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];
export default function Dashboard() {
	return (
		<Flex direction="column" h="100vh">
			<Header />
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<SideBar />
				<SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
					<Box p="8" bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="large" mb="4">
							Inscritos da semana
						</Text>
						<Chart options={options} series={series} type="area" height={160} />
					</Box>
					<Box p="8" bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="large" mb="4">
							Taxa de abertura
						</Text>
						<Chart options={options} series={series} type="area" height={160} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
