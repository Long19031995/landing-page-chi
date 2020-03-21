<template>
    <div class="pricing-feature">
        <template v-for="(val, index) in pageData.defaultFeatures">
            <div :key="index" class="content flex bg-white black-darker">
                <div class="col-1 feature-name">{{ val.name }}</div>
                <div class="col-2 col-developer">{{ val.developer }}</div>
                <div class="col-3 col-team">{{ val.team}}</div>
                <div class="col-4 col-business">{{ val.business }}</div>
                <div class="col-5 col-enterprise">
                    <div v-if="val.enterprise !== 1" class=""> {{ val.enterprise}}</div>
                    <div v-else class="checked flex align-center justify-center">
                        <img :src="checked">
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { pricingContent } from '../../core/constant/pricing'

export default {
    name: 'Content',
    data() {
        return {
            pageData: pricingContent,

        }
    },
    computed: {
        checked() {
            return require('@/assets/image/check.png')
        }
    }
}
</script>