const x = 11;

const color = x > 10 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;  
    case 'blue':    
    console.log('color is blue')
        break;
    default:
        console.log('Color is NOT red nor blue');   
        break;
}