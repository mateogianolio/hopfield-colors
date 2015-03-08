(function(log) {
  var fs = require('fs'),
      png = require('pngjs').PNG,
      colors = require(__dirname + '/colors.js'),
      network = require(__dirname + '/network.js');
  
  // 24-bit hopfield network
  var hopfield = new network.hopfield(24);
  
  log('learning ...');
  
  hopfield.learn(colors.set);
  
  log('done');
  log();

  fs.readdir(__dirname + '/input', function(error, files) {
    var input,
        output,
        index,
        x, y,
        j;

    var source = [],
        destination = [],
        byte = 8;

    files.forEach(function(file, i) {
      // ignore dotfiles and only accept png
      if(file[0] === '.' || file.split('.').pop() !== 'png') {
        log('[' + (i + 1) + '] ignored ' + file);
        return;
      }
      
      log('[' + (i + 1) + '] processing ' + file + '...');

      fs.createReadStream(__dirname + '/input/' + file)
        .pipe(new png({
          filterType: 4
        }))
        .on('parsed', function() {
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

              input = source
                // convert RGB components to 8-bit
                .map(function(component) {
                  return ('00000000' + component.toString(2)).substr(-byte).split('').map(Number);
                })
                // concatenate to 24-bit
                .reduce(function(previous, current) {
                  return previous.concat(current);
                });

              // feed network
              output = hopfield.feed(input);
              
              destination = [];
              
              // convert 24-bit to 8-bit
              while(output.pattern.length > 0)
                destination.push(output.pattern.splice(0, byte));

              // convert 8-bit to RGB components
              for(j in destination)
                destination[j] = parseInt(destination[j].join(''), 2);
              
              this.data[index] = destination[0];
              this.data[index + 1] = destination[1];
              this.data[index + 2] = destination[2];
              this.data[index + 3] = 255 * (1 - output.error);
              
              // if black, set transparent
            }
          }

          this
            .pack()
            .pipe(
              fs.createWriteStream(__dirname + '/output/' + file)
                .on('close', function(i) {
                  log('[' + (i + 1) + '] done');
                }.bind(null, i))
            );
        });
    });
    
    log();
  });
})(console.log);