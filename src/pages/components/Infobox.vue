<template>
    <page-title icon= 'fas fa-th' title='Boxes Components'></page-title>
    <section class="content">
    <div class="content px-2">
        <p>There are two types of boxes, info boxes &amp; small boxes. Both boxes are used to display statistical snippets.</p>
        <h5 class="text-bold text-dark mt-4">Info Box</h5>
        <div class="row">
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= ''
                    boxIconBg='bg-info'
                    boxIcon= "far fa-envelope" 
                    boxText= "Messages" 
                    boxNumber= "1,410"
                    :overlay= false
                      >
                </info-box>    
            </div>
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= 'bg-success'
                    boxIconBg=''
                    boxIcon= "far fa-flag" 
                    boxText= "Bookmarks" 
                    boxNumber= "410" 
                    >
                </info-box>    
            </div>
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= 'bg-gradient-warning'
                    boxIconBg=''
                    boxIcon= "far fa-copy" 
                    boxText= "Uploads" 
                    boxNumber= "13,648"
                      >
                </info-box>    
            </div>                         
        </div>

        <h5 class="text-bold text-dark mt-4">Info Box with Progress Bar</h5>
        <div class="row">
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= ''
                    boxIconBg= 'bg-info'
                    boxIcon= "far fa-envelope" 
                    boxText= "Messages" 
                    boxNumber= "1,410"
                    :progress= true
                    progressBar= 30
                    progressDescription= 'Increase in 30 Dayssss '  >
                    
                </info-box>    
            </div>
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= 'bg-success'
                    boxIconBg= ''
                    boxIcon= "far fa-flag" 
                    boxText= "Bookmarks" 
                    boxNumber= "410"
                    :progress= true
                    progressBg= ''
                    progressBar= 60
                    progressDescription= 'Increase in 30 Days '  >
                </info-box>    
            </div>
            <div class="col-md-4 col-sm-6 col-12">
                <info-box 
                    boxBg= 'bg-gradient-warning'
                    boxIconBg= ''
                    boxIcon= "far fa-copy" 
                    boxText= "Uploads" 
                    boxNumber= "13,648"
                    :progress= true
                    progressBg= ''
                    progressBar= 90
                    progressDescription= 'Increase in 30 Days '  >
                </info-box>    
            </div>                         
        </div>

        <h5 class="text-bold text-dark mt-4">Small Box</h5>
        <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <small-box 
                    innerText.value= 'New Orders' 
                    innerNumber.value= 10.5
                    icon= 'fas fa-shopping-cart' >
                </small-box>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <small-box 
                    bg= "bg-success"
                    innerText.value= 'User Registrations' 
                    innerNumber.value= 44
                    icon= 'fas fa-user-plus' >
                </small-box>
        </div>  
        </div>
    </div>
    </section>
</template>


<script>
import InfoBox from "@/components/widgets/InfoBox.vue";
import SmallBox from "@/components/widgets/SmallBox.vue";

export default {
    name: 'Infobox',
    components: {
        InfoBox,
        SmallBox
    },    
}
</script>