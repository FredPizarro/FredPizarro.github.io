const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

// Configurar livereload
const liveReloadServer = livereload.createServer({
    port: 35729,
    delay: 1000
});

// Observar cambios en archivos estáticos
liveReloadServer.watch([
    __dirname,
    path.join(__dirname, 'css'),
    path.join(__dirname, 'js'),
    path.join(__dirname, 'imgs'),
    path.join(__dirname, 'assets')
]);

// Middleware para inyectar el script de livereload
app.use(connectLivereload({
    port: 35729
}));

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal - servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar compilador de LESS en modo watch
const lessWatch = spawn('npx', ['less-watch-compiler', 'css', 'css', 'styles.less'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
});

lessWatch.on('error', (err) => {
    console.error('Error al iniciar LESS watch:', err);
});

lessWatch.on('exit', (code) => {
    if (code !== 0) {
        console.log(`LESS watch finalizó con código ${code}`);
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`🔄 Live reload activado en puerto 35729`);
    console.log(`📁 Sirviendo archivos desde: ${__dirname}`);
    console.log(`🎨 LESS watch compilador iniciado`);
});

