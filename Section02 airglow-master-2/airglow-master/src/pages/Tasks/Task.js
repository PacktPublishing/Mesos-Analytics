import React, { PropTypes } from 'react';
import PageTitle from '../components/PageTitle';
import MosaicTable from '../components/MosaicTable';
import TaskVisualizer from '../../components/TaskVisualizer';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Tasks extends React.Component {


	static propTypes = {
		tasks: PropTypes.array.isRequired
	};

	static contextTypes = {
		onSetTitle: PropTypes.func.isRequired
	};

	render() {
		const styles = {
			headline: {
				fontSize: 24,
				paddingTop: 16,
				marginBottom: 12,
				fontWeight: 
			}
		}
	}




}

