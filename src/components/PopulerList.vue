<template>
    <div class="grid pt-24">
        <div class="grid grid-cols-3 px-4 gap-4 md:grid-cols-3 lg:grid-cols-6 mb-8">
            <div v-for="movie in dataPopularMovies" :key="movie.id" @click="popUp(movie)">
                <div class="card w-auto h-full bg-base-100 rounded-xl z-10 overflow-hidden shadow-2xl cursor-pointer duration-300 hover:-translate-y-4">
                    <figure>
                        <img
                            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster"
                        />
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <PopUp v-if="isPopUp" :selectedMovie="selectedMovie" @closePopUp="handleClosePopUp"/>
</template>

<script>
import PopUp from "./PopUp.vue"

export default {
    name: "PopulerMovieList",
    components: {
        PopUp,
    },
    data() {
        return {
            isPopUp: false,
            selectedMovie: {}
        }
    },
    props: {
        dataPopularMovies: {
            type: Array,
            required: true
        },
    },
    methods: {
    popUp(movie) {
        this.isPopUp = true
        this.selectedMovie = movie
    },
    handleClosePopUp(dataPopUp) {
      this.isPopUp = dataPopUp
      this.selectedMovie = {}
    },
  }
}

</script>