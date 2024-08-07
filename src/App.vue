<template>
  <div :data-theme="changesTheme">
    <NavBar title="myMovies" @dataTheme="handleThemeChanges" />
    <PopulerList :dataPopularMovies="popularMovies"/>
    <SearchList :dataMovies="allMovies"/>
    <FooterList title="myMovies"/>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue"
  import PopulerList from "@/components/PopulerList.vue"
  import SearchList from "@/components/SearchList.vue"
  import FooterList from "@/components/FooterList.vue"

  export default {
    name: "App",
    components: {
      NavBar,
      PopulerList,
      SearchList,
      FooterList,
    },
    data() {
      return {
        changesTheme: "",
        popularMovies: [],
        allMovies: [],
      };
    },
    mounted() {
      this.fetchPopularAndTopRatedMovies()
    },
    methods: {
      fetchPopularAndTopRatedMovies() {
        const apiKey = 'b8b164e17d37bca1982b01557b74f90a'
        const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

        Promise.all([
          fetch(popularUrl).then((response) => response.json()),
          fetch(topRatedUrl).then((response) => response.json())
        ])
          .then(([popularData, topRatedData]) => {
            this.popularMovies = popularData.results.slice(0, 6)
            this.allMovies = popularData.results.concat(topRatedData.results)
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
          });
      },
      handleThemeChanges(dataTheme) {
        this.changesTheme = dataTheme
      }
    },
  }
</script>

<style src="@/assets/global.css"></style>