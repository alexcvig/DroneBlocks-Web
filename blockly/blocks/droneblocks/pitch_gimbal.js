Blockly.Blocks['pitch_gimbal_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pitch gimbal to")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["-15", "-15"], ["-30", "-30"], ["-45", "-45"], ["-60", "-60"], ["-75", "-75"], ["-90", "-90"]]), "angle")
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};