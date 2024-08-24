/*

Support Vector Machines (SVMs) are a powerful supervised machine learning algorithm used for classification and regression tasks. In Node.js, there are several libraries available that allow you to implement SVMs. 
Here are a few libraries and example

*/


// 1. Libsvm-js
// Description: A JavaScript binding for the popular LIBSVM library, which is widely used for implementing SVMs.

// npm install libsvm-js


const { SVM } = require('libsvm-js');

// Training data: [features], label
const trainingData = [
  [[0, 0], 0],
  [[1, 1], 1],
  [[1, 0], 1],
  [[0, 1], 1]
];

// Create an SVM classifier
const svm = new SVM({
  type: SVM.SVM_TYPES.C_SVC,
  kernel: SVM.KERNEL_TYPES.RBF,
  gamma: 0.5,
  cost: 1
});

// Train the SVM
const features = trainingData.map(item => item[0]);
const labels = trainingData.map(item => item[1]);
svm.train(features, labels);

// Predict new data
const prediction = svm.predict([0.5, 0.5]);
console.log(`Prediction for [0.5, 0.5]: ${prediction}`);




// 2. ml-svm
// Description: A simple SVM implementation for Node.js, suitable for educational purposes and small-scale projects.

// npm install ml-svm

const SVM = require('ml-svm');

// Training data: [features], label
const trainingSet = [
  [[0, 0], 0],
  [[1, 1], 1],
  [[1, 0], 1],
  [[0, 1], 1]
];

// Separate features and labels
const features = trainingSet.map(item => item[0]);
const labels = trainingSet.map(item => item[1]);

// Create and train the SVM
const options = {
  kernel: 'rbf', // Radial basis function kernel
  gamma: 1,
  cost: 1
};
const svm = new SVM(options);

svm.train(features, labels);

// Predict new data
const prediction = svm.predict([0.5, 0.5]);
console.log(`Prediction for [0.5, 0.5]: ${prediction}`);




// 3. svm-js
// Description: A lightweight library for SVM in JavaScript, focused on ease of use and clarity.

// npm install svm-js

const SVM = require('svm-js');

// Training data: [features], label
const trainingSet = [
  [[0, 0], 0],
  [[1, 1], 1],
  [[1, 0], 1],
  [[0, 1], 1]
];

// Separate features and labels
const features = trainingSet.map(item => item[0]);
const labels = trainingSet.map(item => item[1]);

// Create and train the SVM
const svm = new SVM({ C: 1, tol: 1e-4 });
svm.train(features, labels);

// Predict new data
const prediction = svm.predict([0.5, 0.5]);
console.log(`Prediction for [0.5, 0.5]: ${prediction}`);




// 4. Brain.js
// Description: While primarily known for neural networks, Brain.js also supports various machine learning algorithms, including SVMs, through customizable layers and activation functions.


// npm install brain.js

const brain = require('brain.js');

// Training data: { input: [features], output: [label] }
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [1, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [0, 1], output: [1] }
];

// Configure the neural network to approximate SVM behavior
const net = new brain.NeuralNetwork({
  activation: 'sigmoid',
  hiddenLayers: [10] // Can be adjusted for complexity
});

// Train the network
net.train(trainingData);

// Predict new data
const output = net.run([0.5, 0.5]);
console.log(`Prediction for [0.5, 0.5]: ${output}`);




// 5. TensorFlow.js
// Description: A comprehensive library for machine learning in JavaScript, capable of implementing SVMs using custom layers and kernels.

// npm install @tensorflow/tfjs


const tf = require('@tensorflow/tfjs');

// Training data: [features, label]
const trainingData = {
  xs: tf.tensor2d([[0, 0], [1, 1], [1, 0], [0, 1]]),
  ys: tf.tensor2d([[0], [1], [1], [1]])
};

// Define an SVM model (simple linear model in this case)
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid', inputShape: [2] }));

// Compile the model
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Train the model
model.fit(trainingData.xs, trainingData.ys, { epochs: 100 }).then(() => {
  // Predict new data
  model.predict(tf.tensor2d([[0.5, 0.5]])).print();
});



/*
Each of these libraries offers unique features and ease of use for implementing SVMs in Node.js. 
Libsvm-js and ml-svm are specifically tailored for SVMs, providing straightforward APIs for training and prediction. 
svm-js offers a lightweight alternative, while Brain.js and TensorFlow.js provide more extensive frameworks that can also be configured to perform SVM-like classification tasks through neural networks.

When choosing a library, consider the complexity of your problem, the size of your data, and the specific features you need, 
such as support for different kernel functions or ease of integration with other tools and libraries.
*/
