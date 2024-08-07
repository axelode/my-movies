<template>
    <footer class="footer footer-center p-4 bg-primary text-base-content">
        <aside>
            <p>Copyright © 2024 - All right reserved by {{ title }}</p>
        </aside>
    </footer>
</template>

<script>
    export default {
        name: "FooterList",
        props: {
            title: {
                type: String,
                required: true
            },
        }
    }
</script>