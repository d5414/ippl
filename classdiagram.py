class RekomendasiKarya:
     label_populer = "Popular for New Readers"

    def __init__(self, daftar_user, daftar_karya, daftar_bab, daftar_like, batas_hasil=5):
        self.daftar_user = daftar_user
        self.daftar_karya = daftar_karya
        self.daftar_bab = daftar_bab
        self.daftar_like = daftar_like
        self.batas_hasil = batas_hasil

    def cari_karya_dari_bab(self, id_bab):
        for bab in self.daftar_bab:
            if bab["id_bab"] == id_bab:
                return bab["id_karya"]
        return None

    def cari_genre_dari_bab(self, id_bab):
        id_karya = self.cari_karya_dari_bab(id_bab)
        for karya in self.daftar_karya:
            if karya["id_karya"] == id_karya:
                return karya["genre"]
        return None

    def cari_nama_penulis(self, user_id):
        for user in self.daftar_user:
            if user["user_id"] == user_id:
                return user["nama_display"]
        return "Unknown"

    def hitung_jumlah_bab(self, id_karya):
        jumlah = 0
        for bab in self.daftar_bab:
            if bab["id_karya"] == id_karya:
                jumlah += 1
        return jumlah

     def hitung_jumlah_like(self, id_karya):
        jumlah = 0
        for like in self.daftar_like:
            if self.cari_karya_dari_bab(like["id_bab"]) == id_karya:
                jumlah += 1
        return jumlah

    def format_tanggal(self, tanggal):
        nama_bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
                      "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
        bagian = tanggal.split("-")
        return str(int(bagian[2])) + " " + nama_bulan[int(bagian[1]) - 1] + " " + bagian[0]

    def hitung_genre_favorit(self, user_id):
        jumlah_per_genre = {}
        for like in self.daftar_like:
            if like["user_id"] == user_id:
                genre = self.cari_genre_dari_bab(like["id_bab"])
                if genre in jumlah_per_genre:
                    jumlah_per_genre[genre] += 1
                else:
                    jumlah_per_genre[genre] = 1

        if len(jumlah_per_genre) == 0:
            return None

        genre_favorit = None
        jumlah_terbanyak = 0
        for genre in jumlah_per_genre:
            jumlah = jumlah_per_genre[genre]
            if jumlah > jumlah_terbanyak or (jumlah == jumlah_terbanyak and genre < genre_favorit):
                genre_favorit = genre
                jumlah_terbanyak = jumlah
        return genre_favorit

    def buat_data_kartu(self, karya, alasan):
        sinopsis = karya["sinopsis"]
        if len(sinopsis) > 180:
            sinopsis = sinopsis[:180] + "..."

        if karya["status_karya"] == "completed":
            status = "Completed"
        else:
            status = "Ongoing"

        return {
            "id_karya": karya["id_karya"],
            "judul": karya["judul"],
            "genre": karya["genre"],
            "status": status,
            "penulis": self.cari_nama_penulis(karya["user_id"]),
            "tanggal_update": self.format_tanggal(karya["tanggal_update"]),
            "sinopsis": sinopsis,
            "jumlah_bab": self.hitung_jumlah_bab(karya["id_karya"]),
            "jumlah_like": self.hitung_jumlah_like(karya["id_karya"]),
            "alasan": alasan
        }

    def rekomendasi_personal(self, genre):
        alasan = "Because you liked " + genre + " works"
        hasil = []
        for karya in self.daftar_karya:
            if karya["genre"] == genre:
                hasil.append(self.buat_data_kartu(karya, alasan))
        return hasil[:self.batas_hasil]

    def karya_populer(self):
        urutan = sorted(self.daftar_karya,
                        key=lambda karya: (-self.hitung_jumlah_like(karya["id_karya"]), karya["id_karya"]))

        hasil = []
        for karya in urutan[:self.batas_hasil]:
            hasil.append(self.buat_data_kartu(karya, self.label_populer))
        return hasil

    def dapatkan_rekomendasi(self, user_id):
        if user_id is not None:
            genre = self.hitung_genre_favorit(user_id)
            if genre is not None:
                daftar = self.rekomendasi_personal(genre)
                if len(daftar) > 0:
                    return {
                        "jenis": "personal",
                        "banner": "Recommended for You",
                        "keterangan": "Because you liked " + genre + " works, here are more you might enjoy.",
                        "judul_daftar": "Recommended: " + genre,
                        "daftar": daftar
                    }

        return {
            "jenis": "populer",
            "banner": self.label_populer,
            "keterangan": "Belum ada riwayat like, jadi ini karya yang paling banyak disukai pembaca.",
            "judul_daftar": self.label_populer,
            "daftar": self.karya_populer()
        }

    def susun_tampilan(self, hasil):
        baris = []
        baris.append(hasil["banner"])
        baris.append(hasil["keterangan"])
        baris.append("")
        baris.append("=== " + hasil["judul_daftar"] + " ===")

        for i in range(len(hasil["daftar"])):
            karya = hasil["daftar"][i]
            if i > 0:
                baris.append("-" * 40)
            else:
                baris.append("")
            baris.append("[" + karya["status"] + "] » " + karya["genre"])
            baris.append(karya["judul"])
            baris.append("by " + karya["penulis"] + " · Updated " + karya["tanggal_update"])
            baris.append(karya["sinopsis"])

            kata_bab = "chapters"
            if karya["jumlah_bab"] == 1:
                kata_bab = "chapter"
            baris.append(str(karya["jumlah_bab"]) + " " + kata_bab + "   " + str(karya["jumlah_like"]) + " likes")

        return "\n".join(baris)

daftar_user = [
    {"user_id": "USR-002", "nama_display": "Tere Liye"},
    {"user_id": "USR-003", "nama_display": "Dee Lestari"},
    {"user_id": "USR-005", "nama_display": "Pidi Baiq"},
    {"user_id": "USR-006", "nama_display": "Andrea Hirata"}
]

daftar_karya = [
    {"id_karya": "KRY-001", "user_id": "USR-002", "judul": "Bumi", "genre": "Fantasy",
     "status_karya": "completed", "tanggal_update": "2014-03-01",
     "sinopsis": (
              "Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin. Ia "
              "ternyata berasal dari Klan Bulan—sebuah dunia tersembunyi di balik "
              "cermin yang selama ini tidak ia ketahui. Petualangan pun dimulai "
              "ketika ancaman besar mengancam seluruh klannya dan Raib harus memilih "
              "antara diam atau berjuang.")},
    {"id_karya": "KRY-002", "user_id": "USR-005", "judul": "Dilan: Dia adalah Dilanku Tahun 1990", "genre": "Romance",
     "status_karya": "completed", "tanggal_update": "2014-01-06",
     "sinopsis": (
              "Milea, siswi pindahan dari Jakarta, bertemu Dilan—cowok anggota geng "
              "motor yang memikatnya dengan cara-cara tak terduga dan penuh humor. "
              "Bukan bunga, bukan cokelat—Dilan menyatakan cinta dengan soal "
              "matematika. Kisah cinta SMA yang hangat dan membuat rindu.")},
    {"id_karya": "KRY-003", "user_id": "USR-002", "judul": "Negeri di Ujung Tanduk", "genre": "Mystery",
     "status_karya": "completed", "tanggal_update": "2013-05-01",
     "sinopsis": (
              "Thomas, konsultan politik berbakat, terjerat konspirasi besar yang "
              "melibatkan korupsi, mafia hukum, dan kekuatan gelap yang mengendalikan "
              "negeri dari balik layar. Dalam sebuah kapal pesiar mewah di lepas "
              "pantai Hong Kong, ia harus memecahkan teka-teki sebelum semuanya "
              "terlambat.")},
    {"id_karya": "KRY-004", "user_id": "USR-003", "judul": "Supernova: Ksatria, Puteri, dan Bintang Jatuh", "genre": "Science Fiction",
     "status_karya": "completed", "tanggal_update": "2001-02-01",
     "sinopsis": (
              "Reuben dan Dimas menulis novel bersama tentang Ksatria dan Puteri. "
              "Tanpa diduga, kisah fiksi mereka mulai bersinggungan dengan kehidupan "
              "nyata melalui jaringan koneksi tak terduga. Sebuah eksplorasi cinta, "
              "sains, dan spiritualitas yang melampaui batas genre.")},
    {"id_karya": "KRY-005", "user_id": "USR-006", "judul": "Laskar Pelangi", "genre": "Slice of Life",
     "status_karya": "completed", "tanggal_update": "2005-09-26",
     "sinopsis": (
              "Sepuluh anak dari keluarga miskin di Belitung berjuang mendapatkan "
              "pendidikan di SD Muhammadiyah yang hampir rubuh. Dengan semangat yang "
              "luar biasa dan seorang guru bernama Bu Mus, mereka membuktikan bahwa "
              "mimpi bisa mengalahkan segala keterbatasan.")},
    {"id_karya": "KRY-006", "user_id": "USR-003", "judul": "Aroma Karsa", "genre": "Fantasy",
     "status_karya": "ongoing", "tanggal_update": "2018-04-28",
     "sinopsis": (
              "Jati Wesi, pemuda yang tumbuh di tempat pembuangan sampah, memiliki "
              "indra penciuman luar biasa. Pencariannya akan asal-usul dirinya "
              "membawanya pada legenda Puspa Karsa—tanaman langka yang konon mampu "
              "mengendalikan kehendak manusia dan telah diburu selama berabad-abad.")}
]

daftar_bab = [
    {"id_bab": "BAB-001", "id_karya": "KRY-001"},
    {"id_bab": "BAB-002", "id_karya": "KRY-001"},
    {"id_bab": "BAB-003", "id_karya": "KRY-001"},
    {"id_bab": "BAB-001B", "id_karya": "KRY-002"},
    {"id_bab": "BAB-002B", "id_karya": "KRY-002"},
    {"id_bab": "BAB-001C", "id_karya": "KRY-003"},
    {"id_bab": "BAB-001D", "id_karya": "KRY-004"},
    {"id_bab": "BAB-001E", "id_karya": "KRY-005"},
    {"id_bab": "BAB-002E", "id_karya": "KRY-005"},
    {"id_bab": "BAB-001F", "id_karya": "KRY-006"},
    {"id_bab": "BAB-002F", "id_karya": "KRY-006"}
]

daftar_like = [
    {"user_id": "USR-001", "id_bab": "BAB-001"},
    {"user_id": "USR-001", "id_bab": "BAB-002"},
    {"user_id": "USR-001", "id_bab": "BAB-001B"},
    {"user_id": "USR-001", "id_bab": "BAB-001F"},
    {"user_id": "USR-004", "id_bab": "BAB-001B"},
    {"user_id": "USR-004", "id_bab": "BAB-002B"},
    {"user_id": "USR-004", "id_bab": "BAB-001C"},
    {"user_id": "USR-002", "id_bab": "BAB-001D"}
]

rekomendasi = RekomendasiKarya(daftar_user, daftar_karya, daftar_bab, daftar_like)

for pengguna in ["USR-001", "USR-004", "USR-006", None]:
    print("==================== Pengguna:", pengguna, "====================")
    hasil = rekomendasi.dapatkan_rekomendasi(pengguna)
    print(rekomendasi.susun_tampilan(hasil))
    print()
