import React from 'react';
import {Grid} from './style';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = ()=> {
	return (
		<>
			<Grid>
			<Aside/>
			<MainHeader/>
			<Content/>
		</Grid>
		</>
	);
}

export default Layout;
