<?php
fscanf(STDIN, "%d %d", $A, $B);

echo f($A-1) ^ f($B);

function f($n) {
	switch(fmod($n, 4)) {
	case 0:
		return $n;
	case 1:
		return 1;
	case 2:
		return $n+1;
	case 3:
		return 0;
	}

	return 0;
}
