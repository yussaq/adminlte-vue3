<template>
    <div class="info-box" :class=boxBg >
        <span class="info-box-icon " :class=boxIconBg><i :class=boxIcon></i></span>
        <div class="info-box-content">
            <span class="info-box-text">{{ boxText }}</span>
            <span class="info-box-number">{{ boxNumber }} </span>
            <div v-if=progress class="progress">
                <div class="progress-bar" :class=progressBg :style="{width:progressBar+'%'}"></div>
            </div>
            <span v-if=progress class="progress-description">
            {{ progressBar }}% {{ progressDescription }}
            </span>
        </div>
        <div class="overlay" v-if=overlay >
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        boxBg:{
            type: String,
            default : '',            
        },
        boxIconBg:{
            type:String,
            default:'bg-info'
        },
        boxIcon:{
            type: String,
            default:'far fa-flag'
        },        
        boxText: {
            type: String,
            default : 'infobox.text',
        },
        boxNumber: {
            type: String,
            default : 'infobox.number'
        },
        progress:{
            type:Boolean,
            default:false
        },
        progressBg:{
            type:String,
            default:'bg-info'
        },
        progressDescription:{
            type:String,
            default:'progressDescription'
        },
        progressBar:{
            type:String,
            default:'50'
        },
        overlay:{
            type:Boolean,
            default:false
        }                  
        

    }
}
</script>