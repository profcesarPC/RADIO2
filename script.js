// Últimas músicas tocadas (exemplo)
const ultimasMusicas = [
    "Música 1 - Artista 1",
    "Música 2 - Artista 2",
    "Música 3 - Artista 3"
];

// Atualiza a lista de últimas músicas
const listaMusicas = document.getElementById('ultimas-musicas-lista');
ultimasMusicas.forEach(musica => {
    const item = document.createElement('li');
    item.textContent = musica;
    listaMusicas.appendChild(item);
});

// Formulário de pedido de música
document.getElementById('form-pedido-musica').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const musica = document.getElementById('musica').value;
    alert(`Obrigado, ${nome}! Sua música "${musica}" foi recebida.`);
});

// Hora certa
function atualizarHora() {
    const horaAtual = new Date().toLocaleTimeString();
    document.getElementById('hora-atual').textContent = horaAtual;
}
setInterval(atualizarHora, 1000);
atualizarHora();

// Estatísticas (simulação)
let visitasTotais = 0;
let usuariosOnline = 0;

// Simula visitas e usuários online
setInterval(() => {
    visitasTotais += Math.floor(Math.random() * 10);
    usuariosOnline = Math.floor(Math.random() * 100);
    document.getElementById('visitas-totais').textContent = visitasTotais;
    document.getElementById('usuarios-online').textContent = usuariosOnline;
}, 5000);