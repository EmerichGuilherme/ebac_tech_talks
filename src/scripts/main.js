AOS.init();

const dataDoEvento = new Date("aug 18, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteOEvendo = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvendo / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvendo % diaEmMs / horaEmMs)
    const minutosAteOEvento = Math.floor(distanciaAteOEvendo % horaEmMs / minutoEmMs);
    const secundosAteOEvento = Math.floor((distanciaAteOEvendo % minutoEmMs) / 1000)
    

    document.getElementById('contador').innerHTML = ` começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${secundosAteOEvento}s`;
    if (distanciaAteOEvendo < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Já aconteceu'
    }
}, 1000)
