<template>
    <div class="small-box" :class=bg>
      <div class="inner">
        <h3> {{ innerNumber }} </h3>
        <p>{{ innerText }} </p>
      </div>
      <div class="icon">
        <i class="fas fa-shopping-cart" :class=icon></i>
      </div>
      <a href="javascript:void(0)" class="small-box-footer">
        More info <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>    
</template>

<script>
export default {
    props:{
        bg:{
            type:String,
            default:'bg-info'
        },
        innerNumber:{
            type:Number,
            default:0
        },
        innerText:{
            type:String,
            default:'innerText'
        },
        icon:{
            type:String,
            default:'fas fa-shopping-cart'
        }                

    }
}
</script>