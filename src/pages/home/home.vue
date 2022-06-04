<template>
    <q-page  class="main-page">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <div class="" >
                            <div class="row  items-center q-col-gutter-sm q-px-sm">
                                <div class="col">
                                    <div class="text-h6 text-bold">Home</div>
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-sm"></q-separator>
                    </div>
                </div>
            </div>
        </section>
        <!-- Barchart -->
        <!-- <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-6 comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                            <div class="q-pa-md">
                                <div class="text-weight-bold text-h5">Customer Today</div>
                                <div class="text-caption"></div>
                                <q-separator class="q-my-md"></q-separator>
                                <div class="row q-col-gutter-sm">
                                    <div class="col">
                                        <api-data-source   api-path="components_data/barchart_customertoday"  :query-params="filters" v-slot="req">
                                            <div style="position:relative;text-align:center">
                                                <q-inner-loading :showing="req.loading">
                                                    <q-spinner-pie color="accent" size="5em" />
                                                </q-inner-loading>
                                                <vue-chart :chart-data="req.response" chart-type="bar" ></vue-chart>
                                            </div>
                                        </api-data-source>
                                    </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-6 comp-grid" >
                    </div>
                </div>
            </div>
        </section> -->
    </q-page>
</template>
<script>
	import VueChart from '../../components/VueCharts.vue'
	import { PageMixin } from "../../mixins/page.js";
	export default {
		name: '',
		components: {
			VueChart,
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
