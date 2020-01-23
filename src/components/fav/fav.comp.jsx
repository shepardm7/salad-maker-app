import React from 'react';
import {connect} from "react-redux";

import PropTypes from 'prop-types';
import './fav.styles.scss';
import Button from "../button/button.comp";
import SectionFooter from "../section-footer/section-footer.comp";

const Fav = props => {
	return (
			<div className='fav-comp'>
				<div className="list-container">
				
				</div>
				{/*<div className="section-footer cart-footer">*/}
				{/*	<Button label="Add" onClick={() => {}} color='danger' isInverse />*/}
				{/*</div>*/}
				<SectionFooter>
					<Button label="Cancel" onClick={''} isInverse />
					<Button label="Add Salad" onClick={''} />
				</SectionFooter>
			</div>
	);
};

Fav.propTypes = {

};

export default Fav;
