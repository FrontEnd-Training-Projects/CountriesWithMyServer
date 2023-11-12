import React, { useMemo } from 'react';
import './App.css';
import { AppContainer } from './Styles/AppContainer';
import Chart from './Components/Chart';
import { useAppDispatch } from './app/hooks';
import { fetchAllCountries } from './FetchActions/fetchActions';
import CountriesTable from './Components/CountriesTable';
import Grid from '@mui/material/Unstable_Grid2';
import { theme } from './Utils/theme';
import { ThemeProvider } from '@mui/material';

function App() {
	const dispatch = useAppDispatch();

	useMemo(() => {
		dispatch(fetchAllCountries());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<AppContainer>
				<Grid container sx={{ width: '100%'}}>
					<Grid mobileS={11} mobileSOffset={0.5}
						tablet={10} tabletOffset={1}
					>
						<Chart />
						<CountriesTable />
					</Grid>
				</Grid>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
