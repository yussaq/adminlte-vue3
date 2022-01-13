<template> 
    <div class="card " :class="[{ 'card-outline': isOutline },cardStyle]">
        <div class="card-header">
            <h3 class="card-title"> {{ cardTitle }} </h3>

            <div class="card-tools" v-if=isTools>
            <!-- This will cause the card to maximize when clicked -->
            <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
            <!-- This will cause the card to collapse when clicked -->
            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
            <!-- This will cause the card to be removed when clicked -->
            <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
            </div>
                                    
        </div>
        <div class="card-body" v-html="cardBody">

        </div>
        <div class="card-footer" v-if="isFooter">
            {{ cardFooter }}
        </div>
        <div class="overlay" v-if=isOverlay :class="{ dark: isDark }" >
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
    </div>    
</template>

<script>
export default {
    props:{        
        cardStyle:{
            type: String,
            default : '',            
        },                
        cardTitle:{
            type: String,
            default : 'cardTitle',            
        },
        cardBody:{
            type: String,
            default : '',            
        },
        cardFooter:{
            type: String,
            default : '',            
        },        
        isOutline:{
            type: Boolean,
            default : false,            
        },
        isTools:{
            type: Boolean,
            default : false,            
        },
        isFooter:{
            type: Boolean,
            default : false,            
        },
        isOverlay:{
            type:Boolean,
            default:false
        },
        isDark:{
            type:Boolean,
            default:false
        }                                  
    }
}
</script>