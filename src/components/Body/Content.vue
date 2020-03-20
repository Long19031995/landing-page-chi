<template>
    <div class="content flex bg-white black-darker">
        <div class="col-1">
            Encoding Minutes (mins)
        </div>
        <div class="col-2">
            200
        </div>
        <div class="col-3">
            2.000
        </div>
        <div class="col-4">
            20.000
        </div>
        <div class="col-5">
            <div class="checked flex align-center justify-center">
                <img :src="checked">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',

    computed: {
        checked() {
            return require('@/assets/image/check.png')
        }
    }
}
</script>