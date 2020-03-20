<template>
    <div class="body flex flex-column align-center white">
        <h1>Plans that scale with your user growth</h1>

        <Heading></Heading>
        
        <Content></Content>
    </div>
</template>

<script>
import Heading from './Body/Heading'
import Content from './Body/Content'

export default {
    name: 'Body',

    components: { Heading, Content },
}
</script>

<style lang="scss">
.body {
    padding-top: 140px;
    .col-1 {
        width: 379px;
        flex-basis: 379px;
    }
    .col-2,
    .col-3,
    .col-4,
    .col-5 {
        width: 188px;
        flex-basis: 188px;
    }
    .checked {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: $green;
    }
}
</style>