(function(log) {
  var fs = require('fs'),
      png = require('pngjs').PNG,
      network = require('./network.js'),
      tools = require('./tools.js');
  
  var colors = [
    '111111111111111111111111', // white
    '000000000000000000000000' // black
  ];
  
  colors = colors
    // e.g. '1111' => [1, 1, 1, 1]
    .map(function(color) {
      return color.split('').map(Number);
    });
  
  // 24-bit hopfield network
  var hopfield = new network.hopfield(24);
  
  log('learning ...');
  
  hopfield.learn(colors);
  
  log('done');
  log();

  fs.readdir(__dirname + '/input', function(error, files) {
    var input,
        output,
        index,
        x, y;

    var source = [],
        destination = [];

    files.forEach(function(file, i) {
      // only accept png
      if(file.split('.').pop() !== 'png') {
        log('[' + (i + 1) + '] ignored ' + file);
        return;
      }
      
      log('[' + (i + 1) + '] processing ' + file + ' ...');

      fs.createReadStream(__dirname + '/input/' + file)
        .pipe(new png({
          filterType: 4
        }))
        .on('parsed', function() {
          var distribution = {},
              hash;
          for(y = 0; y < this.height; y++) {
            for(x = 0; x < this.width; x++) {
              index = (this.width * y + x) << 2;

              // skip if completely transparent
              if(!this.data[index + 3])
                continue;

              source = [
                this.data[index],
                this.data[index + 1],
                this.data[index + 2]
              ];

              input = tools.toBinary(source);
              output = hopfield.feed(input);
              destination = tools.toRGB(output.pattern);
              
              this.data[index] = destination[0];
              this.data[index + 1] = destination[1];
              this.data[index + 2] = destination[2];
              this.data[index + 3] = Math.round(255 * (1 - output.error));
              
              hash = output.pattern.join('');
              if(!distribution[hash])
                distribution[hash] = 0;
              
              distribution[hash]++;
            }
          }
        
          var length = 0;
          for(var key in distribution)
            length += distribution[key];
        
          for(var key in distribution)
            distribution[key] /= length;

          this
            .pack()
            .pipe(
              fs.createWriteStream(__dirname + '/output/' + file)
                .on('close', function(i) {
                  log('[' + (i + 1) + '] ... done');
                  log('[' + (i + 1) + '] network output distribution:');
                  log(distribution);
                  log();
                }.bind(null, i))
            );
        });
    });
    
    log();
  });
})(console.log);