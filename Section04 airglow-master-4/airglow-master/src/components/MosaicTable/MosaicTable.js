import React, { PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

class MosaicTable extends React.Component {

	static propTypes = {
		tasks: PropTypes.array.isRequired
	};

	//to-do constructor

	setParameterToOrderBy(e) {
		this.setState({parameterToOrderBy: e.target.value});

	}

	orderTasksByParameter(tasks = [], parameterToOrderBy= 'timestamp') {
		var parameter = parameterToOrderBy;
		tasks.sort(function(a,b) {

			if(a[parameter] < b[parameter]) {
				return 1;
			}

			if (a[parameter] > b[parameter]){
				return -1;
			}

			return 0;


		});

		return tasks;
	}

	renderOrderBox() {

		return(
			<div style={this.getStyles().orderBox}>


			)
	}

	getStyles() {
		return {
			radioButton: {
				width: 150,
				float: 'left'
			}, 
			orderBox: {
				height:30,
				padding: 20
			}
		};
	}

	timeSince(date){

		var seconds = Math.floor((new Date() - date*1000) / 1000);

		var interval = Math.floor(seconds/31536000);

		if(interval > 1) {
			return interval + 'years';
		}

		interval = Math.floor(seconds/ 2592000);
		if (interval > 1) {
			return interval + 'months';
		}
		interval = Math.floor(seconds / 86400);
   		 if (interval > 1) {
    	  return interval + ' days';
   	 }
    	interval = Math.floor(seconds / 3600);
    	if (interval > 1) {
      return interval + ' hours';
    }
    	interval = Math.floor(seconds / 60);
    	if (interval > 1) {
     	 retur(interval + ' minutes';
    }
    	return Math.floor(seconds) + ' seconds';
  }







	















}