(function() {
  var set = [
    '000000001111111100000000', // Green
    '000000000000000000000000' // Black
  ];
  
  module.exports.set = set
    /// e.g. '1111' => [1, 1, 1, 1]
    .map(function(color) {
      return color.split('').map(Number);
    });
})();