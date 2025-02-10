function GRU(inputSize, hiddenSize) {

	this.inputSize = inputSize;
	this.hiddenSize = hiddenSize;

	/**
	 * 
	 * @param number[] A 
	 * @param number[] B 
	 * 
	 * _________
	 * | a b c |   | 1 |   |a+2b+3c|
	 * | d e f | x | 2 | = | 
	 * | g h i |   | 3 |   | 
	 * 
	 */

	const vetmul = (a,b) => {
		if(!a.length) {
			throw new Error("a is not a vector");
		}
		if(!b.length) {
			throw new Error("b is not a vector");
		}

		if(a.length != b.length) {
			throw new Error("a and b should have same lengths");
		}

		return a.reduce((curr,val,index) => {
			return curr += val * b[index];
		},0)
	}

	
	const matmul = (A,B) => {
		console.table(A);
		console.table(B);
		const result = []
		for(let r = 0; r < A.length; r++) {
			if(B[0].length) {
				// maybe a matrix
				result[r] = [];
				for(let c = 0; c < B[0].length; c++) {
					result[r][c] = vetmul(A[r], A[r].map((v,i) => B[i][c]))
				}
			} else {
				// maybe a vector
				result[r] = vetmul(A[r], B)
			}
		}
		return result
	}

	



	const sigmoid = x => 1 / (1 + Math.exp(-x))

	const Wz = [];
	const Wr = [];
	const Wh = [];


	for (let i = 0; i < hiddenSize; i++) {
		Wz[i] = []
		Wr[i] = []
		Wh[i] = []
		for (let j = 0; j < inputSize; j++) {
			Wz[i][j] = Math.random() * 2 - 1
			Wr[i][j] = Math.random() * 2 - 1
			Wh[i][j] = Math.random() * 2 - 1
		}
	}



	


	return (input) => {

		// console.log(MatrixProd(Wz, input[0]))
		let ht = 0;
		let zt = 0;





	}


}

const input = [
	[[.1, 1]],
	[.2, 2],
	[.3, 3],
]

const gru = GRU(2, 10);

const out = gru(input);
console.log(out)
