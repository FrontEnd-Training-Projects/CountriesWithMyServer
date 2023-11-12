import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { columns } from '../Utils/columnsConstants';
import { checkLabelForRendering } from '../Functions/TableFunctions';
import { CountryFlags } from '../Types/CountryTypes';
import { putPage, putRowsPerPage } from '../Reducers/pagesReducer';
import MenuTable from './MenuTable';

const CountriesTable = () => {
	const allCountries = useAppSelector(state => state.allCountriesReducer);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const dispatch = useAppDispatch();

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
		dispatch(putPage(newPage));
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
		dispatch(putRowsPerPage(+event.target.value));
		dispatch(putPage(0));
	};

	return (
		<Grid container sx={{ width: '100%'}}>
			<Grid mobileS={12}>
				{/* <SearchAndFilter {...countries} /> */}
				<Paper sx={{ width: '100%', minHeight: '300px', overflow: 'hidden', marginTop: '20px' }}>
					<TableContainer sx={{ maxHeight: 540 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											style={{ minWidth: column.minWidth }}
											align={column.align}
										>
											{column.label}
											{checkLabelForRendering(column.label) && <MenuTable label={column.label} />}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{allCountries
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => {
										return (
											<TableRow key={row.name}>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															{(column.formatFlag && !Array.isArray(value) && column.formatFlag(value as CountryFlags))
																|| (column.formatUtc && Array.isArray(value) && column.formatUtc(value as Array<string>))
																|| value.toLocaleString()}
														</TableCell>
													)
												})}
											</TableRow>
										)
									})
								}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						sx={{ minHeight: '10px' }}
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={allCountries.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper >
			</Grid>
		</Grid>
	)
}

export default CountriesTable	