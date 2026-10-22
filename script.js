var db_users = [
    { user_id: "USR-001", username: "claudiazahra",  nama_display: "Claudia Zahra",  email: "reader@aksara.id",   password: "pass123", role: "pembaca", status_verifikasi: "Belum Terverifikasi", tanggal_bergabung: "2025-01-15" },
    { user_id: "USR-002", username: "tereliye",      nama_display: "Tere Liye",      email: "tere@aksara.id",     password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2013-01-01" },
    { user_id: "USR-003", username: "deelestari",    nama_display: "Dee Lestari",    email: "dee@aksara.id",      password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2001-01-01" },
    { user_id: "USR-004", username: "dwiputra",      nama_display: "Dwi Putra",      email: "dwi@aksara.id",      password: "pass123", role: "pembaca", status_verifikasi: "Belum Terverifikasi", tanggal_bergabung: "2025-03-10" },
    { user_id: "USR-005", username: "pidibaiq",      nama_display: "Pidi Baiq",      email: "pidi@aksara.id",     password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2014-01-01" },
    { user_id: "USR-006", username: "andreahibrata", nama_display: "Andrea Hirata",  email: "andrea@aksara.id",   password: "pass123", role: "penulis", status_verifikasi: "Terverifikasi",      tanggal_bergabung: "2005-01-01" }
];

var db_karya = [
    { id_karya: "KRY-001", user_id: "USR-002", judul: "Bumi",
      genre: "Fantasy",
      sinopsis: "Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin. Ia ternyata berasal dari Klan Bulan—sebuah dunia tersembunyi di balik cermin yang selama ini tidak ia ketahui. Petualangan pun dimulai ketika ancaman besar mengancam seluruh klannya dan Raib harus memilih antara diam atau berjuang.",
      status_karya: "completed", tanggal_publikasi: "2014-03-01", tanggal_update: "2014-03-01" },
    { id_karya: "KRY-002", user_id: "USR-005", judul: "Dilan: Dia adalah Dilanku Tahun 1990",
      genre: "Romance",
      sinopsis: "Milea, siswi pindahan dari Jakarta, bertemu Dilan—cowok anggota geng motor yang memikatnya dengan cara-cara tak terduga dan penuh humor. Bukan bunga, bukan cokelat—Dilan menyatakan cinta dengan soal matematika. Kisah cinta SMA yang hangat dan membuat rindu.",
      status_karya: "completed", tanggal_publikasi: "2014-01-06", tanggal_update: "2014-01-06" },
    { id_karya: "KRY-003", user_id: "USR-002", judul: "Negeri di Ujung Tanduk",
      genre: "Mystery",
      sinopsis: "Thomas, konsultan politik berbakat, terjerat konspirasi besar yang melibatkan korupsi, mafia hukum, dan kekuatan gelap yang mengendalikan negeri dari balik layar. Dalam sebuah kapal pesiar mewah di lepas pantai Hong Kong, ia harus memecahkan teka-teki sebelum semuanya terlambat.",
      status_karya: "completed", tanggal_publikasi: "2013-05-01", tanggal_update: "2013-05-01" },
    { id_karya: "KRY-004", user_id: "USR-003", judul: "Supernova: Ksatria, Puteri, dan Bintang Jatuh",
      genre: "Science Fiction",
      sinopsis: "Reuben dan Dimas menulis novel bersama tentang Ksatria dan Puteri. Tanpa diduga, kisah fiksi mereka mulai bersinggungan dengan kehidupan nyata melalui jaringan koneksi tak terduga. Sebuah eksplorasi cinta, sains, dan spiritualitas yang melampaui batas genre.",
      status_karya: "completed", tanggal_publikasi: "2001-02-01", tanggal_update: "2001-02-01" },
    { id_karya: "KRY-005", user_id: "USR-006", judul: "Laskar Pelangi",
      genre: "Slice of Life",
      sinopsis: "Sepuluh anak dari keluarga miskin di Belitung berjuang mendapatkan pendidikan di SD Muhammadiyah yang hampir rubuh. Dengan semangat yang luar biasa dan seorang guru bernama Bu Mus, mereka membuktikan bahwa mimpi bisa mengalahkan segala keterbatasan.",
      status_karya: "completed", tanggal_publikasi: "2005-09-26", tanggal_update: "2005-09-26" },
    { id_karya: "KRY-006", user_id: "USR-003", judul: "Aroma Karsa",
      genre: "Fantasy",
      sinopsis: "Jati Wesi, pemuda yang tumbuh di tempat pembuangan sampah, memiliki indra penciuman luar biasa. Pencariannya akan asal-usul dirinya membawanya pada legenda Puspa Karsa—tanaman langka yang konon mampu mengendalikan kehendak manusia dan telah diburu selama berabad-abad.",
      status_karya: "ongoing", tanggal_publikasi: "2018-04-28", tanggal_update: "2018-04-28" }
];

var db_bab = [
    {id_bab:"BAB-001", id_karya:"KRY-001", nomor_bab:1, judul_bab:"Klan Bulan",           konten:"Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin. Ia ternyata berasal dari Klan Bulan—sebuah dunia tersembunyi di balik cermin yang selama ini tidak ia ketahui. Petualangan pun dimulai ketika ancaman besar mengancam seluruh klannya dan Raib harus memilih antara diam atau berjuang. Dengan kekuatan yang baru ia sadari, Raib menapaki jalan yang penuh bahaya, bertemu dengan kawan-kawan tak terduga, dan perlahan mengungkap kebenaran tentang siapa dirinya sesungguhnya.", tanggal_publikasi_bab:"2014-03-01"},
    {id_bab:"BAB-002", id_karya:"KRY-001", nomor_bab:2, judul_bab:"Dunia di Balik Cermin", konten:"Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin. Ia ternyata berasal dari Klan Bulan—sebuah dunia tersembunyi di balik cermin yang selama ini tidak ia ketahui. Petualangan pun dimulai ketika ancaman besar mengancam seluruh klannya dan Raib harus memilih antara diam atau berjuang. Dengan kekuatan yang baru ia sadari, Raib menapaki jalan yang penuh bahaya, bertemu dengan kawan-kawan tak terduga, dan perlahan mengungkap kebenaran tentang siapa dirinya sesungguhnya.", tanggal_publikasi_bab:"2014-04-01"},
    {id_bab:"BAB-003", id_karya:"KRY-001", nomor_bab:3, judul_bab:"Pilihan Raib",          konten:"Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin. Ia ternyata berasal dari Klan Bulan—sebuah dunia tersembunyi di balik cermin yang selama ini tidak ia ketahui. Petualangan pun dimulai ketika ancaman besar mengancam seluruh klannya dan Raib harus memilih antara diam atau berjuang. Dengan kekuatan yang baru ia sadari, Raib menapaki jalan yang penuh bahaya, bertemu dengan kawan-kawan tak terduga, dan perlahan mengungkap kebenaran tentang siapa dirinya sesungguhnya.", tanggal_publikasi_bab:"2014-05-01"},
    {id_bab:"BAB-001B", id_karya:"KRY-002", nomor_bab:1, judul_bab:"Pertemuan",      konten:"Milea, siswi pindahan dari Jakarta, bertemu Dilan—cowok anggota geng motor yang memikatnya dengan cara-cara tak terduga dan penuh humor. Bukan bunga, bukan cokelat—Dilan menyatakan cinta dengan soal matematika. Kisah cinta SMA tahun 1990 yang hangat, penuh tawa, dan membuat rindu. Milea menceritakan ulang kenangan itu bertahun-tahun kemudian, ketika ia sadar betapa istimewanya masa-masa itu.", tanggal_publikasi_bab:"2014-01-06"},
    {id_bab:"BAB-002B", id_karya:"KRY-002", nomor_bab:2, judul_bab:"Soal Matematika", konten:"Milea, siswi pindahan dari Jakarta, bertemu Dilan—cowok anggota geng motor yang memikatnya dengan cara-cara tak terduga dan penuh humor. Bukan bunga, bukan cokelat—Dilan menyatakan cinta dengan soal matematika. Kisah cinta SMA tahun 1990 yang hangat, penuh tawa, dan membuat rindu. Milea menceritakan ulang kenangan itu bertahun-tahun kemudian, ketika ia sadar betapa istimewanya masa-masa itu.", tanggal_publikasi_bab:"2014-02-01"},
    {id_bab:"BAB-001C", id_karya:"KRY-003", nomor_bab:1, judul_bab:"Kapal Pesiar", konten:"Thomas, konsultan politik berbakat, terjerat konspirasi besar yang melibatkan korupsi, mafia hukum, dan kekuatan gelap yang mengendalikan negeri dari balik layar. Dalam sebuah kapal pesiar mewah di lepas pantai Hong Kong, ia harus memecahkan teka-teki besar sebelum semuanya terlambat. Nyawanya dan nasib banyak orang bergantung pada keputusan yang harus ia ambil dalam hitungan jam.", tanggal_publikasi_bab:"2013-05-01"},
    {id_bab:"BAB-001D", id_karya:"KRY-004", nomor_bab:1, judul_bab:"Ksatria dan Puteri", konten:"Reuben dan Dimas menulis novel bersama tentang Ksatria dan Puteri, dua karakter yang hidup di dunia berbeda namun terhubung oleh kekuatan tak kasat mata. Tanpa diduga, kisah fiksi mereka mulai bersinggungan dengan kehidupan nyata. Sebuah eksplorasi mendalam tentang cinta, sains kuantum, dan spiritualitas yang melampaui batas genre—karya yang mengubah cara pandang pembacanya tentang realitas dan koneksi antarmanusia.", tanggal_publikasi_bab:"2001-02-01"},
    {id_bab:"BAB-001E", id_karya:"KRY-005", nomor_bab:1, judul_bab:"Laskar Pelangi",  konten:"Sepuluh anak dari keluarga miskin di Belitung berjuang mendapatkan pendidikan di SD Muhammadiyah yang hampir rubuh. Dengan semangat yang luar biasa dan seorang guru bernama Bu Mus yang tak pernah menyerah, mereka membuktikan bahwa mimpi bisa mengalahkan segala keterbatasan. Laskar Pelangi adalah kisah tentang persahabatan, harapan, dan keajaiban kecil yang tersembunyi di balik kesederhanaan hidup.", tanggal_publikasi_bab:"2005-09-26"},
    {id_bab:"BAB-002E", id_karya:"KRY-005", nomor_bab:2, judul_bab:"Bu Mus",          konten:"Sepuluh anak dari keluarga miskin di Belitung berjuang mendapatkan pendidikan di SD Muhammadiyah yang hampir rubuh. Dengan semangat yang luar biasa dan seorang guru bernama Bu Mus yang tak pernah menyerah, mereka membuktikan bahwa mimpi bisa mengalahkan segala keterbatasan. Laskar Pelangi adalah kisah tentang persahabatan, harapan, dan keajaiban kecil yang tersembunyi di balik kesederhanaan hidup.", tanggal_publikasi_bab:"2005-10-01"},
    {id_bab:"BAB-001F", id_karya:"KRY-006", nomor_bab:1, judul_bab:"Penciuman",    konten:"Jati Wesi, pemuda yang tumbuh di tempat pembuangan sampah, memiliki indra penciuman luar biasa yang tak tertandingi. Pencariannya akan asal-usul dirinya membawanya pada legenda Puspa Karsa—tanaman langka yang konon mampu mengendalikan kehendak manusia dan telah diburu selama berabad-abad. Di balik aroma bunga itu tersimpan kekuatan yang mengubah segalanya, termasuk hubungan antara Jati dan seorang ilmuwan perempuan yang menyimpan rahasia besar.", tanggal_publikasi_bab:"2018-04-28"},
    {id_bab:"BAB-002F", id_karya:"KRY-006", nomor_bab:2, judul_bab:"Puspa Karsa",  konten:"Jati Wesi, pemuda yang tumbuh di tempat pembuangan sampah, memiliki indra penciuman luar biasa yang tak tertandingi. Pencariannya akan asal-usul dirinya membawanya pada legenda Puspa Karsa—tanaman langka yang konon mampu mengendalikan kehendak manusia dan telah diburu selama berabad-abad. Di balik aroma bunga itu tersimpan kekuatan yang mengubah segalanya, termasuk hubungan antara Jati dan seorang ilmuwan perempuan yang menyimpan rahasia besar.", tanggal_publikasi_bab:"2018-05-01"}
];

var db_komentar = [];

var db_likes = [
    { user_id: "USR-001", id_bab: "BAB-001",  tanggal_like: "2024-09-03" },
    { user_id: "USR-001", id_bab: "BAB-002",  tanggal_like: "2024-09-10" },
    { user_id: "USR-001", id_bab: "BAB-001B", tanggal_like: "2024-05-11" },
    { user_id: "USR-001", id_bab: "BAB-001F", tanggal_like: "2025-04-07" },
    { user_id: "USR-004", id_bab: "BAB-001B", tanggal_like: "2024-05-11" },
    { user_id: "USR-004", id_bab: "BAB-002B", tanggal_like: "2024-05-18" },
    { user_id: "USR-004", id_bab: "BAB-001C", tanggal_like: "2025-01-22" },
    { user_id: "USR-002", id_bab: "BAB-001D", tanggal_like: "2025-02-20" }
];

var current_user = null; 
var current_work_id = null;
var current_bab_id = null;
var active_filter_genre = "";
var active_filter_status = "all";
var editing_work_id = null;
var editing_work_karya_id = null;
var delete_callback = null;

function showPage(page_id) {
    var pages = document.querySelectorAll(".page");
    pages.forEach(function (p) {
        p.classList.remove("active");
    });

    var target = document.getElementById(page_id);
    if (target) {
        target.classList.add("active");
    }

    updateHeaderNav(page_id);

    if (page_id === "page_home") {
        renderWorkList();
        renderRecommendations();
    }
    if (page_id === "page_dashboard") {
        renderDashboard();
    }
    if (page_id === "page_profile") {
        renderProfile();
    }
    if (page_id === "page_search") {
        document.getElementById("search_results").innerHTML = "";
    }
    if (page_id === "page_writer_reg") {
        if (!current_user) {
            showPage("page_login");
            return;
        }
        if (current_user.role === "penulis") {
            alert("You are already registered as a writer.");
            showPage("page_dashboard");
            return;
        }
        resetWriterReg();
    }

    window.scrollTo(0, 0);
}

function updateHeaderNav(page_id) {
    var nav_ids = ["nav_browse", "nav_search", "nav_about"];
    nav_ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            el.classList.remove("active");
        }
    });

    if (page_id === "page_home") {
        var el = document.getElementById("nav_browse");
        if (el) { el.classList.add("active"); }
    }
    if (page_id === "page_search") {
        var el2 = document.getElementById("nav_search");
        if (el2) { el2.classList.add("active"); }
    }
    if (page_id === "page_about") {
        var el3 = document.getElementById("nav_about");
        if (el3) { el3.classList.add("active"); }
    }
}

function doLogin() {
    var email_val    = document.getElementById("login_email").value.trim();
    var password_val = document.getElementById("login_password").value.trim();
    var valid = true;

    hideEl("login_email_err");
    hideEl("login_pass_err");
    hideEl("login_alert");

    if (!email_val || email_val.indexOf("@") === -1) {
        showEl("login_email_err");
        valid = false;
    }
    if (!password_val) {
        showEl("login_pass_err");
        valid = false;
    }
    if (!valid) { return; }

    var found = null;
    db_users.forEach(function (u) {
        if (u.email === email_val && u.password === password_val) {
            found = u;
        }
    });

    if (!found) {
        showElMsg("login_alert", "Email or password is incorrect.");
        return;
    }

    current_user = JSON.parse(JSON.stringify(found));
    afterLogin();
}

function doRegister() {
    var display_name = document.getElementById("reg_display_name").value.trim();
    var username_val  = document.getElementById("reg_username").value.trim();
    var email_val     = document.getElementById("reg_email").value.trim();
    var pass_val      = document.getElementById("reg_password").value;
    var pass2_val     = document.getElementById("reg_password2").value;
    var valid = true;

    hideEl("reg_name_err");
    hideEl("reg_username_err");
    hideEl("reg_email_err");
    hideEl("reg_pass_err");
    hideEl("reg_pass2_err");
    hideEl("reg_alert");

    if (!display_name) {
        showEl("reg_name_err"); valid = false;
    }
    if (!username_val || username_val.length < 3 || /[^a-z0-9_]/.test(username_val)) {
        showEl("reg_username_err"); valid = false;
    }
    if (!email_val || email_val.indexOf("@") === -1) {
        showEl("reg_email_err"); valid = false;
    }
    if (!pass_val || pass_val.length < 8) {
        showEl("reg_pass_err"); valid = false;
    }
    if (pass_val !== pass2_val) {
        showEl("reg_pass2_err"); valid = false;
    }
    if (!valid) { return; }

    var email_taken = false;
    var username_taken = false;
    db_users.forEach(function (u) {
        if (u.email === email_val) { email_taken = true; }
        if (u.username === username_val) { username_taken = true; }
    });

    if (email_taken) {
        showElMsg("reg_alert", "This email is already registered.");
        return;
    }
    if (username_taken) {
        showElMsg("reg_alert", "This username is already taken.");
        return;
    }

    var new_id = "USR-" + String(db_users.length + 1).padStart(3, "0");
    var new_user = {
        user_id: new_id,
        username: username_val,
        nama_display: display_name,
        email: email_val,
        password: pass_val,
        role: "pembaca",
        status_verifikasi: "Belum Terverifikasi",
        tanggal_bergabung: new Date().toISOString().slice(0, 10)
    };
    db_users.push(new_user);
    current_user = JSON.parse(JSON.stringify(new_user));
    afterLogin();
}

function afterLogin() {
    updateHeaderForUser();
    showPage("page_home");
    updateHeroBanner();
}

function doLogout() {
    current_user = null;
    updateHeaderForUser();
    showPage("page_home");
    updateHeroBanner();
}

function updateHeaderForUser() {
    var actions = document.getElementById("header_actions");
    var sidebar_account = document.getElementById("sidebar_account");
    var nav_dashboard = document.getElementById("nav_dashboard_link");
    var nav_writer_reg = document.getElementById("nav_register_writer_link");

    if (current_user) {
        actions.innerHTML =
            '<span style="color:#c8ddd4; font-size:13px; font-family:Arial,sans-serif;">'
            + 'Hi, <strong>' + escHtml(current_user.nama_display) + '</strong></span> '
            + '<button type="button" class="btn-header" onclick="showPage(\'page_profile\')">Profile</button> '
            + '<button type="button" class="btn-header" onclick="doLogout()">Logout</button>';

        sidebar_account.style.display = "block";

        if (current_user.role === "penulis") {
            nav_dashboard.style.display = "block";
            nav_writer_reg.style.display = "none";
        } else {
            nav_dashboard.style.display = "none";
            nav_writer_reg.style.display = "block";
        }
    } else {
        actions.innerHTML =
            '<button type="button" class="btn-header" onclick="showPage(\'page_login\')">Login</button> '
            + '<button type="button" class="btn-header-solid" onclick="showPage(\'page_register\')">Register</button> '
        sidebar_account.style.display = "none";
    }
}

function buildGenreFilter() {
    var genres = [];
    db_karya.forEach(function (k) {
        if (genres.indexOf(k.genre) === -1) {
            genres.push(k.genre);
        }
    });
    genres.sort();

    var list = document.getElementById("genre_filter_list");
    var html = '<li><button type="button" class="filter-btn" id="gf_all" data-action="setGenreFilter" data-id="">' +
               'All Genres</button></li>';
    genres.forEach(function (g) {
        var safe_id = "gf_" + g.replace(/\s+/g, "_");
        html += '<li><button type="button" class="filter-btn" id="' + safe_id + '" data-action="setGenreFilter" data-id="' + escHtml(g) + '">» ' + escHtml(g) + '</button></li>';
    });
    list.innerHTML = html;
}

function setGenreFilter(genre) {
    active_filter_genre = genre;
    renderWorkList();
    renderRecommendations();
}

function setStatusFilter(status) {
    active_filter_status = status;
    renderWorkList();
}

function getUserLikedGenres() {
    if (!current_user) { return {}; }
    var genre_count = {};
    db_likes.forEach(function (like) {
        if (like.user_id !== current_user.user_id) { return; }
        var bab = getBabById(like.id_bab);
        if (!bab) { return; }
        var karya = getKaryaById(bab.id_karya);
        if (!karya) { return; }
        if (!genre_count[karya.genre]) {
            genre_count[karya.genre] = 0;
        }
        genre_count[karya.genre]++;
    });
    return genre_count;
}

function renderRecommendations() {
    var banner = document.getElementById("rec_banner");
    if (!current_user) {
        banner.style.display = "none";
        return;
    }

    var genre_count = getUserLikedGenres();
    var genres_sorted = Object.keys(genre_count).sort(function (a, b) {
        return genre_count[b] - genre_count[a];
    });

    if (genres_sorted.length === 0) {
        banner.style.display = "none";
        document.getElementById("browse_title").textContent = "Latest Works";
    } else {
        var top_genre = genres_sorted[0];
        banner.style.display = "block";
        banner.innerHTML = '✨ <strong>Recommended for You</strong> — Because you liked <strong>'
                           + escHtml(top_genre) + '</strong> works, here are more you might enjoy.';
        document.getElementById("browse_title").textContent = "Recommended: " + top_genre;
        active_filter_genre = top_genre;
        buildGenreFilter();
    }
}

function renderWorkList() {
    var list_el = document.getElementById("work_list");
    var no_results = document.getElementById("no_results");

    var filtered = db_karya.filter(function (k) {
        if (active_filter_genre && k.genre !== active_filter_genre) { return false; }
        if (active_filter_status !== "all" && k.status_karya !== active_filter_status) { return false; }
        return true;
    });

    if (filtered.length === 0) {
        list_el.innerHTML = "";
        no_results.style.display = "block";
        return;
    }
    no_results.style.display = "none";

    var html = "";
    filtered.forEach(function (k) {
        var author = getUserById(k.user_id);
        var author_name = author ? author.nama_display : "Unknown";
        var bab_count = db_bab.filter(function (b) { return b.id_karya === k.id_karya; }).length;
        var like_count = getLikesForKarya(k.id_karya);
        var comment_count = getCommentsForKarya(k.id_karya);
        var badge_class = k.status_karya === "completed" ? "badge-completed" : "badge-ongoing";
        var badge_text  = k.status_karya === "completed" ? "Completed" : "Ongoing";

        html += '<div class="work-card">';
        html += '<div class="work-card-meta"><span class="badge ' + badge_class + '">' + badge_text + '</span> &nbsp;';
        html += '<span class="tag" data-action="setGenreFilter" data-id="' + escHtml(k.genre) + '">» ' + escHtml(k.genre) + '</span></div>';
        html += '<div class="work-card-title" data-action="openWorkDetail" data-id="' + k.id_karya + '">'
                + escHtml(k.judul) + '</div>';
        html += '<div class="work-card-meta">by <a href="#" onclick="return false;">' + escHtml(author_name) + '</a>';
        html += ' &nbsp;·&nbsp; Updated ' + formatDate(k.tanggal_update) + '</div>';
        html += '<div class="work-card-synopsis">' + escHtml(k.sinopsis.substring(0, 180)) + (k.sinopsis.length > 180 ? '...' : '') + '</div>';
        html += '<div class="work-card-footer">';
        html += '<span class="work-stat">📖 ' + bab_count + ' chapter' + (bab_count !== 1 ? 's' : '') + '</span>';
        html += '<span class="work-stat">♥ ' + like_count + ' likes</span>';
        html += '<span class="work-stat">💬 ' + comment_count + ' comments</span>';
        html += '<button type="button" class="btn-primary btn-small" style="margin-left:auto" data-action="openWorkDetail" data-id="' + k.id_karya + '">Read →</button>';
        html += '</div></div>';
    });

    list_el.innerHTML = html;
}

function openWorkDetail(karya_id) {
    current_work_id = karya_id;
    var karya = getKaryaById(karya_id);
    if (!karya) { return; }

    var author = getUserById(karya.user_id);
    var author_name = author ? author.nama_display : "Unknown";
    var bab_list = db_bab.filter(function (b) { return b.id_karya === karya_id; });
    bab_list.sort(function (a, b) { return a.nomor_bab - b.nomor_bab; });

    var badge_class = karya.status_karya === "completed" ? "badge-completed" : "badge-ongoing";
    var badge_text  = karya.status_karya === "completed" ? "Completed" : "Ongoing";

    document.getElementById("detail_badge").innerHTML = '<span class="badge ' + badge_class + '">' + badge_text + '</span>';
    document.getElementById("detail_genre_tag").textContent = "» " + karya.genre;
    document.getElementById("detail_title").textContent = karya.judul;
    document.getElementById("detail_author").innerHTML = 'by <strong>' + escHtml(author_name) + '</strong> &nbsp;·&nbsp; Published ' + formatDate(karya.tanggal_publikasi);
    document.getElementById("detail_synopsis").textContent = karya.sinopsis;

    var like_count = getLikesForKarya(karya_id);
    var comment_count = getCommentsForKarya(karya_id);
    document.getElementById("detail_meta").innerHTML =
        '📖 ' + bab_list.length + ' chapters &nbsp;·&nbsp; ♥ ' + like_count + ' likes &nbsp;·&nbsp; 💬 ' + comment_count + ' comments';

    var chap_html = "";
    bab_list.forEach(function (b) {
        chap_html += '<li><a href="#" data-action="openReading" data-id="' + b.id_bab + '" data-num="' + b.nomor_bab + '">Chapter ' + b.nomor_bab + ': ' + escHtml(b.judul_bab) + '</a></li>';
    });
    document.getElementById("chapter_nav_list").innerHTML = chap_html;

    showPage("page_work_detail");
}

function openReading(bab_id, nomor) {
    current_bab_id = bab_id;
    var bab = getBabById(bab_id);
    if (!bab) { return; }

    var karya = getKaryaById(bab.id_karya);
    var bab_list = db_bab.filter(function (b) { return b.id_karya === bab.id_karya; });
    bab_list.sort(function (a, b_) { return a.nomor_bab - b_.nomor_bab; });

    var chap_index = bab_list.findIndex(function (b) { return b.id_bab === bab_id; });

    document.getElementById("reading_title").textContent = 'Chapter ' + bab.nomor_bab + ': ' + bab.judul_bab;
    document.getElementById("reading_chapter_info").innerHTML =
        escHtml(karya ? karya.judul : "") + ' &nbsp;·&nbsp; Published ' + formatDate(bab.tanggal_publikasi_bab);
    document.getElementById("reading_back_link").textContent = "← Back to " + (karya ? karya.judul : "Work");

    var body_html = bab.konten.split("\n\n").map(function (para) {
        return "<p>" + escHtml(para.trim()) + "</p>";
    }).join("");
    document.getElementById("reading_body").innerHTML = body_html;

    var pos_text = "Chapter " + (chap_index + 1) + " of " + bab_list.length;
    document.getElementById("chap_position").textContent = pos_text;
    document.getElementById("chap_position2").textContent = pos_text;

    var btn_prev  = document.getElementById("btn_prev_chap");
    var btn_prev2 = document.getElementById("btn_prev_chap2");
    var btn_next  = document.getElementById("btn_next_chap");
    var btn_next2 = document.getElementById("btn_next_chap2");

    btn_prev.style.visibility  = chap_index === 0 ? 'hidden' : 'visible';
    btn_prev2.style.visibility = chap_index === 0 ? 'hidden' : 'visible';
    btn_next.style.visibility  = chap_index === bab_list.length - 1 ? 'hidden' : 'visible';
    btn_next2.style.visibility = chap_index === bab_list.length - 1 ? 'hidden' : 'visible';

    updateLikeButton();
    renderComments();

    var comment_form = document.getElementById("comment_form_area");
    var comment_notice = document.getElementById("comment_login_notice");
    if (current_user) {
        comment_form.style.display = "block";
        comment_notice.style.display = "none";
    } else {
        comment_form.style.display = "none";
        comment_notice.style.display = "block";
    }

    showPage("page_reading");
}

function goBackToDetail() {
    if (current_work_id) {
        openWorkDetail(current_work_id);
    } else {
        showPage("page_home");
    }
}

function navigateChapter(direction) {
    if (!current_bab_id) { return; }
    var bab = getBabById(current_bab_id);
    if (!bab) { return; }
    var bab_list = db_bab.filter(function (b) { return b.id_karya === bab.id_karya; });
    bab_list.sort(function (a, b_) { return a.nomor_bab - b_.nomor_bab; });
    var idx = bab_list.findIndex(function (b) { return b.id_bab === current_bab_id; });
    var new_idx = idx + direction;
    if (new_idx >= 0 && new_idx < bab_list.length) {
        openReading(bab_list[new_idx].id_bab, bab_list[new_idx].nomor_bab);
    }
}

function toggleLike() {
    if (!current_user) {
        alert("Please login to like chapters.");
        showPage("page_login");
        return;
    }
    var already_liked = isLikedByUser(current_bab_id);
    if (already_liked) {
        db_likes = db_likes.filter(function (l) {
            return !(l.user_id === current_user.user_id && l.id_bab === current_bab_id);
        });
    } else {
        db_likes.push({
            user_id: current_user.user_id,
            id_bab: current_bab_id,
            tanggal_like: new Date().toISOString().slice(0, 10)
        });
    }
    updateLikeButton();
}

function isLikedByUser(bab_id) {
    if (!current_user) { return false; }
    return db_likes.some(function (l) {
        return l.user_id === current_user.user_id && l.id_bab === bab_id;
    });
}

function updateLikeButton() {
    var btn = document.getElementById("btn_like");
    var liked = isLikedByUser(current_bab_id);
    var like_count = db_likes.filter(function (l) { return l.id_bab === current_bab_id; }).length;
    if (liked) {
        btn.textContent = "♥ Liked!";
        btn.classList.add("liked");
    } else {
        btn.textContent = "♥ Like this chapter";
        btn.classList.remove("liked");
    }
    document.getElementById("like_count_display").textContent = like_count + " people liked this chapter";
}

function renderComments() {
    var comments = db_komentar.filter(function (c) { return c.id_bab === current_bab_id; });
    comments.sort(function (a, b) { return a.waktu_komentar < b.waktu_komentar ? -1 : 1; });

    document.getElementById("comment_count").textContent = comments.length;

    var html = "";
    comments.forEach(function (c) {
        var author = getUserById(c.user_id);
        var author_name = author ? author.nama_display : "Unknown";
        var can_delete = current_user && current_user.user_id === c.user_id;
        html += '<div class="comment-item" id="comment_' + c.id_komentar + '">';
        html += '<div class="comment-author">' + escHtml(author_name);
        html += '<span class="comment-time">' + formatDateTime(c.waktu_komentar) + '</span></div>';
        html += '<div class="comment-body">' + escHtml(c.isi_komentar) + '</div>';
        if (can_delete) {
            html += '<button type="button" class="comment-delete" data-action="confirmDeleteComment" data-id="' + c.id_komentar + '">Delete</button>';
        }
        html += '</div>';
    });
    document.getElementById("comment_list").innerHTML = html || '<p style="color:var(--text-muted); font-size:13px; font-family:Arial,sans-serif;">No comments yet. Be the first!</p>';
    document.getElementById("comment_input").value = "";
}

function submitComment() {
    if (!current_user) { return; }
    var isi = document.getElementById("comment_input").value.trim();
    if (!isi) { return; }

    var new_id = "KOM-" + String(db_komentar.length + 1).padStart(3, "0");
    db_komentar.push({
        id_komentar: new_id,
        user_id: current_user.user_id,
        id_bab: current_bab_id,
        isi_komentar: isi,
        waktu_komentar: new Date().toISOString().replace("T", " ").slice(0, 19)
    });
    renderComments();
}

function confirmDeleteComment(kom_id) {
    document.getElementById("delete_confirm_msg").textContent = "Delete this comment? This action cannot be undone.";
    delete_callback = function () {
        db_komentar = db_komentar.filter(function (c) { return c.id_komentar !== kom_id; });
        renderComments();
        closeDeleteModal();
    };
    document.getElementById("delete_confirm_btn").onclick = function () { delete_callback(); };
    document.getElementById("modal_delete").classList.add("show");
}

function closeDeleteModal() {
    document.getElementById("modal_delete").classList.remove("show");
    delete_callback = null;
}

function doNavSearch() {
    var q = document.getElementById("nav_search_input").value.trim();
    if (!q) { return; }
    document.getElementById("search_input").value = q;
    showPage("page_search");
    runSearch(q);
}

function doSearch() {
    var q = document.getElementById("search_input").value.trim();
    runSearch(q);
}

function runSearch(q) {
    var q_lower = q.toLowerCase();
    var results = db_karya.filter(function (k) {
        var author = getUserById(k.user_id);
        var author_name = author ? author.nama_display.toLowerCase() : "";
        return k.judul.toLowerCase().indexOf(q_lower) !== -1
            || k.genre.toLowerCase().indexOf(q_lower) !== -1
            || author_name.indexOf(q_lower) !== -1
            || k.sinopsis.toLowerCase().indexOf(q_lower) !== -1;
    });

    var el = document.getElementById("search_results");
    if (!q) {
        el.innerHTML = "";
        return;
    }
    if (results.length === 0) {
        el.innerHTML = '<p style="font-family:Arial,sans-serif; color:var(--text-muted); font-size:13px;">No works found for "' + escHtml(q) + '".</p>';
        return;
    }

    var html = '<p style="font-family:Arial,sans-serif; font-size:13px; color:var(--text-muted); margin-bottom:12px;">' + results.length + ' result(s) for "' + escHtml(q) + '"</p>';
    results.forEach(function (k) {
        var author = getUserById(k.user_id);
        var author_name = author ? author.nama_display : "Unknown";
        var badge_class = k.status_karya === "completed" ? "badge-completed" : "badge-ongoing";
        var badge_text  = k.status_karya === "completed" ? "Completed" : "Ongoing";
        html += '<div class="work-card">';
        html += '<div class="work-card-meta"><span class="badge ' + badge_class + '">' + badge_text + '</span>&nbsp;<span class="tag">» ' + escHtml(k.genre) + '</span></div>';
        html += '<div class="work-card-title" data-action="openWorkDetail" data-id="' + k.id_karya + '">' + escHtml(k.judul) + '</div>';
        html += '<div class="work-card-meta">by ' + escHtml(author_name) + '</div>';
        html += '<div class="work-card-synopsis">' + escHtml(k.sinopsis.substring(0, 160)) + '...</div>';
        html += '</div>';
    });
    el.innerHTML = html;
}

function renderProfile() {
    if (!current_user) {
        showPage("page_login");
        return;
    }
    var u = current_user;
    document.getElementById("profile_avatar").textContent = u.nama_display.charAt(0).toUpperCase();
    document.getElementById("profile_display_name").textContent = u.nama_display;
    document.getElementById("profile_username").textContent = "@" + u.username;

    var role_badge = u.role === "penulis"
        ? '<span class="badge badge-penulis">Writer</span>'
        : '<span class="badge badge-pembaca">Reader</span>';

    var status_badge = "";
    if (u.status_verifikasi === "Terverifikasi") {
        status_badge = '<span class="badge badge-verified">✓ Verified</span>';
    } else if (u.status_verifikasi === "Pendaftaran Aktif") {
        status_badge = '<span class="badge badge-active">Writer Registration Active</span>';
    }

    document.getElementById("profile_role_badge").innerHTML = role_badge;
    document.getElementById("profile_status_badge").innerHTML = status_badge;
    document.getElementById("profile_meta").innerHTML =
        'Member since ' + formatDate(u.tanggal_bergabung) + ' &nbsp;·&nbsp; ' + u.email;

    var my_works = db_karya.filter(function (k) { return k.user_id === u.user_id; });
    var profile_works = document.getElementById("profile_works_list");
    var works_section = document.getElementById("profile_works_section");

    if (my_works.length === 0) {
        works_section.style.display = u.role === "penulis" ? "block" : "none";
        profile_works.innerHTML = '<p style="font-size:13px; font-family:Arial,sans-serif; color:var(--text-muted);">No published works yet.</p>';
        return;
    }

    works_section.style.display = "block";
    var html = "";
    my_works.forEach(function (k) {
        var bab_count = db_bab.filter(function (b) { return b.id_karya === k.id_karya; }).length;
        var badge_class = k.status_karya === "completed" ? "badge-completed" : "badge-ongoing";
        var badge_text  = k.status_karya === "completed" ? "Completed" : "Ongoing";
        html += '<div class="work-card">';
        html += '<div class="work-card-meta"><span class="badge ' + badge_class + '">' + badge_text + '</span>&nbsp;<span class="tag">» ' + escHtml(k.genre) + '</span></div>';
        html += '<div class="work-card-title" data-action="openWorkDetail" data-id="' + k.id_karya + '">' + escHtml(k.judul) + '</div>';
        html += '<div class="work-card-meta">' + bab_count + ' chapters &nbsp;·&nbsp; Updated ' + formatDate(k.tanggal_update) + '</div>';
        html += '</div>';
    });
    profile_works.innerHTML = html;
}

function renderDashboard() {
    if (!current_user || current_user.role !== "penulis") {
        showPage("page_home");
        return;
    }

    var my_works = db_karya.filter(function (k) { return k.user_id === current_user.user_id; });
    var total_chapters = 0;
    var total_likes = 0;
    var total_comments = 0;

    my_works.forEach(function (k) {
        var babs = db_bab.filter(function (b) { return b.id_karya === k.id_karya; });
        total_chapters += babs.length;
        total_likes += getLikesForKarya(k.id_karya);
        total_comments += getCommentsForKarya(k.id_karya);
    });

    document.getElementById("stat_works").textContent = my_works.length;
    document.getElementById("stat_chapters").textContent = total_chapters;
    document.getElementById("stat_likes").textContent = total_likes;
    document.getElementById("stat_comments").textContent = total_comments;

    var tbody = document.getElementById("dashboard_work_tbody");
    var html = "";
    my_works.forEach(function (k) {
        var bab_count = db_bab.filter(function (b) { return b.id_karya === k.id_karya; }).length;
        var badge_class = k.status_karya === "completed" ? "badge-completed" : "badge-ongoing";
        var badge_text  = k.status_karya === "completed" ? "Completed" : "Ongoing";
        html += '<tr>';
        html += '<td><a href="#" data-action="openWorkDetail" data-id="' + k.id_karya + '">' + escHtml(k.judul) + '</a></td>';
        html += '<td><span class="tag">» ' + escHtml(k.genre) + '</span></td>';
        html += '<td><span class="badge ' + badge_class + '">' + badge_text + '</span></td>';
        html += '<td>' + bab_count + ' &nbsp;<button type="button" class="btn-secondary btn-small" data-action="openChapterModal" data-id="' + k.id_karya + '">+ Chapter</button></td>';
        html += '<td>' + formatDate(k.tanggal_update) + '</td>';
        html += '<td>';
        html += '<button type="button" class="btn-secondary btn-small" data-action="openWorkModal" data-id="' + k.id_karya + '">Edit</button> ';
        html += '<button type="button" class="btn-danger btn-small" data-action="confirmDeleteWork" data-id="' + k.id_karya + '">Delete</button>';
        html += '</td></tr>';
    });
    tbody.innerHTML = html || '<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No works yet. Click "+ Add Work" to get started.</td></tr>';
}

function openWorkModal(karya_id) {
    editing_work_id = karya_id;
    var modal = document.getElementById("modal_work");

    if (karya_id) {
        var k = getKaryaById(karya_id);
        document.getElementById("modal_work_title").textContent = "Edit Work";
        document.getElementById("modal_judul").value = k.judul;
        document.getElementById("modal_genre").value = k.genre;
        document.getElementById("modal_sinopsis").value = k.sinopsis;
        document.getElementById("modal_status").value = k.status_karya;
    } else {
        document.getElementById("modal_work_title").textContent = "Add New Work";
        document.getElementById("modal_judul").value = "";
        document.getElementById("modal_genre").value = "";
        document.getElementById("modal_sinopsis").value = "";
        document.getElementById("modal_status").value = "ongoing";
    }
    hideEl("modal_judul_err");
    hideEl("modal_genre_err");
    modal.classList.add("show");
}

function closeWorkModal() {
    document.getElementById("modal_work").classList.remove("show");
    editing_work_id = null;
}

function saveWork() {
    var judul_val   = document.getElementById("modal_judul").value.trim();
    var genre_val   = document.getElementById("modal_genre").value;
    var sinop_val   = document.getElementById("modal_sinopsis").value.trim();
    var status_val  = document.getElementById("modal_status").value;
    var valid = true;

    hideEl("modal_judul_err");
    hideEl("modal_genre_err");

    if (!judul_val) { showEl("modal_judul_err"); valid = false; }
    if (!genre_val) { showEl("modal_genre_err"); valid = false; }
    if (!valid) { return; }

    var today = new Date().toISOString().slice(0, 10);

    if (editing_work_id) {
        db_karya.forEach(function (k) {
            if (k.id_karya === editing_work_id) {
                k.judul          = judul_val;
                k.genre          = genre_val;
                k.sinopsis       = sinop_val;
                k.status_karya   = status_val;
                k.tanggal_update = today;
            }
        });
    } else {
        var new_id = "KRY-" + String(db_karya.length + 1).padStart(3, "0");
        db_karya.push({
            id_karya:          new_id,
            user_id:           current_user.user_id,
            judul:             judul_val,
            genre:             genre_val,
            sinopsis:          sinop_val,
            status_karya:      status_val,
            tanggal_publikasi: today,
            tanggal_update:    today
        });
    }
    closeWorkModal();
    buildGenreFilter();
    renderDashboard();
}

function confirmDeleteWork(karya_id) {
    var k = getKaryaById(karya_id);
    document.getElementById("delete_confirm_msg").textContent =
        'Delete "' + (k ? k.judul : "") + '"? All chapters and comments will also be deleted.';
    delete_callback = function () {
        var babs = db_bab.filter(function (b) { return b.id_karya === karya_id; });
        babs.forEach(function (b) {
            db_komentar = db_komentar.filter(function (c) { return c.id_bab !== b.id_bab; });
            db_likes    = db_likes.filter(function (l) { return l.id_bab !== b.id_bab; });
        });
        db_bab   = db_bab.filter(function (b) { return b.id_karya !== karya_id; });
        db_karya = db_karya.filter(function (k) { return k.id_karya !== karya_id; });
        closeDeleteModal();
        renderDashboard();
    };
    document.getElementById("delete_confirm_btn").onclick = function () { delete_callback(); };
    document.getElementById("modal_delete").classList.add("show");
}

function openChapterModal(karya_id) {
    editing_work_karya_id = karya_id;
    document.getElementById("modal_chap_title").textContent = "Add Chapter";
    document.getElementById("modal_chap_judul").value = "";
    document.getElementById("modal_chap_konten").value = "";
    hideEl("modal_chap_err");
    document.getElementById("modal_chapter").classList.add("show");
}

function closeChapterModal() {
    document.getElementById("modal_chapter").classList.remove("show");
    editing_work_karya_id = null;
}

function saveChapter() {
    var judul_val  = document.getElementById("modal_chap_judul").value.trim();
    var konten_val = document.getElementById("modal_chap_konten").value.trim();

    if (!judul_val) { showEl("modal_chap_err"); return; }
    hideEl("modal_chap_err");

    var existing = db_bab.filter(function (b) { return b.id_karya === editing_work_karya_id; });
    var next_num = existing.length + 1;
    var new_id   = "BAB-" + String(db_bab.length + 1).padStart(3, "0") + "X";
    var today    = new Date().toISOString().slice(0, 10);

    db_bab.push({
        id_bab: new_id,
        id_karya: editing_work_karya_id,
        nomor_bab: next_num,
        judul_bab: judul_val,
        konten: konten_val || "(Chapter content not yet written.)",
        tanggal_publikasi_bab: today
    });

    db_karya.forEach(function (k) {
        if (k.id_karya === editing_work_karya_id) {
            k.tanggal_update = today;
        }
    });

    closeChapterModal();
    renderDashboard();
}

function resetWriterReg() {
    document.getElementById("writer_step1").style.display = "block";
    document.getElementById("writer_step2").style.display = "none";
    document.getElementById("writer_step3").style.display = "none";
    setRegStep(1);
    document.getElementById("wr_pen_name").value = current_user ? current_user.nama_display : "";
    document.getElementById("wr_genre").value = "";
    document.getElementById("wr_bio").value = "";
    document.getElementById("wr_method").value = "";
}

function setRegStep(n) {
    for (var i = 1; i <= 3; i++) {
        var step_el = document.getElementById("step" + i);
        step_el.classList.remove("active", "done");
        if (i < n) { step_el.classList.add("done"); }
        if (i === n) { step_el.classList.add("active"); }
    }
}

function writerStep2() {
    var pen_name = document.getElementById("wr_pen_name").value.trim();
    var genre_val = document.getElementById("wr_genre").value;
    var valid = true;

    hideEl("wr_pen_err");
    hideEl("wr_genre_err");

    if (!pen_name) { showEl("wr_pen_err"); valid = false; }
    if (!genre_val) { showEl("wr_genre_err"); valid = false; }
    if (!valid) { return; }

    document.getElementById("writer_step1").style.display = "none";
    document.getElementById("writer_step2").style.display = "block";
    setRegStep(2);
}

function writerBackStep1() {
    document.getElementById("writer_step2").style.display = "none";
    document.getElementById("writer_step1").style.display = "block";
    setRegStep(1);
}

function writerConfirmPayment() {
    var method_val = document.getElementById("wr_method").value;
    hideEl("wr_method_err");
    if (!method_val) { showEl("wr_method_err"); return; }

    var method_labels = { transfer: "Bank Transfer", ewallet: "E-Wallet", va: "Virtual Account" };
    var trx_id = "TRX-" + String(Date.now()).slice(-6);
    var today  = new Date().toISOString().replace("T", " ").slice(0, 19);

    document.getElementById("wr_transaction_detail").innerHTML =
        '<strong>Transaction Details</strong><br>'
        + 'Transaction ID : ' + trx_id + '<br>'
        + 'Method         : ' + (method_labels[method_val] || method_val) + '<br>'
        + 'Amount         : Rp 50.000<br>'
        + 'Status         : <strong style="color:var(--accent)">Paid</strong><br>'
        + 'Time           : ' + today;

    current_user.role = "penulis";
    current_user.status_verifikasi = "Pendaftaran Aktif";
    db_users.forEach(function (u) {
        if (u.user_id === current_user.user_id) {
            u.role = "penulis";
            u.status_verifikasi = "Pendaftaran Aktif";
        }
    });

    document.getElementById("writer_step2").style.display = "none";
    document.getElementById("writer_step3").style.display = "block";
    setRegStep(3);
    updateHeaderForUser();
}

function getUserById(user_id) {
    var found = null;
    db_users.forEach(function (u) {
        if (u.user_id === user_id) { found = u; }
    });
    return found;
}

function getKaryaById(karya_id) {
    var found = null;
    db_karya.forEach(function (k) {
        if (k.id_karya === karya_id) { found = k; }
    });
    return found;
}

function getBabById(bab_id) {
    var found = null;
    db_bab.forEach(function (b) {
        if (b.id_bab === bab_id) { found = b; }
    });
    return found;
}

function getLikesForKarya(karya_id) {
    var bab_ids = db_bab
        .filter(function (b) { return b.id_karya === karya_id; })
        .map(function (b) { return b.id_bab; });
    return db_likes.filter(function (l) { return bab_ids.indexOf(l.id_bab) !== -1; }).length;
}

function getCommentsForKarya(karya_id) {
    var bab_ids = db_bab
        .filter(function (b) { return b.id_karya === karya_id; })
        .map(function (b) { return b.id_bab; });
    return db_komentar.filter(function (c) { return bab_ids.indexOf(c.id_bab) !== -1; }).length;
}

function formatDate(date_str) {
    if (!date_str) { return "-"; }
    var d = new Date(date_str);
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function formatDateTime(dt_str) {
    return dt_str ? dt_str.slice(0, 16).replace("T", " ") : "-";
}

function escHtml(str) {
    if (!str) { return ""; }
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function showEl(el_id) {
    var el = document.getElementById(el_id);
    if (el) { el.classList.add("show"); }
}

function hideEl(el_id) {
    var el = document.getElementById(el_id);
    if (el) { el.classList.remove("show"); }
}

function showElMsg(el_id, msg) {
    var el = document.getElementById(el_id);
    if (el) {
        el.textContent = msg;
        el.classList.add("show");
    }
}

buildGenreFilter();
renderWorkList();

document.addEventListener('click', function(e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    e.preventDefault();
    var action = el.getAttribute('data-action');
    var id     = el.getAttribute('data-id') || '';
    var num    = el.getAttribute('data-num') || '';
    if (action === 'openWorkDetail')        { openWorkDetail(id); }
    else if (action === 'openReading')      { openReading(id, num); }
    else if (action === 'setGenreFilter')   { setGenreFilter(id); }
    else if (action === 'openChapterModal') { openChapterModal(id); }
    else if (action === 'openWorkModal')    { openWorkModal(id); }
    else if (action === 'confirmDeleteComment') { confirmDeleteComment(id); }
    else if (action === 'confirmDeleteWork')    { confirmDeleteWork(id); }
});

function updateHeroBanner() {
    var heroActions = document.querySelector('#hero_guest .hero-actions');
    if (!heroActions) return;
    if (current_user) {
        if (current_user.role === 'penulis') {
            heroActions.innerHTML = '<button type="button" class="btn-hero-primary" onclick="showPage(\'page_dashboard\')">Buka Dashboard</button>';
        } else {
            heroActions.innerHTML = '<button type="button" class="btn-hero-primary" onclick="var el=document.getElementById(&quot;browse_title&quot;);if(el)el.scrollIntoView({behavior:&quot;smooth&quot;});">Jelajahi Karya</button>';
        }
    } else {
        heroActions.innerHTML = '<button type="button" class="btn-hero-primary" onclick="showPage(\'page_register\')">Create Account</button>';
    }
}
