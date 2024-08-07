<template>
    <div class="w-full h-screen grid place-items-center backdrop-blur-lg fixed z-20">
        <div class="w-96 h-[764px] md:w-5/6 lg:w-3/6 md:h-4/6 grid place-items-center p-2 bg-base-100 rounded-xl">
            <h1>Watch List</h1>
            <div class="w-full h-[612px] md:h-5/6 p-2 overflow-y-scroll">

                <div v-if="selectedMovie.length" class="grid md:grid-cols-2 gap-2 place-items-center">
                    <div v-for="movie in selectedMovie" :key="movie.id">
                        <div class="w-[310px] md:w-[284px] lg:w-[310px] h-24 flex bg-base-100 border border-current rounded-lg">

                            <!-- image -->
                            <div class="rounded-l-lg overflow-hidden">
                                <img :src="movie.image" alt="" width="65px">
                            </div>

                            <!-- title -->
                            <div class="w-[245px] grid p-2">
                                <p class="text-xs">{{ movie.title }}</p>

                                <div class="flex justify-end items-center gap-2">

                                    <!-- feature coming soon
                                        <button @click="watchMarked(movie.id)" class="text-xs p-2 rounded-lg bg-primary">Mark as watched</button>
                                    -->

                                    <!-- delete button -->
                                    <button @click="deleteList(movie)" class="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[12px] fill-current" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                    </button>
                                </div>
                            </div>

                            <!-- feature coming soon
                            <span v-if="isMarked" class="absolute w-6 h-6 flex justify-center items-center text-white bg-green-500 top-[-6px] right-[-6px] rounded-full">✓</span>
                            -->
                        </div>
                    </div>
                </div>

                <div v-else class="grid place-items-center font-bold">No watch list yet!</div>
            </div>
            <button class="btn btn-primary rounded-lg" @click="closeViewList">Close X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewList",
    data() {
        return {
            selectedMovie: [],
            isViewList: false,
        }
    },
    methods: {
        closeViewList() {
            this.$emit("closeViewList", this.isViewList)
        },
        deleteList(movie) {
            // Mendapatkan ID dari selectedMovie
            const movieId = movie.id

            // Mendapatkan data dari local storage
            const storedData = JSON.parse(localStorage.getItem("viewList")) || []

            // Filter data untuk menghapus entry dengan ID yang sesuai
            const updatedData = storedData.filter((entry) => entry.id !== movieId)

            // Menyimpan data yang diperbarui kembali ke local storage
           localStorage.setItem("viewList", JSON.stringify(updatedData))

           this.updateViewList()
        },
        updateViewList() {
             // Mengambil data dari local storage berdasarkan kunci ("viewList" dalam contoh ini)
            const viewListData = JSON.parse(localStorage.getItem("viewList"))

            // Melakukan pengecekan apakah data ada atau tidak
            if (viewListData) {
                // Data ditemukan, lakukan sesuatu dengan data tersebut
                this.selectedMovie = viewListData
            } else {
                // Data tidak ditemukan
                console.log("No data found")
            }
        }
    },
    mounted() {
        this.updateViewList()
    }
}
</script>