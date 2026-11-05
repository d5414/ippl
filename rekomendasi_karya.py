# Aksara - Class RekomendasiKarya
# Class ini menghasilkan daftar karya yang direkomendasikan untuk pembaca
# berdasarkan genre dari bab yang pernah di-like.
# Pembaca baru yang belum punya riwayat like mendapat karya populer,
# dengan label "Popular for New Readers" (bukan rekomendasi personal).

class RekomendasiKarya:
    # Label untuk pembaca baru yang belum punya riwayat like
    label_populer = "Popular for New Readers"

    # Constructor: menerima data karya, bab, dan like dalam bentuk list of dictionary
    def __init__(self, daftar_karya, daftar_bab, daftar_like, batas_hasil=5):
        self.daftar_karya = daftar_karya
        self.daftar_bab = daftar_bab
        self.daftar_like = daftar_like
        self.batas_hasil = batas_hasil

    # Method untuk mencari id karya dari sebuah bab
    def cari_karya_dari_bab(self, id_bab):
        for bab in self.daftar_bab:
            if bab["id_bab"] == id_bab:
                return bab["id_karya"]
        return None

    # Method untuk mencari genre dari sebuah bab (bab -> karya -> genre)
    def cari_genre_dari_bab(self, id_bab):
        id_karya = self.cari_karya_dari_bab(id_bab)
        for karya in self.daftar_karya:
            if karya["id_karya"] == id_karya:
                return karya["genre"]
        return None

    # Method untuk menghitung genre yang paling sering di-like oleh user
    def hitung_genre_favorit(self, user_id):
        # Menghitung jumlah like per genre
        jumlah_per_genre = {}
        for like in self.daftar_like:
            if like["user_id"] == user_id:
                genre = self.cari_genre_dari_bab(like["id_bab"])
                if genre in jumlah_per_genre:
                    jumlah_per_genre[genre] += 1
                else:
                    jumlah_per_genre[genre] = 1

        # Jika user belum pernah memberi like, tidak ada genre favorit
        if len(jumlah_per_genre) == 0:
            return None

        # Mencari genre dengan jumlah like terbanyak
        # (jika seri, dipilih genre yang urutan abjadnya lebih awal)
        genre_favorit = None
        jumlah_terbanyak = 0
        for genre in jumlah_per_genre:
            jumlah = jumlah_per_genre[genre]
            if jumlah > jumlah_terbanyak or (jumlah == jumlah_terbanyak and genre < genre_favorit):
                genre_favorit = genre
                jumlah_terbanyak = jumlah
        return genre_favorit

    # Method untuk mengambil karya bergenre favorit beserta alasan rekomendasinya
    def rekomendasi_personal(self, genre):
        alasan = "Because you liked " + genre + " works"
        hasil = []
        for karya in self.daftar_karya:
            if karya["genre"] == genre:
                hasil.append({
                    "id_karya": karya["id_karya"],
                    "judul": karya["judul"],
                    "genre": karya["genre"],
                    "alasan": alasan
                })
        # Batasi jumlah hasil sesuai batas_hasil
        return hasil[:self.batas_hasil]

    # Method untuk mengambil karya terpopuler (berdasarkan jumlah like)
    def karya_populer(self):
        # Menghitung jumlah like untuk setiap karya
        total_like = {}
        for karya in self.daftar_karya:
            total_like[karya["id_karya"]] = 0
        for like in self.daftar_like:
            id_karya = self.cari_karya_dari_bab(like["id_bab"])
            total_like[id_karya] += 1

        # Mengurutkan karya dari like terbanyak menggunakan fungsi lambda
        urutan = sorted(self.daftar_karya,
                        key=lambda karya: (-total_like[karya["id_karya"]], karya["id_karya"]))

        hasil = []
        for karya in urutan[:self.batas_hasil]:
            hasil.append({
                "id_karya": karya["id_karya"],
                "judul": karya["judul"],
                "genre": karya["genre"],
                "alasan": self.label_populer
            })
        return hasil

    # Method utama yang dipanggil oleh antarmuka
    # user_id berisi None jika pengunjung belum login
    def dapatkan_rekomendasi(self, user_id):
        if user_id is not None:
            genre = self.hitung_genre_favorit(user_id)
            if genre is not None:
                daftar = self.rekomendasi_personal(genre)
                if len(daftar) > 0:
                    return {"jenis": "personal",
                            "label": "Recommended for you: " + genre,
                            "daftar": daftar}

        # Jika tidak ada riwayat like, tampilkan karya populer
        return {"jenis": "populer",
                "label": self.label_populer,
                "daftar": self.karya_populer()}


# Contoh penggunaan: data simulasi yang sama dengan IMK
daftar_karya = [
    {"id_karya": "KRY-001", "judul": "Bumi", "genre": "Fantasy"},
    {"id_karya": "KRY-002", "judul": "Dilan: Dia adalah Dilanku Tahun 1990", "genre": "Romance"},
    {"id_karya": "KRY-003", "judul": "Negeri di Ujung Tanduk", "genre": "Mystery"},
    {"id_karya": "KRY-004", "judul": "Supernova", "genre": "Science Fiction"},
    {"id_karya": "KRY-005", "judul": "Laskar Pelangi", "genre": "Slice of Life"},
    {"id_karya": "KRY-006", "judul": "Aroma Karsa", "genre": "Fantasy"}
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

# Membuat objek dari class RekomendasiKarya
rekomendasi = RekomendasiKarya(daftar_karya, daftar_bab, daftar_like)

# Mencoba beberapa pengguna: punya riwayat like, belum punya riwayat, dan belum login
for pengguna in ["USR-001", "USR-004", "USR-006", None]:
    hasil = rekomendasi.dapatkan_rekomendasi(pengguna)
    print("Pengguna:", pengguna, "|", hasil["label"])
    for karya in hasil["daftar"]:
        print("  -", karya["id_karya"], karya["judul"], "|", karya["alasan"])
