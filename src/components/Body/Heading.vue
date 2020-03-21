<template>
    <div class="heading flex bg-white black-darker">
        <div class="col-1">
            <img :src="organicBusiness">
        </div>
        <template v-for="(val, index) in pageData.allPlans">
            <div :class="[`col-${index+2}`, { 'best-value pos-rlt': val.bestValue }]" class="px16 pt40 pb8 flex flex-column justify-space-between">
                <div v-if="val.bestValue" class="best-value-item pos-abs bg-green white br4 px16 py4">
                    Best value
                </div>
                <div class="text-center">
                    <div class="title mb16 font-24px">{{ val.name }}</div>
                    <div class="description black-lighter mb20 font-12px">{{ val.des }}</div>
                    <div class="price mb12 font-32px">{{ val.price }}</div>
                </div>
                <button @click="" class="black-lighter px12 py8 br4 font-16px w100 hover-pointer" :class="val.btnClass">
                    {{ val.btn }}
                </button>
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