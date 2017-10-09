<template>
	<div class="card-header">
		<h2 align="left">水纹按钮 Button</h2>
		<hr class="my-2">
		<figure class="white">
	        <pre>示例 &lt;BaseButton&gt;Base&lt;BaseButton&gt;<br/>   </pre>
	    </figure>
	    <BaseButton>Ripple</BaseButton>
	    <TypeButton @click="defaul" type="defaul" size="sm">defaul</TypeButton>
	    <TypeButton @click="defaul" type="defaul">defaul</TypeButton>
	    <TypeButton @click="primary" type="primary">primary</TypeButton>
	    <TypeButton @click="info" type="info">info</TypeButton>
	    <TypeButton @click="success" type="success">success</TypeButton>
	    <TypeButton @click="warning" type="warning">warning</TypeButton>
	    <TypeButton @click="danger" type="danger">danger</TypeButton>
	</div>
</template>
<script>
  import TypeButton from './TypeButton.vue'
  import BaseButton from './BaseButton.vue'
  export default {
    data() {
      return {}
    },
    methods: {
      defaul(){
        console.log('defaul')
      },
      primary(){
        console.log('primary')
      },
      info(){
        console.log('info')
      },
      success(){
        console.log('success')
      },
      warning(){
        console.log('warning')
      },
      danger(){
        console.log('danger')
      },
    },
    components: {
    	TypeButton,
      	BaseButton
    }
  }
</script>