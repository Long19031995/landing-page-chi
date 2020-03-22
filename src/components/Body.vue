<template>
    <div class="body flex flex-column align-center white br4">
        <h1 class="mb56">Plans that scale with your user growth</h1>

        <Heading></Heading>
        
        <template v-for="(val, index) in pageData">
            <Content :content="val" :key="index"></Content>
        </template>

        <div v-if="!viewMore" @click="viewMore = !viewMore" class="view-more blue mt12 hover-pointer">
            View all features
            <img :src="iconDown">
        </div>
        <template v-else>
            <template v-for="(val, index) in pageData.moreFeatures">
                <Content :content="val" :key="index"></Content>
            </template>
            <div class="bottom flex bg-white">
                <div class="col-1"></div>
                <div class="col-2 px16 py8">
                    <button @click="" class="px12 py8 br4 font-16px w100 hover-pointer black-lighter bd-black-lightest">
                        Current Plan
                    </button>
                </div>
                <div class="col-3 px16 py8">
                    <button @click="" class="px12 py8 br4 font-16px w100 hover-pointer black-darker bd-black-lightest">
                        Purchase Now
                    </button>
                </div>
                <div class="col-4 px16 py8">
                    <button @click="" class="px12 py8 br4 font-16px w100 hover-pointer white bg-red bd-none">
                        Purchase Now
                    </button>
                </div>
                <div class="col-5 px16 py8">
                    <button @click="" class="px12 py8 br4 font-16px w100 hover-pointer white bg-red bd-none">
                        Contact Us
                    </button>
                </div>
            </div>
        </template>

        <OverchargeCost></OverchargeCost>
    </div>
</template>

<script>
import Heading from './Body/Heading'
import Content from './Body/Content'
import OverchargeCost from './Body/OverchargeCost'
import { pricingContent } from '../core/constant/pricing'

export default {
    name: 'Body',

    components: { Heading, Content, OverchargeCost },

    data() {
        return {
            pageData: pricingContent.defaultFeatures,
            viewMore: false
        }
    },

    computed: {
        iconDown() {
            return require('@/assets/image/logo-icon/down.svg')
        }
    },

    watch: {
        viewMore: {
            handler (val) {
                if (val) {
                    this.pageData.push(...pricingContent.expandedFeatures)
                }
            },
            deep: true
        }
    }
}
</script>