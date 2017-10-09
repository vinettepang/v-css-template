<template>
	<div id="form-message">
<TypeButton @click="addNewMsg" type="defaul" size="sm">defaul</TypeButton>
<template v-for="message in messages">
	<input type="text" v-model="message.DestinationNumber" class="form-control">
	<textarea rows="3" v-model="message.TextDecoded" class="form-control"></textarea>
</template>

 <TypeButton @click="submitForm" type="success">Submit</TypeButton>
<pre>{{messages }}</pre>

</div>
</template>
<script>
 import TypeButton from './TypeButton.vue'
	export default {
	    data() {
	      return {
	      	  messages: [
		        {
		        	DestinationNumber: '',
		        	TextDecoded: ''
		        }
		    ],
		    submitted:false
	      }
	    },
	    methods:{
	    	addNewMsg:function () {
	    		this.messages.push({
	    			DestinationNumber:'',
	    			TextDecoded:''
	    		})
	    	},
	    	submitForm:function(e) {
	    		//console.log(e);
	    		console.log(this.messages);
	    	}
	    },
	    components: {
	    	TypeButton
	    }
	 }
</script>
