<template>
    <div class="w-full h-screen grid place-items-center backdrop-blur-lg fixed top-0 z-10">
        <div class="w-96 h-6/6 md:w-[648px] lg:w-[634px] lg:h-96 md:flex rounded-xl bg-base-100 overflow-hidden">
            <!-- image -->
            <div class="grid place-items-center">
                <img
                    :src="'https://image.tmdb.org/t/p/w500' + selectedMovie.poster_path"
                    alt="Film poster"
                    class="md:w-[292px] lg:w-[265px]">
            </div>
            <!-- description -->
            <div class="w-96 flex flex-col p-4">
                <div class="flex-1 max-h-96 p-4 overflow-y-auto">
                    <h1 class="font-bold">{{ selectedMovie.title }}</h1>
                    <p class="text-sm pt-2">{{ selectedMovie.release_date }}</p>
                    <p class="pt-4 text-sm text-justify">{{ selectedMovie.overview }}</p>
                </div>

                <div class="flex justify-end gap-2 pt-4">
                    <!-- add button -->
                    <button @click="addToViewList" class="btn btn-primary rounded-lg">Add to view list</button>
                    <!-- close button -->
                    <button @click="closePopUp" class="btn btn-primary rounded-lg">Close X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: {
        selectedMovie: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            dataPopUp: false,
            viewListCount: null
        }
    },
    methods: {
        closePopUp() {
            this.$emit("closePopUp", this.dataPopUp)
        },

        updateViewListCount() {
            // Mengambil data dari local storage berdasarkan kunci "viewList"
            const viewListData = localStorage.getItem("viewList")

            // Menghitung jumlah item dalam "viewList"
            const jumlahData = viewListData ? JSON.parse(viewListData).length : 0

            this.viewListCount = jumlahData
        },

        addToViewList() {
            // Objek untuk data yang akan disimpan di local storage
            const movieData = {
                id: this.selectedMovie.id,
                title: this.selectedMovie.title,
                image: `https://image.tmdb.org/t/p/w500${this.selectedMovie.poster_path}`
            };

            // Mendapatkan data existing dari local storage
            const existingData = JSON.parse(localStorage.getItem("viewList")) || []

            // Mengecek apakah data dengan ID yang sama sudah ada di local storage
            const existingIndex = existingData.findIndex(item => item.id === movieData.id)

            if (existingIndex !== -1) {
                // Jika sudah ada, bisa di-handle sesuai kebutuhan (misalnya tidak menambahkan duplikat)
                alert("This movie already exists in the view list.")
            } else {
                // Jika belum ada, tambahkan data ke array existingData
                existingData.push(movieData)

                // Simpan array ke local storage
                localStorage.setItem("viewList", JSON.stringify(existingData))

                alert("Success add to view list")
            }

            this.updateViewListCount()
        }
    }
}
</script>