// to tell how many entries there are:
    var numberOfMIDIInputs = inputs.size;

    // add each of the ports to a <select> box
    inputs.forEach( function( key, port ) {
      var opt = document.createElement("option");
      opt.text = port.name;
      document.getElementById("inputportselector").add(opt);
    });

    // or you could express in ECMAScript 6 as:
    for (let input of inputs.values()) {
      var opt = document.createElement("option");
      opt.text = input.name;
      document.getElementById("inputportselector").add(opt);
    }
