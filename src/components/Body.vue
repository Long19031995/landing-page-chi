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