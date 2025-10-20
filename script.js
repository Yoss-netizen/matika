document.addEventListener('DOMContentLoaded', () => {
    // URL dasar API backend Anda
    const API_BASE_URL = 'http://localhost:3000/api';

    // Mendapatkan elemen-elemen dari HTML
    const jenjangSection = document.getElementById('pilih-jenjang');
    const dynamicContentArea = document.getElementById('dynamic-content-area');
    const contentTitle = document.getElementById('content-title');
    const contentDisplay = document.getElementById('content-display');
    const materiDisplay = document.getElementById('materi-display');
    const backButton = document.getElementById('back-button');

    const navigationStack = [];

    const showView = (view) => {
        jenjangSection.classList.add('hidden');
        dynamicContentArea.classList.add('hidden');
        if (view === 'jenjang') jenjangSection.classList.remove('hidden');
        else dynamicContentArea.classList.remove('hidden');
    };

    async function fetchData(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Gagal mengambil data:", error);
            contentDisplay.innerHTML = `<p style="text-align:center; color:red;">Gagal memuat data. Pastikan backend berjalan.</p>`;
            return null;
        }
    }

    function renderKelas(kelas, jenjang) {
        contentTitle.textContent = `Pilih Kelas untuk Jenjang ${jenjang}`;
        contentDisplay.innerHTML = '';
        materiDisplay.classList.add('hidden');
        contentDisplay.classList.remove('hidden');
        kelas.forEach(k => {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `<h4>${k.nama}</h4><p>Materi untuk tingkat ${k.jenjang}</p>`;
            card.dataset.id = k.id;
            card.dataset.nama = k.nama;
            card.dataset.type = 'kelas';
            contentDisplay.appendChild(card);
        });
    }
    
    function renderBab(bab, namaKelas) {
        contentTitle.textContent = `Pilih Bab untuk ${namaKelas}`;
        contentDisplay.innerHTML = '';
        materiDisplay.classList.add('hidden');
        contentDisplay.classList.remove('hidden');
        bab.forEach(b => {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `<h4>${b.nama}</h4><p>${b.deskripsi}</p>`;
            card.dataset.id = b.id;
            card.dataset.nama = b.nama;
            card.dataset.type = 'bab';
            contentDisplay.appendChild(card);
        });
    }

    function renderMateri(materi, namaBab) {
        contentTitle.textContent = `Materi: ${namaBab}`;
        contentDisplay.classList.add('hidden');
        materiDisplay.classList.remove('hidden');
        materiDisplay.innerHTML = '';
        materi.forEach(m => {
            const item = document.createElement('div');
            item.className = 'materi-item';
            item.innerHTML = `<h3>${m.judul}</h3><p>${m.konten}</p>`;
            materiDisplay.appendChild(item);
        });
    }

    async function navigate(type, id, name) {
        showView('dynamic');
        backButton.classList.remove('hidden');
        let data;
        switch (type) {
            case 'jenjang':
                data = await fetchData(`kelas/${id.toLowerCase()}`);
                if (data) renderKelas(data, id);
                break;
            case 'kelas':
                data = await fetchData(`bab/kelas/${id}`);
                if (data) renderBab(data, name);
                break;
            case 'bab':
                data = await fetchData(`materi/bab/${id}`);
                if (data) renderMateri(data, name);
                break;
        }
    }

    jenjangSection.addEventListener('click', (event) => {
        const jenjangCard = event.target.closest('.jenjang-card');
        if (jenjangCard) {
            const jenjang = jenjangCard.dataset.jenjang;
            navigationStack.push({ type: 'jenjang', id: jenjang });
            navigate('jenjang', jenjang);
        }
    });

    contentDisplay.addEventListener('click', (event) => {
        const card = event.target.closest('.content-card');
        if (card) {
            const { id, type, nama } = card.dataset;
            navigationStack.push({ type, id, name });
            if (type === 'kelas') navigate('kelas', id, nama);
            else if (type === 'bab') navigate('bab', id, nama);
        }
    });
    
    backButton.addEventListener('click', () => {
        navigationStack.pop();
        if (navigationStack.length === 0) {
            showView('jenjang');
            backButton.classList.add('hidden');
            contentTitle.textContent = '';
        } else {
            const prevState = navigationStack[navigationStack.length-1];
            navigate(prevState.type, prevState.id, prevState.name);
        }
    });
});

