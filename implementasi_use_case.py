db_users = [
    {"user_id": "USR-001", "nama_display": "Claudia Zahra", "email": "reader@aksara.id", "password": "pass123"},
    {"user_id": "USR-002", "nama_display": "Tere Liye",     "email": "tere@aksara.id",   "password": "pass123"},
    {"user_id": "USR-003", "nama_display": "Dee Lestari",   "email": "dee@aksara.id",    "password": "pass123"},
    {"user_id": "USR-004", "nama_display": "Dwi Putra",     "email": "dwi@aksara.id",    "password": "pass123"},
    {"user_id": "USR-005", "nama_display": "Pidi Baiq",     "email": "pidi@aksara.id",   "password": "pass123"},
    {"user_id": "USR-006", "nama_display": "Andrea Hirata", "email": "andrea@aksara.id", "password": "pass123"},
    {"user_id": "USR-007", "nama_display": "Pembaca Baru",  "email": "baru@aksara.id",   "password": "pass123"},
    {"user_id": "USR-008", "nama_display": "Rina Pratama",  "email": "rina@aksara.id",   "password": "pass123"},
]

db_karya = [
    {"id_karya": "KRY-001", "user_id": "USR-002", "judul": "Bumi", "genre": "Fantasy", "status_karya": "completed"},
    {"id_karya": "KRY-002", "user_id": "USR-005", "judul": "Dilan: Dia adalah Dilanku Tahun 1990", "genre": "Romance", "status_karya": "completed"},
    {"id_karya": "KRY-003", "user_id": "USR-002", "judul": "Negeri di Ujung Tanduk", "genre": "Mystery", "status_karya": "completed"},
    {"id_karya": "KRY-004", "user_id": "USR-003", "judul": "Supernova: Ksatria, Puteri, dan Bintang Jatuh", "genre": "Science Fiction", "status_karya": "completed"},
    {"id_karya": "KRY-005", "user_id": "USR-006", "judul": "Laskar Pelangi", "genre": "Slice of Life", "status_karya": "completed"},
    {"id_karya": "KRY-006", "user_id": "USR-003", "judul": "Aroma Karsa", "genre": "Fantasy", "status_karya": "ongoing"},
]

db_bab = [
    {"id_bab": "BAB-001",  "id_karya": "KRY-001"},
    {"id_bab": "BAB-002",  "id_karya": "KRY-001"},
    {"id_bab": "BAB-003",  "id_karya": "KRY-001"},
    {"id_bab": "BAB-001B", "id_karya": "KRY-002"},
    {"id_bab": "BAB-002B", "id_karya": "KRY-002"},
    {"id_bab": "BAB-001C", "id_karya": "KRY-003"},
    {"id_bab": "BAB-001D", "id_karya": "KRY-004"},
    {"id_bab": "BAB-001E", "id_karya": "KRY-005"},
    {"id_bab": "BAB-002E", "id_karya": "KRY-005"},
    {"id_bab": "BAB-001F", "id_karya": "KRY-006"},
    {"id_bab": "BAB-002F", "id_karya": "KRY-006"},
]

db_likes = [
    {"user_id": "USR-001", "id_bab": "BAB-001"},
    {"user_id": "USR-001", "id_bab": "BAB-002"},
    {"user_id": "USR-001", "id_bab": "BAB-001B"},
    {"user_id": "USR-001", "id_bab": "BAB-001F"},
    {"user_id": "USR-004", "id_bab": "BAB-001B"},
    {"user_id": "USR-004", "id_bab": "BAB-002B"},
    {"user_id": "USR-004", "id_bab": "BAB-001C"},
    {"user_id": "USR-002", "id_bab": "BAB-001D"},
    {"user_id": "USR-008", "id_bab": "BAB-001C"},
    {"user_id": "USR-008", "id_bab": "BAB-001B"},
    {"user_id": "USR-008", "id_bab": "BAB-002B"},
]

class RekomendasiKarya:
    label_populer = "Popular for New Readers"

    def __init__(self, daftar_karya, daftar_like, batas_hasil=3):
        self.daftar_karya = daftar_karya
        self.daftar_like = daftar_like
        self.batas_hasil = batas_hasil

    def hitung_genre_favorit(self, user_id):
        jumlah_per_genre = {}
        for like in self.daftar_like:
            if like["user_id"] == user_id:
                genre = like["genre"]
                jumlah_per_genre[genre] = jumlah_per_genre.get(genre, 0) + 1
        genre_favorit = None
        jumlah_terbanyak = 0
        for genre in jumlah_per_genre:
            if jumlah_per_genre[genre] > jumlah_terbanyak:
                genre_favorit = genre
                jumlah_terbanyak = jumlah_per_genre[genre]
        return genre_favorit

    def rekomendasi_personal(self, genre):
        return [karya for karya in self.daftar_karya if karya["genre"] == genre][:self.batas_hasil]

    def karya_populer(self):
        return self.daftar_karya[:self.batas_hasil]

    def dapatkan_rekomendasi(self, user_id):
        genre = self.hitung_genre_favorit(user_id) if user_id else None
        if genre:
            return {
                "label": f"Recommended for You\nBecause you liked {genre} works",
                "daftar": self.rekomendasi_personal(genre)
            }
        return {
            "label": self.label_populer,
            "daftar": self.karya_populer()
        }

    def susun_tampilan(self, hasil):
        baris = [f"{hasil['label']}"]
        for karya in hasil["daftar"]:
            baris.extend([
                "",
                f"[{karya['status']}] » {karya['genre']}",
                karya['judul'],
                f"by {karya['penulis']} · {karya['jumlah_bab']} chapters · {karya['likes']} likes"
            ])
        return "\n".join(baris)

class AksaraSystem:

    def __init__(self, users, karya, bab, likes):
        self.users = users
        self.karya = karya
        self.bab = bab
        self.likes = likes

    def login(self, email, password):
        for user in self.users:
            if user["email"] == email and user["password"] == password:
                return user["user_id"]
        return None

    def cari_nama_user(self, user_id):
        for user in self.users:
            if user["user_id"] == user_id:
                return user["nama_display"]
        return "Unknown"

    def siapkan_data_karya(self):
        hasil = []
        for karya in self.karya:
            daftar_id_bab = []
            for bab in self.bab:
                if bab["id_karya"] == karya["id_karya"]:
                    daftar_id_bab.append(bab["id_bab"])
            jumlah_like = 0
            for like in self.likes:
                if like["id_bab"] in daftar_id_bab:
                    jumlah_like += 1
            hasil.append({
                "id": karya["id_karya"],
                "judul": karya["judul"],
                "genre": karya["genre"],
                "penulis": self.cari_nama_user(karya["user_id"]),
                "status": karya["status_karya"].capitalize(),
                "jumlah_bab": len(daftar_id_bab),
                "likes": jumlah_like,
            })
        hasil.sort(key=lambda x: x["likes"], reverse=True)
        return hasil

    def siapkan_data_like(self, user_id):
        hasil = []
        for like in self.likes:
            if like["user_id"] != user_id:
                continue
            for bab in self.bab:
                if bab["id_bab"] == like["id_bab"]:
                    for karya in self.karya:
                        if karya["id_karya"] == bab["id_karya"]:
                            hasil.append({"user_id": user_id, "genre": karya["genre"]})
        return hasil

    def lihat_rekomendasi(self, user_id=None):
        data_karya = self.siapkan_data_karya()
        data_like = self.siapkan_data_like(user_id) if user_id else []
        rekomendasi = RekomendasiKarya(data_karya, data_like)
        hasil = rekomendasi.dapatkan_rekomendasi(user_id)
        return rekomendasi.susun_tampilan(hasil)

if __name__ == "__main__":
    sistem = AksaraSystem(db_users, db_karya, db_bab, db_likes)
    print("# Skenario 1: Pembaca login, punya riwayat like")
    user_id = sistem.login("reader@aksara.id", "pass123")
    print(sistem.lihat_rekomendasi(user_id))
    print("\n# Skenario 2: Genre favorit = like terbanyak")
    user_id = sistem.login("rina@aksara.id", "pass123")
    print(sistem.lihat_rekomendasi(user_id))
    print("\n# Skenario 3: Pembaca login, belum pernah like")
    user_id = sistem.login("baru@aksara.id", "pass123")
    print(sistem.lihat_rekomendasi(user_id))
    print("\n# Skenario 4: Pengunjung belum login")
    print(sistem.lihat_rekomendasi())