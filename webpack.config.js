const path = require('path'); // o path vem do próprio node e aponta para o diretório atual que está sendo executado
const HtmlWebpackPlugin = require('html-webpack-plugin'); // o html-webpack-plugin vem do próprio webpack, e gerencia os modulos de Bundle do html
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // o react-refresh-webpack-plugin fica monitorando os arquivos do projeto e atualiza o navegador quando houver alterações

const isDevelopment = process.env.NODE_ENV !== 'production'; // se o NODE_ENV for diferente de produção, então é development

module.exports = { // exporta o objeto de configuração, ele é composto por chave e valor
    mode: isDevelopment ? 'development' : 'production', // se for development, então o mode é development, senão production
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // o source-map é o mapa de código fonte, o eval-source-map é o mapa de código fonte com o código fonte
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // o entry é o arquivo de entrada, ou seja, o arquivo que vai ser executado, o __dirname é o diretório atual (./), o src é o diretório de onde está o arquivo index.tsx
    output: { // o output é o arquivo de saída, ou seja, o arquivo que será gerado
        path: path.resolve(__dirname, 'build'), // o path é o caminho do arquivo de saída, o __dirname é o diretório atual (./), o dist é o diretório de onde vai ficar os arquivos gerados pelo build
        filename: 'bundle.js', // o filename é o nome do arquivo de saída        
    },
    resolve : { // resolve é o objeto de configuração do webpack, ele é responsável por resolver os módulos
        extensions: ['.ts', '.tsx', '.js', '.jsx'] // as extensões que o webpack vai resolver, o tsx é para o typescript, o ts é para o javascript
    },
    devServer: { // o devServer é o servidor de desenvolvimento, ele é responsável por fazer o servidor rodar
        static: path.resolve(__dirname, 'public'), // o contentBase é o caminho do arquivo que será aberto no navegador, o __dirname é o diretório atual (./)
        hot: true, // o hot é o hot reload, ele é responsável por fazer o servidor reiniciar quando houver alterações no código
        port: 3001, // o port é a porta que o servidor vai rodar
        historyApiFallback: true, // ele é responsável por fazer o servidor rodar as rotas
    },
    plugins: [ // não é um objeto, é um array 
        isDevelopment && new ReactRefreshWebpackPlugin({
            overlay: false,
        }), // se for development, então o ReactRefreshWebpackPlugin é instanciado
        new HtmlWebpackPlugin({ // o HtmlWebpackPlugin é responsável por gerar o arquivo index.html
            template: path.resolve(__dirname, 'public', 'index.html'), // temtaple é o arquivo que contem o html da div com o id root
        })
    ].filter(Boolean), // o filter é responsável por filtrar os valores nulos, ou seja, os valores que não são true, e retorna um array com os valores que são true
    module: { // o module é o objeto de configuração do webpack, ele é responsável por configurar os módulos
        rules: [ // o rules é o array de regras, ou seja, as regras que o webpack vai aplicar
            {
                test: /\.(j|t)sx?$/, // o test é o teste, o tsx é para o typescript, o js é para o javascript,/ é o inicio da expressão, $/ é o final da expressão regular
                exclude: /node_modules/, // o exclude é o arquivo que não vai ser processado, o node_modules é o diretório que não vai ser processado
                use: {
                    loader: 'babel-loader', // o loader é o responsável por processar o arquivo, o babel-loader é o responsável por processar o arquivo com o babel
                    options: { // o options é o objeto de configuração do babel
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel'), // se for development, então o react-refresh/babel é instanciado
                        ].filter(Boolean),
                    }
                }
            },
            {
                test: /\.s?(c|a)ss$/,
                use: [
                    'style-loader', // o style-loader é o responsável minificar o css
                    'css-loader', // o css-loader é o responsável por processar/interpretar o css
                    'sass-loader', // o sass-loader é o responsável por processar/interpretar o sass

                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader', // o file-loader é o responsável por processar/interpretar o arquivo
                ]
            }
        ],
    }
};