/*

    Logistic regression is a statistical method used for binary classification problems, predicting a binary outcome (1/0, true/false, yes/no) based on one or more independent variables. 
    Here are some Node.js libraries that support logistic regression, along with examples:


    For simple logistic regression tasks, libraries like ml-logistic-regression and ml are straightforward and easy to use. 
    For more complex tasks, you may opt for neural network libraries like brain.js, synaptic, or TensorFlow.js, which provide more flexibility and power.


*/



// 1} ml-logistic-regression


/*
Description: A simple logistic regression implementation for Node.js. 
It supports binary logistic regression and can be used for classification tasks.
*/


const LogisticRegression = require('ml-logistic-regression');
const { Matrix } = require('ml-matrix');

// Sample data: [[feature1, feature2], ...]
const X = new Matrix([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5]
]);

// Labels: [0, 1, 0, 1, ...]
const Y = [0, 1, 0, 1];

// Create and train the model
const logreg = new LogisticRegression({ numSteps: 1000, learningRate: 5e-3 });
logreg.train(X, Y);

// Make predictions
const predictions = logreg.predict(X);
console.log('Predictions:', predictions);

// Predict new data
const newFeatures = new Matrix([[2, 3]]);
const newPrediction = logreg.predict(newFeatures);
console.log('Prediction for new data:', newPrediction);





// 2}  ml

/*
Description: A comprehensive machine learning library for Node.js, ml provides a range of algorithms, including logistic regression.
*/


const { LogisticRegression } = require('ml');

// Sample data: [[feature1, feature2], ...]
const trainingSet = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1]
];

// Labels: [0, 1, 1, 0]
const labels = [0, 1, 1, 0];

// Create and train the model
const logreg = new LogisticRegression();
logreg.train(trainingSet, labels);

// Make predictions
const predictions = trainingSet.map(features => logreg.predict(features));
console.log('Predictions:', predictions);

// Predict new data
const newPrediction = logreg.predict([1, 1]);
console.log('Prediction for new data:', newPrediction);




// 3} brain.js

/*
Description: A neural network library that can be used for both regression and classification tasks, including logistic regression. While primarily focused on neural networks, 
it can be adapted for logistic regression-like tasks using a single-layer network with a sigmoid activation function.
*/


const brain = require('brain.js');

// Create a simple neural network for logistic regression
const net = new brain.NeuralNetwork({
  activation: 'sigmoid', // Using sigmoid activation for logistic-like behavior
  hiddenLayers: [], // No hidden layers, making it similar to logistic regression
});

// Training data
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

// Train the network
net.train(trainingData, {
  iterations: 2000,
  log: true,
  logPeriod: 100
});

// Predicting
const output = net.run([1, 0]);
console.log('Prediction for [1, 0]:', output);




// 4} TensorFlow.js

/*
Description: A JavaScript library for training and deploying machine learning models in the browser and Node.js. 
TensorFlow.js can be used to implement logistic regression as part of a neural network or custom model.
*/

const tf = require('@tensorflow/tfjs');

// Training data
const trainX = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const trainY = tf.tensor2d([[0], [1], [1], [0]]);

// Define a logistic regression model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid', inputShape: [2] }));

// Compile the model
model.compile({ optimizer: 'sgd', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

// Train the model
model.fit(trainX, trainY, { epochs: 100 }).then(() => {
  // Predict a new data point
  model.predict(tf.tensor2d([[1, 0]])).print();
});



