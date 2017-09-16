import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui//utils/colorManipulator';
import {
	pinkA100,
	pinkA200,
	pinkA400,
	cyan500,
	cyan700,
	grey100,
	grey300,
	grey400,
	grey500,
	grey600,
	darkBlack,
	fullBlack,
	fullWhite,
	white
} from 'material-ui/styles/colors';

export const muiThemeLight = getMuiTheme({
	palette: {
		primary1Color: cyan500,
		primary2Color: cyan700,
		primary3Color: grey400,
		accent1Color: pinkA200,
		accent2Color: grey100,
		accent3Color: grey500,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade(darkBlack, 0.3),
		pickerHeaderColor: cyan500,
		clockCircleColor: fade(darkBlack, 0.07),
		shadowColor: fullBlack
	}
});

export const muiThemeDark = getMuiTheme({
	palette: {
		primary1Color: cyan700,
		primary2Color: cyan700,
		primary3Color: grey600,
		accent1Color: pinkA200,
		accent2Color: pinkA400,
		accent3Color: pinkA100,
		textColor: fullWhite,
		secondaryTextColor: fade(fullWhite, 0.7),
		alternateTextColor: '#303030',
		canvasColor: '#303030',
		borderColor: fade(fullWhite, 0.3),
		disabledColor: fade(fullWhite, 0.3),
		pickerHeaderColor: fade(fullWhite, 0.3),
		clockCircleColor: fade(fullWhite, 0.12)
	}
});
