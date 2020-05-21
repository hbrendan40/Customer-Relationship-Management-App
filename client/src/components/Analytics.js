import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import PieChart from './Charts/PieChart';
import BarChart from './Charts/BarChart';
import MultiAreaChart from './Charts/MultiSeriesAreaChart';
import ColumnAreaChart from './Charts/ColumnAreaChart';
import SplineChart from './Charts/SplineChart';



import './style/Analytics.css'
 
class Analytics extends Component {
	render() {
	
		return (
		<div className="newcontainer">
			{/* Row 1 */}
			<Row>
				<div className="squares"> <PieChart/></div>
				<div className="rectangles">	<BarChart/></div>
				
			</Row>
			
			{/* Row 2 */}
			<Row>
				<div className="card"><MultiAreaChart/></div>
				<div className="card"><ColumnAreaChart/></div>
				<div className="card"><SplineChart/></div>
			</Row>


			




		

		</div>
		);
	}
}

export default Analytics;