<template>
    <div class="overcharge-cost">
        <h1>Overcharge cost</h1>
        <table>
            <tr>
                <template v-for="(val, key) in costs">
                    <th class="py12" :key="key">{{ val.type }}</th>
                </template>
            </tr>
            <tr>
                <template v-for="(val, key) in costs">
                    <td class="text-center py24 align-center" :key="key">
                        {{ val.value }}<img :src="iconCent">
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