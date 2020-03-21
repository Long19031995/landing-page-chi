<template>
    <div class="pricing-feature">
        <template v-for="(val, index) in pageData.defaultFeatures">
            <div :key="index" class="content flex bg-white black-darker">
                <div class="col-1 feature-name font-14px">{{ val.name }}</div>
                <div class="col-2 col-developer font-14px text-center">{{ val.developer }}</div>
                <div class="col-3 col-team font-14px text-center">{{ val.team }}</div>
                <div class="col-4 col-business font-14px text-center">{{ val.business }}</div>
                <div class="col-5 col-enterprise font-14px text-center">
                    <div v-if="val.enterprise !== 1" class=""> {{ val.enterprise }}</div>
                    <div v-else class="flex align-center justify-center">
                        <img :src="checked" class="checked">
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
            return require('@/assets/image/logo-icon/check.svg')
        },
        icondown() {
            return require('@/assets/image/logo-icon/dropdown.svg')
        }
    }
}
</script>