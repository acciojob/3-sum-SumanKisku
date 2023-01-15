function threeSum(arr, target) {
  //your code here
	arr.sort();
	const n = arr.length;
	let closestSum = Number.MAX_VALUE;
	for(let i = 0; i < n - 2; i++) {
		let ptr1 = i + 1;
		let ptr2 = n - 1;
		while(ptr1<ptr2) {
			let sum = arr[i] + arr[ptr1] + arr[ptr2];
			if(Math.abs(x - sum) < abs(x - closestSum)) {
				closestSum = sum;
			}
			if(sum > x) {
				ptr2--;
			} else {
				ptr1++;
			}
		}
	}
	return closestSum;
}

module.exports = threeSum;
