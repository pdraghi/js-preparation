var capitalizarPrimeraLetra = () => {
    const str = 'capitalice la primera letra de cada palabra';
    
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        
    }
    console.log(splitStr.join(' '));
    return splitStr.join(' ');
}