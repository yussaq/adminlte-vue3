<template>
    <page-title icon= 'fas fa-th' title='Cards Component'></page-title>
    <section class="content">
        <div class="content px-2">
            <p>The card component is the most widely used component through out this template. You can use it for anything from displaying charts to just blocks of text. It comes in many different styles that we will explore below.</p>
            <card 
                cardStyle= 'card-info'
                cardTitle= 'Default Card Example'
                cardBody= " cardStyle= 'card-info' </br>
                            cardTitle= 'Default Card Example'</br>
                            cardBody= 'The boby of the card' </br>
                            cardFooter= 'The footer of the card ' </br>
                            :isOutline= true</br>
                            :isTools= true</br>
                            :isFooter= true'</br>" 
                cardFooter= 'The footer of the card ' 
                :isOutline= true
                :isTools= true
                :isFooter= true
                >
            </card>

            <h5 class="text-bold text-dark mt-5">Card Variants</h5>
            <p>You can change the style of the card by adding any of the contextual classes.</p>

            <h6 class="text-bold text-dark">Default</h6>

            <div class="row">
                <div class="col-sm-4">
                    <card 
                        cardStyle= 'card-info'
                        cardTitle= 'Default Card Example'
                        cardBody= 'The boby of the card' 
                        cardFooter= 'The footer of the card ' 
                        :isOutline= false
                        :isTools= true
                        :isFooter= true
                        >
                    </card>
                </div>
                <div class="col-sm-4">
                    <card 
                        cardStyle= 'card-warning'
                        cardTitle= 'Default Card Example'
                        cardBody= 'The boby of the card' 
                        cardFooter= 'The footer of the card ' 
                        :isOutline= false
                        :isTools= true
                        :isFooter= true
                        >
                    </card>
                </div>
                <div class="col-sm-4">
                    <card 
                        cardStyle= 'card-success'
                        cardTitle= 'Default Card Example'
                        cardBody= 'The boby of the card' 
                        cardFooter= 'The footer of the card ' 
                        :isOutline= true
                        :isTools= false
                        :isFooter= true
                        >
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/widgets/Card.vue'
export default {
    name: 'cardPage',
    components:{
        Card
    }   
}
</script>