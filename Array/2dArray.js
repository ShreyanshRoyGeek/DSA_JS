let gfg = new Array(3);
for (let i = 0; i < gfg.length; i++) {
	gfg[i] = [];
}
let h = 0;
let s = "GeeksforGeeks";


// Loop to initialize 2D array elements.
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {

		gfg[i][j] = s[h++]; 

	}
}
console.log(gfg);
