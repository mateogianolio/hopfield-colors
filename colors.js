(function() {
  var set = [
    '111111110000000000000000', // Red
    '000000001111111100000000', // Green
    '000000000000000011111111', // Blue
    '000000000000000000000000' // Black
  ];
  
  module.exports.set = set
    /// e.g. '1111' => [1, 1, 1, 1]
    .map(function(color) {
      return color.split('').map(Number);
    });
})();