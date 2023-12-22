<template>
    <p class="text-xl md:text-2xl font-bold text-current pl-2 pt-2">{{ title }}</p>
</template>

<script>
export default {
    name: "HeaderTitle",
    props: {
        title: String,
    }
}
</script>