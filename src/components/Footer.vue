<template>
    <div class="footer bg-white black-darker flex flex-column align-center">
        <h1>{{pageData.question}}</h1>
        <div class="flex">
            <template v-for="(q, key) in pageData.contentQuestions.slice(0,2)">
                <div :key="key" class="col-md-6 col-xl-6">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                {{ key + 1}}
                            </div>
                        </div>
                        <div class="question-content">
                            <div class="question">
                                {{ q.q }}
                            </div>
                            <div class="answer">
                                {{ q.ans }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="flex">
            <template v-for="(q, key) in pageData.contentQuestions.slice(2,4)">
                <div :key="key" class="col-md-6 col-xl-6">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                {{ key + 3}}
                            </div>
                        </div>
                        <div class="question-content">
                            <div class="question">
                                {{ q.q }}
                            </div>
                            <div class="answer">
                                {{ q.ans }}
                            </div>
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