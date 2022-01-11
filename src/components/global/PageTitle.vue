<template>
	<section class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1><i :class = icon ></i> {{ title }}</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
      props: {
        title: {
			type: String,		
			default: '',
        },
        icon: {
			type: String,
			default: '',
		}        
      }
    }
</script>
