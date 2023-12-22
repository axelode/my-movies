<template>
  <div class="grid">
    <div class="flex gap-2 py-2">
      <div class="flex-1">
        <HeaderTitle title="Search"/>
      </div>
      <div class="flex justify-end pr-2 gap-2">
        <input v-model="movieResult" type="text" placeholder="Type here" class="input input-bordered input-current w-44 h-8 text-current rounded-lg md:w-96 md:h-10" />
      </div>
    </div>

    <div v-if="searchMovies.length">
      <div class="grid grid-cols-2 p-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
        <div v-for="movie in searchMovies" :key="movie.id">
          <div class="card w-auto h-full bg-base-100 border border-current rounded-xl">
            <figure><img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster" /></figure>
            <div class="card-body p-2 text-current">
              <h2 class="card-title">{{ movie.title }}</h2>
              <div class="card-actions justify-end">
                  <div class="badge badge-outline rounded-xl">{{ movie.release_date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="grid place-content-center texx-xl font-bold text-current p-4">No Data Found</div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue"

export default {
    name: "SearchMovieList",
    components: {
      HeaderTitle,
    },
    data() {
      return {
        movieResult: "",
      }
    },
    props: {
      dataMovies: Array,
    },
    computed: {
      searchMovies() {
        const movieResult = this.movieResult.toLowerCase()
        return this.dataMovies.filter(movie => movie.title.toLowerCase().includes(movieResult))
      }
    }, 
}
</script>