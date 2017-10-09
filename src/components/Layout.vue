<template>
	<div>
		<p>内容自适应高度</p>
	    <div class="wrap">
	        <div class="main">
	            <header>234234</header>
	            <section class="content">
	                <div style="height:100px;"></div>
	            </section>
	        </div>
	    </div>
	    <footer class="footer"></footer>
	   <!--  <body>
		    <div class="wrap">
		        <div class="main">
		            <header></header>
		            <section class="content">
		                <div style="height:1000px;"></div>
		            </section>
		        </div>
		    </div>
		    <footer class="footer"></footer>
		</body> -->
	</div>
</template>
<script>
	export default {
		name:'layout',
		data(){
			return {
				adjust:"<div class='wrap'><div class='main'><header>234234</header><section class='content'><div style='height:100px;'></div></section></div></div><footer class='footer'></footer>"
			}
		}
	}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    html,body { height: 100%;}
    .wrap{
        min-height: 100%;
    }
    .main{
        padding-bottom: 60px;
    }
    header { 
        height: 60px; 
        background: #1381cc; 
        color: #FFF; 
    }
    section { 
        background: #fff; 
    }
    footer { 
        height:60px; 
        margin-top: -60px; 
        background: #0c4367; 
        color: #FFF;
    }
</style>