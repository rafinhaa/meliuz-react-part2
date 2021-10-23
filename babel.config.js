module.exports = { // exportando o objeto
    presets: [ // Os presets são as configurações do babel que são utilizadas para transformar o código antes de ser enviado para o browser
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            runtime: 'automatic' // O runtime é o que permite que o react funcione sem precisar instalar o react-dom
        }]
    ]
}
