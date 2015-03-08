(function() {
  function toBinary(array) {
    return array
      // convert RGB components to 8-bit
      .map(function(component) {
        return ('00000000' + component.toString(2)).substr(-8).split('').map(Number);
      })
      // concatenate to 24-bit
      .reduce(function(previous, current) {
        return previous.concat(current);
      });
  }
  
  function toRGB(array) {
    var temp = array.slice(0),
        output = [],
        i;

    // convert 24-bit to 8-bit
    while(temp.length > 0)
      output.push(temp.splice(0, 8));

    // convert 8-bit to RGB components
    for(i in output)
      output[i] = parseInt(output[i].join(''), 2);
    
    return output;
  }
  
  module.exports.toBinary = toBinary;
  module.exports.toRGB = toRGB;
})();