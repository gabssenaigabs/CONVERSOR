const valores = {
    comprimento: {
        unidades: ["Nanômetro", "Micrômetro", "Milímetro", "Centímetro", "Metro", "Quilômetro", "Milha", "Pé", "Polegada", "Jarda"],
        converter: (valor, origem, destino) => {
            const base = {
                "Nanômetro": 1e-9,
                "Micrômetro": 1e-6,
                "Milímetro": 0.001,
                "Centímetro": 0.01,
                "Metro": 1,
                "Quilômetro": 1000,
                "Milha": 1609.34,
                "Pé": 0.3048,
                "Polegada": 0.0254,
                "Jarda": 0.9144
            };
            return (valor * base[origem]) / base[destino];
        }
    },
    massa: {
        unidades: ["Micrograma", "Miligrama", "Grama", "Quilograma", "Tonelada", "Libra", "Onça"],
        converter: (valor, origem, destino) => {
            const base = {
                "Micrograma": 1e-6,
                "Miligrama": 0.001,
                "Grama": 1,
                "Quilograma": 1000,
                "Tonelada": 1e6,
                "Libra": 453.592,
                "Onça": 28.3495
            };
            return (valor * base[origem]) / base[destino];
        }
    },
    temperatura: {
        unidades: ["Celsius", "Fahrenheit", "Kelvin"],
        converter: (valor, origem, destino) => {
            if (origem === destino) return valor;

            let celsius;

            switch (origem) {
                case "Celsius": celsius = valor; break;
                case "Fahrenheit": celsius = (valor - 32) * 5 / 9; break;
                case "Kelvin": celsius = value - 273.15; break;
            }

            switch (destino) {
                case "Celsius": return celsius;
                case "Fahrenheit": return (celsius * 9 / 5) + 32;
                case "Kelvin": return celsius + 273.15;
            }
        }
    },
    tempo: {
        unidades: ["Segundo", "Minuto", "Hora", "Dia"],
        converter: (valor, origem, destino) => {
            const base = {
                "Segundo": 1,
                "Minuto": 60,
                "Hora": 3600,
                "Dia": 86400
            };
            return (valor * base[origem]) / base[destino];
        }
    },
    volume: {
        unidades: ["Mililitro", "Litro", "Metro cúbico"],
        converter: (valor, origem, destino) => {
            const base = {
                "Mililitro": 0.001,
                "Litro": 1,
                "Metro cúbico": 1000
            };
            return (valor * base[origem]) / base[destino];
        }
    },
    velocidade: {
        unidades: ["m/s", "Km/h", "Milhas/h"],
        converter: (valor, origem, destino) => {
            const base = {
                "m/s": 1,
                "Km/h": 0.277778,
                "Milhas/h": 0.44704
            };
            return (valor * base[origem]) / base[destino];
        }
    }
};

export { valores };