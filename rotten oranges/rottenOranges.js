const orangesRotting = grid => {
	let minutes = 0;
	const spreadRot = currGrid => {
			let rottenArr = [];
			let freshCount = 0;
			let isComplete = true;
			//     count number of fresh orange
			//     save position of all rotten and iterate
			currGrid.forEach((row,i) => {
				 row.forEach((col,j) => {
						 let orange = currGrid[i][j];
						 if (orange === 1) {
								 freshCount++;
						 } else if (orange === 2) {
								 rottenArr.push([i,j]);
						 }
				 });
			});
			
			//iterate through all rotten
			rottenArr.forEach(rotten => {
					let rotRow = rotten[0];
					let rotCol = rotten[1];
					if (rotRow > 0) {
						if (currGrid[rotRow-1][rotCol] === 1) {
							currGrid[rotRow-1][rotCol] = 2;
							isComplete = false;
						}
					}
					if (rotRow < grid.length-1) {
						if (currGrid[rotRow+1][rotCol] === 1) {
							currGrid[rotRow+1][rotCol] = 2;
							isComplete = false;
						}
					}
					if (rotCol > 0) {
						if (currGrid[rotRow][rotCol-1] === 1) {
							currGrid[rotRow][rotCol-1] = 2;
							isComplete = false;
						}
					}
					if (rotCol < grid[0].length-1) {
						if (currGrid[rotRow][rotCol+1] === 1) {
							currGrid[rotRow][rotCol+1] = 2;
							isComplete = false;
						}
					}
			});
			// console.log(isComplete, freshCount, minutes);
			if (isComplete && freshCount > 0) {
				return -1;
			}
			if (isComplete || freshCount === 0) {
					return minutes;
			} else {
					minutes++;
					return spreadRot(currGrid);
			}
	}
	return spreadRot(grid);
};
