<template>
    <div class="footer bg-white black-darker flex flex-column align-center">
        <h1>{{pageData.question}}</h1>
        <div class="flex mt48">
                <div class="col-md-6 col-xl-6 col-0">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                2
                            </div>
                        </div>
                        <div class="question-content ml16">
                            <div class="question font-24px">
                                How do we calculate Storage?
                            </div>
                            <p class="answer text-gray-lighter font-14px mt12">
                                Peak data stored of all video assets (including live DVR) within the billing period.
                            </p>
                            <div class="separator mt12"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-6 col-1">
                    <div class="flex">
                        <div class="white">
                            <div class="question-number flex justify-center align-center">
                                2
                            </div>
                        </div>
                        <div class="question-content ml16">
                            <div class="question font-24px">
                                How do we calculate Delivery?
                            </div>
                            <p class="answer text-gray-lighter font-14px mt12">
                                Total data delivered within billing period. Reset to 0 at the begining of the new billing period.
                            </p>
                            <div class="separator mt12"></div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="flex mt28">
            <div class="col-md-6 col-xl-6 col-0">
                <div class="flex">
                    <div class="white">
                        <div class="question-number flex justify-center align-center">
                            3
                        </div>
                    </div>
                    <div class="question-content ml16">
                        <div class="question font-24px">
                            How do we calculate Encoding Minutes?
                        </div>
                        <div class="answer text-gray-lighter font-14px mt12">
                            <p>Profile determine encoding minutes. Three attribute affect encoding minutes: Video Resolution, Codec, and Video Framerate.</p>
                            <p class="mt4">Each profile adds encoding minutes with the multiplier of the tree attributes. For non-encoding live stream, the duration of the event will be counted as encoding minutes.</p>
                            <p class="mt4">Click here for an example <a href="">[link]</a></p>
                        </div>
                        <div class="separator mt12"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-6 col-1">
                <div class="flex">
                    <div class="white">
                        <div class="question-number flex justify-center align-center">
                            4
                        </div>
                    </div>
                    <div class="question-content ml16">
                        <div class="question font-24px">
                            What happen if I have higher usage than my plan?
                        </div>
                        <div class="answer text-gray-lighter font-14px mt12">
                            <p>Usage beyond those included in the plan will be changed at the rates listed above.</p>
                            <p class="mt4">For your protection each package also has a monthly maximum.
                                If you exceed this value in a given month, the account will be suspended util you upgrade to a higher plan or contact support.</p>
                        </div>
                        <div class="separator mt12"></div>
                    </div>
                </div>
            </div>
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