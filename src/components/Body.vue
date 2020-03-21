<template>
    <div class="body flex flex-column align-center white br4">
        <h1 class="mb56">Plans that scale with your user growth</h1>

        <Heading></Heading>
        
        <Content></Content>

        <Bottom></Bottom>

        <OverchargeCost></OverchargeCost>
    </div>
</template>

<script>
import Heading from './Body/Heading'
import Content from './Body/Content'
import Bottom from './Body/Bottom'
import OverchargeCost from './Body/OverchargeCost'

export default {
    name: 'Body',

    components: { Heading, Content, OverchargeCost, Bottom },
}
</script>