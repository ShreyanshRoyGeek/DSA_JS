/*

https://www.npmjs.com/package/regression

Weekly downloads --> 150,539

regression-js


*/

// npm install --save regression

import regression from 'regression';
const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];

console.log(result.predict(7)) 


/*

regression.linear(data[, options])
Fits the input data to a straight line with the equation y = mx + c. It returns the coefficients in the form [m, c].

regression.exponential(data[, options])
Fits the input data to a exponential curve with the equation y = ae^bx. It returns the coefficients in the form [a, b].

regression.logarithmic(data[, options])
Fits the input data to a logarithmic curve with the equation y = a + b ln x. It returns the coefficients in the form [a, b].

regression.power(data[, options])
Fits the input data to a power law curve with the equation y = ax^b. It returns the coefficients in the form [a, b].

regression.polynomial(data[, options])
Fits the input data to a polynomial curve with the equation anx^n ... + a1x + a0. It returns the coefficients in the form [an..., a1, a0]. The order can be configure with the order option.

Example
const data = [[0,1],[32, 67] .... [12, 79]];
const result = regression.polynomial(data, { order: 3 });

*/


// <---------------------------------------> //




// ml-regression

// npm install ml-regression

// Weekly Downloads -> 12,927

// Import the required library

// Polynomial regression
// const PolynomialRegression = require('ml-regression').PolynomialRegression;

// Sample data: [size (in sq ft), price (in $)]


const SimpleLinearRegression = require('ml-regression').SimpleLinearRegression;
const data = [
  [650, 70000],
  [700, 75000],
  [720, 78000],
  [750, 80000],
  [800, 85000],
  [850, 90000],
  [900, 95000],
  [950, 100000]
];

// Separate the features (sizes) and labels (prices)
const sizes = data.map(item => item[0]);
const prices = data.map(item => item[1]);

// Create and train the regression model
const regression = new SimpleLinearRegression(sizes, prices);

// Predict the price of a house of size 820 sq ft
const predictedPrice = regression.predict(820);

// Output the model parameters and prediction
console.log(`Slope (m): ${regression.slope}`);
console.log(`Intercept (b): ${regression.intercept}`);
console.log(`Predicted Price for 820 sq ft: $${predictedPrice.toFixed(2)}`);




// <---------------------------------------> //


// Using TensorFlow.js for Linear Regression
// For more complex scenarios or when working with large datasets, you might want to use TensorFlow.js. Here's a brief outline of how you can set up a linear regression model using TensorFlow.js:

// npm install @tensorflow/tfjs


const tf = require('@tensorflow/tfjs');

// Define the model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Compile the model
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Training data
const xs = tf.tensor2d([650, 700, 720, 750, 800, 850, 900, 950], [8, 1]);
const ys = tf.tensor2d([70000, 75000, 78000, 80000, 85000, 90000, 95000, 100000], [8, 1]);

// Train the model
model.fit(xs, ys, {epochs: 500}).then(() => {
  // Make a prediction
  model.predict(tf.tensor2d([820], [1, 1])).print();
});



// <---------------------------------------> //



// Neural Network (nn)
// Description: A lightweight neural network library for Node.js that supports training for regression and classification tasks.


const nn = require('neural-network');

// Sample data: [feature, label]
const trainingData = [
  { input: [1], output: [2] },
  { input: [2], output: [3] },
  { input: [3], output: [5] },
  { input: [4], output: [7] }
];

// Create a new neural network with one input and one output
const network = new nn(1, 1);

// Train the network
network.train(trainingData, { iterations: 1000 });

// Predict a value
const output = network.predict([5]);
console.log(`Predicted value for input 5: ${output}`);

