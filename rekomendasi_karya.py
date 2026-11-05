class RekomendasiKarya:
    label_populer = "Popular for New Readers"

    def __init__(self, daftar_karya, daftar_like, batas_hasil=3):
        self.daftar_karya = daftar_karya
        self.daftar_like = daftar_like
        self.batas_hasil = batas_hasil

    def hitung_genre_favorit(self, user_id):
        for like in self.daftar_like:
            if like["user_id"] == user_id:
                return like["genre"]
        return None

    def rekomendasi_personal(self, genre):
        return [karya for karya in self.daftar_karya if karya["genre"] == genre][:self.batas_hasil]

    def karya_populer(self):
        return self.daftar_karya[:self.batas_hasil]

    def dapatkan_rekomendasi(self, user_id):
        genre = self.hitung_genre_favorit(user_id) if user_id else None
        
        if genre:
            return {
                "label": f"Recommended for You\nBecause you like {genre}",
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


if __name__ == "__main__":
    data_karya = [
        {"id": "KRY-001", "judul": "Bumi", "genre": "Fantasy", "penulis": "Tere Liye", "status": "Completed", "jumlah_bab": 15, "likes": 320},
        {"id": "KRY-002", "judul": "Dilan 1990", "genre": "Romance", "penulis": "Pidi Baiq", "status": "Completed", "jumlah_bab": 20, "likes": 450},
        {"id": "KRY-003", "judul": "Aroma Karsa", "genre": "Fantasy", "penulis": "Dee Lestari", "status": "Ongoing", "jumlah_bab": 12, "likes": 210}
    ]
    data_like = [{"user_id": "USR-001", "genre": "Fantasy"}]
    rekomendasi = RekomendasiKarya(data_karya, data_like)
    print("USR-001")
    hasil_personal = rekomendasi.dapatkan_rekomendasi("USR-001")
    print(rekomendasi.susun_tampilan(hasil_personal))
