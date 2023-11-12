import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false;
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobileS: true,
		mobileM: true,
		mobileL: true,
		tablet: true,
		laptop: true,
		laptopL: true,
		desktop: true,
		desktopL: true
	}
}

export const theme = createTheme({
    breakpoints: {
        values: {
            mobileS: 320,
            mobileM: 375,
            mobileL: 425,
            tablet: 768,
            laptop: 1024,
            laptopL: 1440,
            desktop: 1920,
            desktopL: 2560
        }
    }
});