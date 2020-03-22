<template>
    <div :key="index" class="content flex bg-white black-darker">
        <div class="col-1 feature-name font-14px">{{ content.name }}</div>
        <div class="col-2 col-developer font-14px text-center">
            <div v-if="content.developer !== 1"> {{ content.developer }}</div>
            <div v-else class="flex align-center justify-center">
                <img :src="checked" class="checked">
            </div>
        </div>
        <div class="col-3 col-team font-14px text-center">
            <div v-if="content.team !== 1"> {{ content.team }}</div>
            <div v-else class="flex align-center justify-center">
                <img :src="checked" class="checked">
            </div>
        </div>
        <div class="col-4 col-business font-14px text-center">
            <div v-if="content.business !== 1"> {{ content.business }}</div>
            <div v-else class="flex align-center justify-center">
                <img :src="checked" class="checked">
            </div>
        </div>
        <div class="col-5 col-enterprise font-14px text-center">
            <div v-if="content.enterprise !== 1"> {{ content.enterprise }}</div>
            <div v-else class="flex align-center justify-center">
                <img :src="checked" class="checked">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Content',
    props: {
        content: {
            type: Object,
            default: () => {}
        },
        index: {
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