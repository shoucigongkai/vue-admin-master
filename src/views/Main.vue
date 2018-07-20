<template>
	<section>
		<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" ak="RnsljStS9MuMSwsywT1YxzmhGtrhxLXq">
			<bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" @click="infoWindowOpen">
				<bm-label content="我爱北京天安门" :position="{lng: 116.404, lat: 39.915}" :labelStyle="color" title="Hover me"  @click="infoWindowOpen" />
				<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" v-html="content">{{content}}</bm-info-window>
			</bm-marker>
		</baidu-map>
	</section>
</template>

<script>
	import {BaiduMap} from 'vue-baidu-map'
	import {BmMarker} from 'vue-baidu-map'
	import {BmLabel} from 'vue-baidu-map'
	import {BmInfoWindow} from 'vue-baidu-map'
	export default {
        components: {
            BaiduMap,
            BmMarker,
            BmLabel,
            BmInfoWindow
        },
		data(){
            return {
                center: {lng: 0, lat: 0},
                zoom: 3,
				show:false,
				color:{backgroundColor:'#fff',marginLeft:'16px'},
				content:'<p>地址：'+'<span>北京市西城区天安门广场</span></p>'+'<p>空气质量'+'<span>良</span>'+'</p>'
			}
		},
        methods:{
            handler ({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 116.404
                this.center.lat = 39.915
                this.zoom = 15
            },
            infoWindowClose () {
                this.show = false
            },
            infoWindowOpen () {
                this.show = true
            }
		}
	}

</script>

<style scoped>
	.bm-view {
		width: 100%;
		height: 550px;
	}
</style>