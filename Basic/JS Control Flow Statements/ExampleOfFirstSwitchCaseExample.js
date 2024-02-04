const marks = 85; 

let Branch; 

switch (true) { 
	case marks >= 90: 
		Branch = "Computer science engineering"; 
		break; 
	case marks >= 80: 
		Branch = "Mechanical engineering"; 
		break; 
	case marks >= 70: 
		Branch = "Chemical engineering"; 
		break; 
	case marks >= 60: 
		Branch = "Electronics and communication"; 
		break; 
	case marks >= 50: 
		Branch = "Civil engineering"; 
		break; 
	default: 
		Branch = "Bio technology"; 
		break; 
} 

console.log(`Student Branch name is : ${Branch}`);
