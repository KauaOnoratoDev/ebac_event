AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const distanciaAteEvento = timeStampEvento - timeStampAgora

    const dias = (1000 * 60 * 60 * 24);
    const horas  = (1000 * 60 * 60);
    const minutos = (1000 * 60);

    const diasAteEvento = Math.floor(distanciaAteEvento / dias);
    const horasAteEvento = Math.floor((distanciaAteEvento % dias) / horas);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horas) / minutos);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutos) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (diasAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);