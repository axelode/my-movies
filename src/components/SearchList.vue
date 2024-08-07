<template>
  <div class="grid pt-8 pb-6 bg-primary">
    <!-- search bar -->
    <div class="relative flex justify-end pr-[16px] gap-2 mb-4">
      <input
        v-model="inputResult"
        @change="findMovie"
        @abort="findMovie"
        type="text"
        placeholder="Type here"
        class="p-4 w-96 h-10 border-2 border-success text-black bg-white rounded-full"
      />

      <button class="absolute top-3 right-8 z-5" @click="findMovie">
        <img
          src="@/assets/icons/search.svg"
          alt="search"
        />
      </button>
    </div>

    <!-- loader -->
    <div class="w-full h-44 grid place-items-center" v-if="isLoading">
      <div class="w-14 h-14 border-dotted border-8 border-current rounded-full animate-spin"></div>
    </div>

    <div v-if="searchMovies.length && !isLoading">
      <div class="grid grid-cols-3 px-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
        <div v-for="movie in searchMovies" :key="movie.id" @click="popUp(movie)">
          <div class="card w-auto h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer">
            <figure><img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster" /></figure>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="!searchMovies.length && !isLoading" class="grid place-content-center text-xl font-bold text-current p-4">No Data Found !</div>
  </div>

  <!-- popup -->
  <PopUp v-if="isPopUp" :selectedMovie="selectedMovie" @closePopUp="handleClosePopUp"/>
</template>

<script>
import PopUp from "./PopUp.vue"

export default {
    name: "SearchMovieList",
    components: {
      PopUp
    },
    data() {
      return {
        inputResult: "",
        movieResult: "",
        isLoading: false,
        isPopUp: false,
        selectedMovie: {}
      }
    },
    props: {
      dataMovies: {},
    },
    computed: {
      searchMovies() {
        let movieResult = this.movieResult.toLowerCase()
        return this.dataMovies.filter(movie => movie.title.toLowerCase().includes(movieResult))
      }
    },
    methods: {
      findMovie() {
        this.isLoading = true

        setTimeout(() => {
          this.isLoading = false
        }, 2200)

        setTimeout(() => {
          this.movieResult = this.inputResult
        }, 2000)
      },
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