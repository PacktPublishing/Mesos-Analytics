"use strict";


function transform(real, imag) {
	if (real.length != imag.length)
		throw "Mismatched lengths";

	var n = real.length;
	if (n ==0)
		return;
	else if ((n & (n - 1)) == 0) // Is it power of 2?
		//transformRadix2
	else
		//arbitrary size transform
}

class Metrics {

	constructor(values){
		this.len = values.length;
		this.values = values;
		this.m = Metrics.mean(values);
	}

	static mean(values){
		var m=0;
		for (var i=0; i < values.length; i += 1) {
			m += values[i];
		}

		return m / values.length;
	}

	static std(values) {
		var m = Metrics.mean(values);
		var std = 0;
		for (var i=0; i < values.length; i += 1) {
			std += Math.pow((values[i] - m), 2);
		}

		return Math.sqrt(std / values.length);
	}


	solitons() {

		var u4 = 0, variance = 0;
		for (var i = 0; i < this.len; i++) {
			u4 += Math.pow((this.values[i] - this.m), 4);
			variance += Math.pow((this.values[i] - this.m), 2);
		}

		return this.len * u4 / Math.pow(variance, 2);

	}

	roughness() {
		return Metrics.std(this.diffs());
	}

	diffs() {
		var diff = new Array(this.len - 1);
		for (var i = 1; i < this.len; i += 1){
			diff[i-1] = this.values[i] - this.values[i-1];
		}
		return diff;
	}




}