<template>
    <div class="header flex justify-space-between">
        <div class="header-left flex align-center">
            <div class="logo mr72">
                <img :src="logo">
            </div>
            <div class="name ml72">
                Organization Name
            </div>
        </div>
        <div class="header-right flex align-center">
            <div class="document flex align-center mr24">
                Doccument
                <img :src="dropdown">
            </div>
            <div class="support flex align-center mr24">
                Support
                <img :src="dropdown">
            </div>
            <div class="getting-started mr24">
                Getting started
            </div>
            <div class="faq mr24">
                FAQ
            </div>
            <div class="user flex align-center">
                <div class="avatar mr12">
                    <img :src="avatar">
                </div>
                <div class="username flex align-center">
                    Austin Robertson
                    <img :src="dropdown">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

    computed: {
        logo() {
            return require('@/assets/image/logo-icon/logo.svg')
        },
        avatar() {
            return require('@/assets/image/logo-icon/avatar.png')
        },
        dropdown() {
            return require('@/assets/image/logo-icon/dropdown.svg')
        }
    }
}
</script>