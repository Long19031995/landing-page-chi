<template>
    <div class="overcharge-cost mt80">
        <h1 class="font-36px text-center mb24 black-darker">Overcharge cost</h1>
        <table class="font-14px" cellspacing="0" cellpadding="0">
            <tr>
                <template v-for="(val, key) in costs">
                    <th class="py12 white bg-red-lighter" :key="key">{{ val.type }}</th>
                </template>
            </tr>
            <tr>
                <template v-for="(val, key) in costs">
                    <td class="pt24 pb16 black-darker bg-white" :key="key">
                        <div class="font-18px mr-2 line-height-center text-center">
                            {{ val.value }}
                            <span class="font-24px ml-4">
                                &cent;
                            </span>
                        </div>
                    </td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
import { pricingContent } from '../../core/constant/pricing'

export  default {
    name: 'overcharge-cost',
    data () {
        return {
            costs: pricingContent.overchargeCost
        }
    },
    computed: {
        iconCent () {
            return require('@/assets/image/logo-icon/cent.svg')
        }
    }
}
</script>