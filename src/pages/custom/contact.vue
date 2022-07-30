<template>
    <q-page  class="main-page">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <div class="" >
                            <div class="row  items-center q-col-gutter-sm q-px-sm">
                                <div class="col">
                                    <div class="text-h6 text-bold">Contact</div>
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-sm"></q-separator>
                    </div>
                </div>
				<div class="" >
                    <div class="row  items-center q-col-gutter-sm q-px-sm">
                        <div class="col">
                            <div class="text-h6 text-bold">[Make a phone pad here]</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
	import { PageMixin } from "../../mixins/page.js";
	export default {
		name: '',
		components: {
		},
		mixins: [PageMixin ],
		props: {
		},
		data: function() {
			return {
				ready: false,
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted: function(){
			this.ready = true;
		},
		created: function(){
		}
	};
</script>
