(function() {
  var synaptic = require('synaptic');
  
  function hopfield(size) {
    var input = new synaptic.Layer(size);
    var output = new synaptic.Layer(size);

    input.project(output, synaptic.Layer.connectionType.ALL_TO_ALL);

    this.set({
      input: input,
      hidden: [],
      output: output
    });

    var trainer = new synaptic.Trainer(this);

    this.learn = function(patterns) {
      var set = [];
      for (var p in patterns)
        set.push({
          input: patterns[p],
          output: patterns[p]
        });

      return trainer.train(set, {
        iterations: 500000,
        error: .00005,
        rate: 1
      });
    }

    this.feed = function(pattern) {
      var output = this.activate(pattern);

      var pattern = [],
          error = [];
      for (var i in output) {
        error[i] = output[i] > .5 ? 1 - output[i] : output[i];
        pattern[i] = output[i] > .5 ? 1 : 0;
      }

      return {
        pattern: pattern,
        error: error
          // average output error
          .reduce(function(a, b) {
            return a + b;
          }) / error.length
      };
    }
  }

  hopfield.prototype = new synaptic.Network();
  hopfield.prototype.constructor = hopfield;
  
  module.exports.hopfield = hopfield;
})();