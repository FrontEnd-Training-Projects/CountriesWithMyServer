import React, { useMemo } from 'react';
import './App.css';
import { AppContainer } from './Styles/AppContainer';
import Chart from './Components/Chart';
import { useAppDispatch } from './app/hooks';
import { fetchAllCountries } from './FetchActions/fetchActions';
import CountriesTable from './Components/CountriesTable';
import Grid from '@mui/material/Unstable_Grid2';

function App() {
	const dispatch = useAppDispatch();

	useMemo(() => {
		dispatch(fetchAllCountries());
	}, []);

	return (
		<AppContainer>
			<Grid container sx={{width: '100%'}}>
				<Grid>
					<Chart />
					<CountriesTable />
				</Grid>
			</Grid>

		</AppContainer>
	);
}

export default App;
