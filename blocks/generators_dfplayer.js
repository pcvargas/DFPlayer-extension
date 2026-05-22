Blockly.Python['dfplayer_setup'] = function(block) {
  var value_tx = block.getFieldValue('tx');
  var value_rx = block.getFieldValue('rx') || '34'; // Ajustado el fallback a '34' (IN3)
  
  Blockly.Python.definitions_['import_machine_uart'] = 'import machine';

  Blockly.Python.definitions_['class_dfplayer_mini_driver'] = 
    'class DFPlayerMini:\n' +
    '    def __init__(self, tx_p, rx_p):\n' +
    '        self.uart = machine.UART(2, baudrate=9600, tx=tx_p, rx=rx_p)\n' +
    '    def send(self, cmd, param=0):\n' +
    '        ph = (param >> 8) & 0xFF\n' +
    '        pl = param & 0xFF\n' +
    '        chk = 0xFFFF - (0xFF + 0x06 + cmd + 0x00 + ph + pl) + 1\n' +
    '        ch = (chk >> 8) & 0xFF\n' +
    '        cl = chk & 0xFF\n' +
    '        self.uart.write(bytes([0x7E, 0xFF, 0x06, cmd, 0x00, ph, pl, ch, cl, 0xEF]))\n' +
    '    def play(self, t): self.send(0x03, int(t))\n' +
    '    def volume(self, v): self.send(0x06, max(0, min(30, int(v))))\n' +
    '    def next(self): self.send(0x01)\n' +
    '    def prev(self): self.send(0x02)\n' +
    '    def pause(self): self.send(0x0E)\n' +
    '    def resume(self): self.send(0x0D)\n' +
    '    def stop(self): self.send(0x16)\n';

  var code = `df_mp3 = DFPlayerMini(${value_tx}, ${value_rx})\n`;
  return code;
};

Blockly.Python['dfplayer_play'] = function(block) {
  var value_track = Blockly.Python.valueToCode(block, 'track', Blockly.Python.ORDER_ATOMIC) || '1';
  var code = `df_mp3.play(${value_track})\n`;
  return code;
};

Blockly.Python['dfplayer_volume'] = function(block) {
  var value_vol = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC) || '15';
  var code = `df_mp3.volume(${value_vol})\n`;
  return code;
};

Blockly.Python['dfplayer_control'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var code = `df_mp3.${dropdown_action}()\n`;
  return code;
};