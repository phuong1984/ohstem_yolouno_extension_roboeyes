var roboEyesColor = '#5d2c91';

var moods = [
  ["bình thường", "0"],
  ["mệt mỏi", "1"],
  ["tức giận", "2"],
  ["hạnh phúc", "3"]
];

var positions = [
  ["trung tâm", "0"],
  ["hướng Bắc", "1"],
  ["hướng Đông Bắc", "2"],
  ["hướng Đông", "3"],
  ["hướng Đông Nam", "4"],
  ["hướng Nam", "5"],
  ["hướng Tây Nam", "6"],
  ["hướng Tây", "7"],
  ["hướng Tây Bắc", "8"]
];

Blockly.Blocks['roboeyes_create'] = {
  init: function () {
    this.jsonInit({
      colour: roboEyesColor,
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
  Blockly.Python.definitions_['import_roboeyes'] = 'from roboeyes import RoboEyes';
  Blockly.Python.definitions_['init_roboeyes'] = 'eyes = RoboEyes()';
  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var framerate = Blockly.Python.valueToCode(block, 'FRAMERATE', Blockly.Python.ORDER_ATOMIC);
  var code = 'eyes.begin(' + width + ', ' + height + ', ' + framerate + ')\n';
  return code;
};

Blockly.Blocks['roboeyes_set_width'] = {
  init: function () {
    this.jsonInit({
      colour: roboEyesColor,
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
      colour: roboEyesColor,
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
      colour: roboEyesColor,
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

Blockly.Blocks['roboeyes_set_border_radius'] = {
  init: function () {
    this.jsonInit({
	  "colour": roboEyesColor,
	  "tooltip": "Thiết lập độ tròn của mắt",
	  "message0": "Thiết lập độ tròn của mắt: trái %1 phải %2 %3",
	  "args0": [
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
	  "previousStatement": null,
	  "nextStatement": null,
	  
	  "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_border_radius'] = function (block) {
  var left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  return 'eyes.set_border_radius(' + left + ', ' + right + ')\n';
};

Blockly.Blocks['roboeyes_set_space_between'] = {
  init: function () {
    this.jsonInit({
	  "colour": roboEyesColor,
	  "tooltip": "Thiết lập khoảng trống giữa 2 mắt",
	  "message0": "Thiết lập khoảng trống giữa 2 mắt %1",
	  "args0": [
	    {
		  "type": "input_value",
		  "name": "SPACE",
		  "check": "Number"
	    }
	  ],
	  "previousStatement": null,
	  "nextStatement": null,	  
	  "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_space_between'] = function (block) {
  var space = Blockly.Python.valueToCode(block, 'SPACE', Blockly.Python.ORDER_ATOMIC);
  return 'eyes.set_space_between(' + space + ')\n';
};

Blockly.Blocks['roboeyes_set_mood'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_mood",
      "message0": "Thiết lập cảm xúc cho mắt %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MOOD",
          "options": moods
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập cảm xúc cho mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_mood'] = function (block) {
  var mood = block.getFieldValue('MOOD');
  return 'eyes.set_mood(' + mood + ')\n';
};

Blockly.Blocks['roboeyes_set_position'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_position",
      "message0": "Thiết lập vị trí của mắt %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "POSITION",
          "options": positions
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập vị trí của mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_position'] = function (block) {
  var position = block.getFieldValue('POSITION');
  return 'eyes.set_position(' + position + ')\n';
};
  
Blockly.Blocks['roboeyes_set_curiosity'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_curiosity",
      "message0": "Thiết lập chế độ tò mò %1",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "CURIOUS",
          "checked": false
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập chế độ tò mò",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_curiosity'] = function (block) {
  var curious = (block.getFieldValue('CURIOUS') === 'TRUE') ? 'True' : 'False';
  return 'eyes.set_curiosity(' + curious + ')\n';
};

Blockly.Blocks['roboeyes_open'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_open",
      "message0": "Thiết lập trạng thái mở của mắt: trái %1 phải %2",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "LEFT",
          "checked": true
        },
        {
          "type": "field_checkbox",
          "name": "RIGHT",
          "checked": true
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập trạng thái mở của mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_open'] = function (block) {
  var left = (block.getFieldValue('LEFT') === 'TRUE') ? 'True' : 'False';
  var right = (block.getFieldValue('RIGHT') === 'TRUE') ? 'True' : 'False';
  return 'eyes.open(' + left + ', ' + right + ')\n';
};
  
Blockly.Blocks['roboeyes_close'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_close",
      "message0": "Thiết lập trạng thái nhắm của mắt: trái %1 phải %2",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "LEFT",
          "checked": true
        },
        {
          "type": "field_checkbox",
          "name": "RIGHT",
          "checked": true
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập trạng thái nhắm của mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_close'] = function (block) {
  var left = (block.getFieldValue('LEFT') === 'TRUE') ? 'True' : 'False';
  var right = (block.getFieldValue('RIGHT') === 'TRUE') ? 'True' : 'False';
  return 'eyes.close(' + left + ', ' + right + ')\n';
};

Blockly.Blocks['roboeyes_anim_confused'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_anim_confused",
      "message0": "Thực hiện chuyển động nhầm lẫn",
      "args0": [
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thực hiện chuyển động nhầm lẫn",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_anim_confused'] = function (block) {
  return 'eyes.anim_confused()\n';
};

Blockly.Blocks['roboeyes_anim_laugh'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_anim_laugh",
      "message0": "Thực hiện chuyển động cười",
      "args0": [
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thực hiện chuyển động cười",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_anim_laugh'] = function (block) {
  return 'eyes.anim_laugh()\n';
};

Blockly.Blocks['roboeyes_blink'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_blink",
      "message0": "Thực hiện nháy mắt: trái %1 phải %2",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "LEFT",
          "checked": true
        },
        {
          "type": "field_checkbox",
          "name": "RIGHT",
          "checked": true
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thực hiện nháy mắt",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_blink'] = function (block) {
  var left = (block.getFieldValue('LEFT') === 'TRUE') ? 'True' : 'False';
  var right = (block.getFieldValue('RIGHT') === 'TRUE') ? 'True' : 'False';
  return 'eyes.blink(' + left + ', ' + right + ')\n';
};

Blockly.Blocks['roboeyes_set_h_flicker'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_h_flicker",
      "message0": "Nhấp nháy mắt theo phương ngang: bật %1 biên độ %2",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "FLICKER",
          "checked": false
        },
        {
          "type": "input_value",
          "name": "AMPLITUDE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Nhấp nháy mắt theo phương ngang. Biên độ là không bắt buộc",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_h_flicker'] = function (block) {
  var flicker = (block.getFieldValue('FLICKER') === 'TRUE') ? 'True' : 'False';
  var amplitude = Blockly.Python.valueToCode(block, 'AMPLITUDE', Blockly.Python.ORDER_ATOMIC) || 'None';
  return 'eyes.set_h_flicker(' + flicker + ', ' + amplitude + ')\n';
};

Blockly.Blocks['roboeyes_set_v_flicker'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_v_flicker",
      "message0": "Nhấp nháy mắt theo phương dọc: bật %1 biên độ %2",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "FLICKER",
          "checked": false
        },
        {
          "type": "input_value",
          "name": "AMPLITUDE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Nhấp nháy mắt theo phương dọc. Biên độ là không bắt buộc",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_v_flicker'] = function (block) {
  var flicker = (block.getFieldValue('FLICKER') === 'TRUE') ? 'True' : 'False';
  var amplitude = Blockly.Python.valueToCode(block, 'AMPLITUDE', Blockly.Python.ORDER_ATOMIC) || 'None';
  return 'eyes.set_v_flicker(' + flicker + ', ' + amplitude + ')\n';
};

Blockly.Blocks['roboeyes_set_autoblinker'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_autoblinker",
      "message0": "Tự động nháy mắt: bật %1 khoảng thời gian (giây) %2 biến thiên thời gian ngẫu nhiên (giây) %3",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "ACTIVE",
          "checked": true
        },
        {
          "type": "input_value",
          "name": "INTERVAL",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "VARIATION",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập tự động nháy mắt. Khoảng thời gian và biến thiên thời gian là không bắt buộc.",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_autoblinker'] = function (block) {
  var active = (block.getFieldValue('ACTIVE') === 'TRUE') ? 'True' : 'False';
  var interval = Blockly.Python.valueToCode(block, 'INTERVAL', Blockly.Python.ORDER_ATOMIC) || 'None';
  var variation = Blockly.Python.valueToCode(block, 'VARIATION', Blockly.Python.ORDER_ATOMIC) || 'None';
  return 'eyes.set_autoblinker(' + active + ', ' + interval + ', ' + variation + ')\n';
};

Blockly.Blocks['roboeyes_set_idle_mode'] = {
  init: function () {
    this.jsonInit({
      "type": "roboeyes_set_idle_mode",
      "message0": "Chế độ nhàn rỗi: bật %1 khoảng thời gian (giây) %2 biến thiên thời gian ngẫu nhiên (giây) %3",
      "args0": [
        {
          "type": "field_checkbox",
          "name": "ACTIVE",
          "checked": true
        },
        {
          "type": "input_value",
          "name": "INTERVAL",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "VARIATION",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": roboEyesColor,
      "tooltip": "Thiết lập chế độ nhàn rỗi. Khoảng thời gian và biến thiên thời gian là không bắt buộc.",
      "helpUrl": ""
    });
  }
};

Blockly.Python['roboeyes_set_idle_mode'] = function (block) {
  var active = (block.getFieldValue('ACTIVE') === 'TRUE') ? 'True' : 'False';
  var interval = Blockly.Python.valueToCode(block, 'INTERVAL', Blockly.Python.ORDER_ATOMIC) || 'None';
  var variation = Blockly.Python.valueToCode(block, 'VARIATION', Blockly.Python.ORDER_ATOMIC) || 'None';
  return 'eyes.set_idle_mode(' + active + ', ' + interval + ', ' + variation + ')\n';
};

Blockly.Python['roboeyes_update'] = function (block) {    
  var code = 'eyes.update()\n';
  return code;
};