import React from 'react';
import {connect} from 'react-redux';

import './main-container.comp.scss';
import SectionContainer from "../section-container/section-container.comp";
import Fav from "../fav/fav.comp";
import SaladMaker from "../salad-maker/salad-maker.comp";

const MainContainer = ({Comp, header, props}) => {
	const getComp = () => {
		switch(Comp) {
			case 'saladMaker':
				return <SaladMaker {...props}/>;
			default:
				return <Fav {...props} />
		}
	};
	
	return (
			<div className='main-container-comp'>
				<SectionContainer header={header}>
					{getComp()}
				</SectionContainer>
			</div>
	);
};

const mapStateToProps = ({appRoute}) => ({
	header: appRoute.header,
	Comp: appRoute.Comp,
	props: appRoute.props
});

export default connect(mapStateToProps)(MainContainer);
