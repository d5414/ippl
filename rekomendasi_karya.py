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
        return sum(1 for bab in self.daftar_bab if bab["id_karya"] == id_karya)

    def hitung_jumlah_like(self, id_karya):
        return sum(1 for like in self.daftar_like if self.cari_karya_dari_bab(like["id_bab"]) == id_karya)

    def format_tanggal(self, tanggal):
        nama_bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
        bagian = tanggal.split("-")
        return f"{int(bagian[2])} {nama_bulan[int(bagian[1]) - 1]} {bagian[0]}"

    def hitung_genre_favorit(self, user_id):
        jumlah_per_genre = {}
        for like in self.daftar_like:
            if like["user_id"] == user_id:
                genre = self.cari_genre_dari_bab(like["id_bab"])
                jumlah_per_genre[genre] = jumlah_per_genre.get(genre, 0) + 1

        if not jumlah_per_genre:
            return None

        genre_favorit = None
        jumlah_terbanyak = 0
        for genre, jumlah in jumlah_per_genre.items():
            if jumlah > jumlah_terbanyak or (jumlah == jumlah_terbanyak and genre < genre_favorit):
                genre_favorit = genre
                jumlah_terbanyak = jumlah
        return genre_favorit

    def buat_data_kartu(self, karya, alasan):
        sinopsis = karya["sinopsis"]
        if len(sinopsis) > 180:
            sinopsis = f"{sinopsis[:180]}..."

        status = "Completed" if karya["status_karya"] == "completed" else "Ongoing"

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
        alasan = f"Because you liked {genre} works"
        hasil = [self.buat_data_kartu(karya, alasan) for karya in self.daftar_karya if karya["genre"] == genre]
        return hasil[:self.batas_hasil]

    def karya_populer(self):
        urutan = sorted(self.daftar_karya, key=lambda karya: (-self.hitung_jumlah_like(karya["id_karya"]), karya["id_karya"]))
        return [self.buat_data_kartu(karya, self.label_populer) for karya in urutan[:self.batas_hasil]]

    def dapatkan_rekomendasi(self, user_id):
        if user_id is not None:
            genre = self.hitung_genre_favorit(user_id)
            if genre is not None:
                daftar = self.rekomendasi_personal(genre)
                if daftar:
                    return {
                        "jenis": "personal",
                        "banner": "Recommended for You",
                        "keterangan": f"Because you liked {genre} works, here are more you might enjoy.",
                        "judul_daftar": f"Recommended: {genre}",
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
        baris = [hasil["banner"], hasil["keterangan"], "", hasil["judul_daftar"]]
        for karya in hasil["daftar"]:
            kata_bab = "chapter" if karya["jumlah_bab"] == 1 else "chapters"
            baris.extend([
                "",
                f"[{karya['status']}] » {karya['genre']}",
                karya["judul"],
                f"by {karya['penulis']} · Updated {karya['tanggal_update']}",
                karya["sinopsis"],
                f"{karya['jumlah_bab']} {kata_bab}   {karya['jumlah_like']} likes"
            ])
        return "\n".join(baris)

if __name__ == "__main__":
    daftar_user = [{"user_id": "USR-002", "nama_display": "Tere Liye"}]
    daftar_karya = [
        {"id_karya": "KRY-001", "user_id": "USR-002", "judul": "Bumi", "genre": "Fantasy",
         "status_karya": "completed", "tanggal_update": "2014-03-01",
         "sinopsis": "Raib, remaja 15 tahun, tiba-tiba menghilang saat bercermin..."}
    ]
    daftar_bab = [{"id_bab": "BAB-001", "id_karya": "KRY-001"}]
    daftar_like = [{"user_id": "USR-001", "id_bab": "BAB-001"}]
    rekomendasi = RekomendasiKarya(daftar_user, daftar_karya, daftar_bab, daftar_like)
    pengguna = "USR-001"
    
    print(f"Pengguna: {pengguna}\n")
    hasil = rekomendasi.dapatkan_rekomendasi(pengguna)
    print(rekomendasi.susun_tampilan(hasil))
