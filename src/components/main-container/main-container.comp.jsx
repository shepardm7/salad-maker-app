import React from 'react';
import { connect } from 'react-redux';

import './main-container.comp.scss';
import SectionContainer from "../section-container/section-container.comp";

const MainContainer = ({ Comp, header, props }) => {
	return (
			<div className='main-container-comp'>
				<SectionContainer header={header}>
					<Comp {...props} />
				</SectionContainer>
			</div>
	);
};

const mapStateToProps = ({ appRoute }) => ({
	header: appRoute.header,
	Comp: appRoute.Comp,
	props: appRoute.props
});

export default connect(mapStateToProps)(MainContainer);
