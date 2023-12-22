<template>
    <div class="grid pt-16">
        <HeaderTitle title="Populer"/>
        <div class="grid grid-cols-2 p-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
            <div v-for="movie in dataPopularMovies" :key="movie.id">
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
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue"

export default {
    name: "PopulerMovieList",
    components: {
        HeaderTitle
    },
    props: {
        dataPopularMovies: Array,
    }
}
    
</script>