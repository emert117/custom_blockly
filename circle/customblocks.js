// block definition
// light switch block - turn on color on or off

Blockly.Blocks['lightswitch'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Renk Ayarı")
            .appendField(new Blockly.FieldDropdown([["red","R"], ["green", "G"]]), "lightcolor")
            .appendField(new Blockly.FieldDropdown([["on","on"], ["off", "off"]]), "switch");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
}

// generator stub
Blockly.JavaScript['lightswitch'] = function(block) {
    var dropdown_lightcolor = block.getFieldValue('lightcolor');
    var dropdown_switch = block.getFieldValue('switch');
    if (dropdown_switch == "on") {
        if (dropdown_lightcolor == "R") {
            var code = "document.getElementById('circle').style.backgroundColor='red';"
        }
        if (dropdown_lightcolor == "G") {
            var code = "document.getElementById('circle').style.backgroundColor='green';"
        }
    }
    if (dropdown_switch == "off") {
        var code = "document.getElementById('circle').style.backgroundColor='white';"
    }

    return code;
}