var counter = 0;

// module.exports.counterStep = function () {
// 	counter++;
// };

// module.exports.displayCounter = function () {
// 	console.log('Counter is', counter);
// };

module.exports = function () {
	console.log(module);
	counter++;
	console.log('Counter is', counter);
};