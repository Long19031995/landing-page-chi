<template>
    <div class="footer bg-white black-darker flex flex-column align-center">
        <h1>{{pageData.question}}</h1>
        <div class="flex mt48">
            <template v-for="(q, key) in pageData.contentQuestions.slice(0,2)">
                <div :key="key" class="col-md-6 col-xl-6" :class="`col-${key}`">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                {{ key + 1}}
                            </div>
                        </div>
                        <div class="question-content ml16">
                            <div class="question font-24px">
                                {{ q.q }}
                            </div>
                            <div class="answer text-gray-lighter font-14px mt12">
                                {{ q.ans }}
                            </div>
                            <div class="separator mt12"></div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="flex mt28">
            <template v-for="(q, key) in pageData.contentQuestions.slice(2,4)">
                <div :key="key" class="col-md-6 col-xl-6" :class="`col-${key}`">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                {{ key + 3}}
                            </div>
                        </div>
                        <div class="question-content ml16">
                            <div class="question font-24px">
                                {{ q.q }}
                            </div>
                            <div class="answer text-gray-lighter font-14px mt12">
                                {{ q.ans }}
                            </div>
                            <div class="separator mt12"></div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { footerContent } from '../core/constant/footer'
export default {
    name: 'Footer',
    data() {
        return {
            pageData: footerContent,
        }
    },
}
</script>