function calistir() {
    // Konfeti patlat
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00ff00', '#ffffff', '#004400']
    });

    // Mesajı değiştir
    document.getElementById('content').innerHTML = `
        <h2 style="color: white;">İYİ Kİ DOĞDUN ABİ! 🎂</h2>
        <p>Senin gibi bir abiye sahip olduğum için çok şanslıyım.</p>
        <p>Yeni yaşında tüm yanlışlar senden uzak olsun.</p>
        <p><b>-- Enis Kardeşin</b></p>
    `;

}
