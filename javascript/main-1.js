document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        document.querySelector('.btnBeli').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('bookTitle').value = judul;
            document.getElementById('productPrice').value = harga;

            let productPrice = parseFloat(harga.replace(/[^0-9]+/g,""));
            let shipmentPrice = 12000;
            let adminPrice = productPrice * 0.1;
            let totalPrice = productPrice + shipmentPrice + adminPrice;

            document.getElementById('adminPrice').value = `Rp${adminPrice.toLocaleString('id-ID')}`;
            document.getElementById('totalPrice').value = `Rp${totalPrice.toLocaleString('id-ID')}`;

            let paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
            paymentModal.show();
        });
    });
});