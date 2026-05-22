Blockly.defineBlocksWithJsonArray(
[{
  "type": "dfplayer_setup",
  "message0": "Inicializar DFPlayer Mini -> TX (Salida): %1 RX (Entrada): %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "tx",
      "options": [
        ["OUT1 (Pin 26)", "26"],
        ["OUT2 (Pin 27)", "27"],
        ["SDA / Chain (Pin 4)", "4"],
        ["SCL / Chain (Pin 5)", "5"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "rx",
      "options": [
        ["IN3 (Pin 34)", "34"], // Ahora es la opción por defecto (Top de la lista)
        ["IN1 (Pin 32)", "32"],
        ["IN2 (Pin 33)", "33"],
        ["IN4 (Pin 35)", "35"],
        ["SDA / Chain (Pin 4)", "4"],
        ["SCL / Chain (Pin 5)", "5"]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "Configura la comunicación UART usando los pines externos de la KidBright32.",
  "helpUrl": ""
},
{
  "type": "dfplayer_play",
  "message0": "DFPlayer reproducir pista número %1",
  "args0": [
    { "type": "input_value", "name": "track", "check": "Number" }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "Reproduce la canción correspondiente al número de archivo guardado.",
  "helpUrl": ""
},
{
  "type": "dfplayer_volume",
  "message0": "DFPlayer ajustar volumen (0-30) a %1",
  "args0": [
    { "type": "input_value", "name": "volume", "check": "Number" }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "Establece el nivel de audio.",
  "helpUrl": ""
},
{
  "type": "dfplayer_control",
  "message0": "DFPlayer acción: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "action",
      "options": [
        ["Pausar", "pause"],
        ["Continuar / Reanudar", "resume"],
        ["Siguiente Canción", "next"],
        ["Canción Anterior", "prev"],
        ["Detener por completo", "stop"]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "Controles básicos de navegación.",
  "helpUrl": ""
}]
);