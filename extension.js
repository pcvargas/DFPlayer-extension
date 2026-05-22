({
    name: "DFPlayer KidBright",
    description: "Reproductor multimedia MP3/WAV utilizando exclusivamente los pines externos expuestos de la KidBright32.",
    author: "Pablo Cesar Vargas Diaz",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png",
    color: "#E67E22",
    blocks: [
        "dfplayer_setup", // Simplificado por el uso de Dropdowns protectores
        {
            xml: `
                <block type="dfplayer_play">
                    <value name="track">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dfplayer_volume">
                    <value name="volume">
                        <shadow type="math_number">
                            <field name="NUM">15</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "dfplayer_control"
    ],
    chip: [
        "ESP32"
    ]
});