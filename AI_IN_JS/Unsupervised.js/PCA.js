/*
Principal Component Analysis (PCA) is a popular dimensionality reduction technique used to reduce the number of variables in a dataset while retaining as much information as possible. 
It achieves this by transforming the original variables into a new set of orthogonal variables called principal components, which are ordered by the amount of variance they capture from the data.

In Node.js, PCA can be implemented using libraries that provide mathematical and statistical functions. Here are some popular libraries and examples of how to perform PCA in Node.js:
*/


// 1. ml-pca
// Description: A dedicated library for performing PCA, providing easy-to-use interfaces and comprehensive functionality.

// npm install ml-pca


const PCA = require('ml-pca');

// Sample data
const data = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
];

// Create PCA instance
const pca = new PCA(data);

// Get principal components
const principalComponents = pca.predict(data);

console.log('Principal Components:');
console.log(principalComponents);

// Explained variance
const explainedVariance = pca.getExplainedVariance();
console.log('Explained Variance:');
console.log(explainedVariance);

// Cumulative explained variance
const cumulativeVariance = pca.getCumulativeVariance();
console.log('Cumulative Explained Variance:');
console.log(cumulativeVariance);



// 2. PCA-js
// Description: A simple JavaScript library for PCA, suitable for small datasets and straightforward applications.

// npm install pca-js


const PCA = require('pca-js');

// Sample data
const data = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
];

// Perform PCA
const pca = new PCA();
const results = pca.pca(data, 2); // Reduce to 2 principal components

console.log('Principal Components:');
console.log(results[0]);

console.log('Explained Variance:');
console.log(results[2]);



// 3. ml-matrix
// Description: A general-purpose library for matrix operations, which can be used to implement PCA manually.

// npm install ml-matrix

const { Matrix, SingularValueDecomposition } = require('ml-matrix');

// Sample data
const data = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
];

// Center the data by subtracting the mean
const matrix = new Matrix(data);
const mean = matrix.mean('column');
const centeredData = matrix.subRowVector(mean);

// Perform Singular Value Decomposition (SVD)
const svd = new SingularValueDecomposition(centeredData, { computeLeftSingularVectors: true, computeRightSingularVectors: true });

// Extract the principal components
const principalComponents = svd.leftSingularVectors;
console.log('Principal Components:');
console.log(principalComponents.to2DArray());

// Extract the explained variance
const eigenvalues = svd.diagonal;
const totalVariance = eigenvalues.reduce((acc, val) => acc + val, 0);
const explainedVariance = eigenvalues.map(eigenvalue => eigenvalue / totalVariance);

console.log('Explained Variance:');
console.log(explainedVariance);



// 4. scikit.js
// Description: A library inspired by scikit-learn, providing various machine learning tools including PCA.

// npm install scikitjs

const { PCA } = require('scikitjs');
const nj = require('numjs');

// Sample data
const data = nj.array([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
]);

// Create PCA instance
const pca = new PCA();

// Fit PCA and transform data
const reducedData = pca.fit_transform(data);

console.log('Principal Components:');
console.log(reducedData.toArray());

// Explained variance
console.log('Explained Variance:');
console.log(pca.explained_variance_ratio_.toArray());



/*
The libraries ml-pca and PCA-js provide straightforward implementations of PCA, suitable for most use cases. ml-matrix allows for a more manual and customizable approach to PCA by leveraging matrix operations and singular value decomposition. 
scikit.js offers a broader range of machine learning tools, including PCA, and is inspired by the popular Python library scikit-learn.

When selecting a library, consider factors such as ease of use, flexibility, and the size of your dataset. These libraries can help you reduce dimensionality and extract meaningful patterns from your data in a Node.js environment.
*/



