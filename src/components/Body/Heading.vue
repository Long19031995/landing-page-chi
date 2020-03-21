<template>
    <div class="heading flex bg-white black-darker">
        <div class="col-1">
            <img :src="organicBusiness">
        </div>
        <div class="col-2">
            <div class="title">
                Developer
            </div>
            <div class="description black-lighter">
                Forever free account with some limitations
            </div>
            <div class="money">
                Free
            </div>
            <div class="cta">
                <button class="black-lighter">
                    Current Plan
                </button>
            </div>
        </div>
        <div class="col-3">
            <div class="title">
                Developer
            </div>
            <div class="description black-lighter">
                Forever free account with some limitations
            </div>
            <div class="money">
                Free
            </div>
            <div class="cta">
                <button class="black-lighter">
                    Current Plan
                </button>
            </div>
        </div>
        <div class="col-4">
            <div class="title">
                Developer
            </div>
            <div class="description black-lighter">
                Forever free account with some limitations
            </div>
            <div class="money">
                Free
            </div>
            <div class="cta">
                <button class="black-lighter">
                    Current Plan
                </button>
            </div>
        </div>
        <div class="col-5">
            <div class="title">
                Developer
            </div>
            <div class="description black-lighter">
                Forever free account with some limitations
            </div>
            <div class="money">
                Free
            </div>
            <div class="cta">
                <button class="black-lighter">
                    Current Plan
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Heading',


    computed: {
        organicBusiness() {
            return require('@/assets/image/graphics/organic_business.png')
        }
    },
}
</script>