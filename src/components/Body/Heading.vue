<template>
    <div class="heading flex bg-white black-darker">
        <div class="col-1">
            <img :src="organicBusiness">
        </div>
        <template v-for="(val, index) in pageData.allPlans">
            <div :class="`col-${index+2}`">
                <div class="title">{{ val.name }}</div>
                <div class="description black-lighter">{{ val.des }}</div>
                <div class="price">{{ val.price }}</div>
                <div class="cta">
                    <button @click="" class="black-lighter">
                        {{ val.btn }}
                    </button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { pricingContent } from '../../core/constant/pricing'

export default {
    name: 'Heading',
    data() {
        return {
            pageData: pricingContent,

        }
    },
    computed: {
        organicBusiness() {
            return require('@/assets/image/graphics/organic_business.png')
        }
    },
}
</script>