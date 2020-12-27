import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,
        colors: {
        	primary: string,
          secundary: string,
          tertiary: string,
          
          black: string,
          white: string,
          grey: string,
          
          success: string,
          info: string,
          warning: string,                             }
	}
}
