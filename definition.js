
Blockly.Blocks['roboeyes_create'] = {
  init: function () {
    this.jsonInit({
      colour: '#5d2c91',
      tooltip: 'Khởi tạo cặp mắt cho robot trong màn hình oled',
      message0: 'Tạo cặp mắt robot với màn hình oled - rộng %1 cao %2 tốc độ khung hình %3',
      args0: [
        {
          type: 'input_value',
          name: 'WIDTH',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'HEIGHT',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'FRAMERATE',
          check: 'Number'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: '',
    });
  }
};

Blockly.Python['roboeyes_create'] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['import_roboeyes'] = 'from roboeyes import RoboEyes';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  Blockly.Python.definitions_['init_roboeyes'] = 'eyes = RoboEyes(oled)';
  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var framerate = Blockly.Python.valueToCode(block, 'FRAMERATE', Blockly.Python.ORDER_ATOMIC);
  var code = 'eyes.begin(' + width + ', ' + height + ', ' + framerate + ')\n';
  return code;
};

Blockly.Blocks['roboeyes_set_width'] = {
  init: function () {
    this.jsonInit({
	colour: '#5d2c91',
	tooltip: "Thiết lập chiều rộng cho mắt",
	message0: "Thiết lập chiều rộng cho mắt: trái %1 phải %2 %3",
	args0: [	  
	  {
		"type": "input_value",
		"name": "LEFT",
		"check": "Number"
	  },
	  {
		"type": "input_value",
		"name": "RIGHT",
		"check": "Number"
	  },
	  {
	    type: "input_dummy"
	  }
	],
	previousStatement: null,
	nextStatement: null,	
	helpUrl: ""
  });
}
};

Blockly.Python['roboeyes_set_width'] = function (block) {
  var left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = 'eyes.set_width(' + left + ', ' + right + ')\n';
  return code;
};

Blockly.Blocks['roboeyes_set_height'] = {
  init: function () {
    this.jsonInit({
	colour: '#5d2c91',
	tooltip: "Thiết lập chiều cao cho mắt",
	message0: "Thiết lập chiều cao cho mắt: trái %1 phải %2 %3",
	args0: [	  
	  {
		"type": "input_value",
		"name": "LEFT",
		"check": "Number"
	  },
	  {
		"type": "input_value",
		"name": "RIGHT",
		"check": "Number"
	  },
	  {
        type: "input_dummy"
      }
	],
	previousStatement: null,
	nextStatement: null,	
	helpUrl: ""
  });
}
};

Blockly.Python['roboeyes_set_height'] = function (block) {
  var left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = 'eyes.set_height(' + left + ', ' + right + ')\n';
  return code;
};

Blockly.Blocks['roboeyes_update'] = {
  init: function () {
    this.jsonInit({
      colour: '#5d2c91',
      tooltip: "Cập nhật hiển thị mắt cho robot",
      message0: "Cập nhật hiển thị mắt cho robot",
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,      
      helpUrl: ""
    });
  }
};

Blockly.Python['roboeyes_update'] = function (block) {    
  var code = 'eyes.update()\n';
  return code;
};