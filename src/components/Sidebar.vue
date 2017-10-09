<template>
	<div class="card">
		<div class="card-header" align="center">
			<!-- <img src="../assets/images/logo.png" height="54" width="176"
                 class=" " /> -->
            <p><strong> Icebear </strong></p>
            <p class="card-title">白熊前端 VinettePang</p>
            <!-- <p class="card-title">361706242@qq.com</p> -->
		</div>
		<div class="card-block" align="left">
			<p>
                <router-link to="/button">
                <!-- <img src="http://wx.qlogo.cn/mmhead/Q3auHgzwzM6FDWDyWSNm2AFBwFV6SFMXa20hjbFlWOyGYFQqrryIPw/0"
                     class="mpavatar img-circle img-responsive" /> -->
                <!-- <span class="tag tag-danger tag-pill float-xs-right">12</span> -->
                按钮组件
                </router-link>
            </p>
            <p><router-link to="/alert">Notification 提示组件</router-link></p>
            <p><router-link to="/toast">Toast 提示组件</router-link></p>
            <p><router-link to="/form">Form 表单组件</router-link></p>
            <p><router-link to="/layout">布局</router-link></p>
            <!-- <p><router-link to="/basebutton"> 按钮独立组件 </router-link> </p>
            <p><router-link to="/alert"> 提示组件 </router-link> </p>
            <p><router-link to="/validate"> 验证组件 </router-link> </p>
            <p><router-link to="/form"> 表单组件 </router-link> </p>
            <p><router-link to="/list"> 列表 </router-link> </p>
            <p><router-link to="/block"> 块切换 </router-link> </p>
            <p><router-link to="/girdlist"> 网格列表切换 </router-link> </p>
            <p><router-link to="/upload"> 上传组件 </router-link> </p>
            <p><router-link to="/other"> 其他组件 </router-link> </p> -->
		</div>
	</div>
</template>
<style>
    .avatar {
        height: 75px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .mpavatar {
        height: 30px;
        margin: 0 auto;
        margin-top: 2px;
        margin-bottom: 2px;
    }
    .img-circle {
        border-radius: 50%;
    }
</style>

