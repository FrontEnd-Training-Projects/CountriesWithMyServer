import React from 'react'
import { Area, AreaChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { TooltipBox, TooltipDescr, TooltipHeader } from '../Styles/TooltipStyle';
import { Box, Typography } from '@mui/material';
import { tickFormatter } from '../Functions/ChartFunctions';
import { ChartData, TooltipData } from '../Types/ChartTypes';
import { useAppSelector } from '../app/hooks';

const Chart = () => {
	const pages: Array<number> = useAppSelector(state => state.pagesReducer);
	const page = pages[0];
	const rowsPerPage = pages[1];
	const allCountries = useAppSelector(state => state.allCountriesReducer).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	const data: ChartData[] = allCountries.map((country) => {
		const chartData: ChartData = {
			name: country.name,
			population: country.population,
			color: "white"
		};
		return chartData;
	});

	const CustomTooltip = ({ active, payload, label }: TooltipData) => {
		if (active) {
			return (
				<TooltipBox>
					<TooltipHeader>{`${label}`}</TooltipHeader>
					<Box sx={{ display: 'flex' }}>
						<TooltipDescr>Population:</TooltipDescr>
						<Typography>
							{payload && payload[0] && payload![0].value.toLocaleString("en-US")}
						</Typography>
					</Box>
				</TooltipBox>
			);
		}
		return null;
	};
	console.log(allCountries)
	return (
		<ResponsiveContainer width="80%" height="30%">
			<AreaChart data={data}>
				<XAxis dataKey="name"
					tick={{ stroke: 'rgb(154 169 175)', strokeWidth: 0.5 }}
				/>
				<YAxis
					tick={{ stroke: 'rgb(154 169 175)', strokeWidth: 0.5 }}
					tickFormatter={tickFormatter}
				>
					<Label angle={-90}
						position="insideBottomLeft"
						value="M-Million/B-Billion"
						style={{ fill: 'rgb(154 169 175)', fontSize: '90%' }}
					>
					</Label>
				</YAxis>
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip content={<CustomTooltip />} />
				<Legend iconType="square" iconSize={7} />
				<Area type="monotone"
					dataKey="population"
					stroke="#8884d8"
					fillOpacity={0.5}
					fill="#171ed4"
					dot={{ stroke: 'black', strokeWidth: 1 }}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default Chart