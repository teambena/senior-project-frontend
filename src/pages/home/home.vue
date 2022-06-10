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
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-12 comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                            <div class="q-pa-md">
                                <div class="text-weight-bold text-h5">Customer Today</div>
                                <div class="text-caption"></div>
                                <q-separator class="q-my-md"></q-separator>
                                <div class="row q-col-gutter-sm">
                                    <div class="col">
                                        <api-data-source   api-path="components_data/linechart_customertoday"  :query-params="filters" v-slot="req">
                                            <div style="position:relative;text-align:center">
                                                <q-inner-loading :showing="req.loading">
                                                    <q-spinner-pie color="accent" size="5em" />
                                                </q-inner-loading>
                                                <vue-chart :chart-data="req.response" chart-type="line" :height="100"></vue-chart>
                                            </div>
                                        </api-data-source>
                                    </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-12 comp-grid" >
                        <div class="">
                            <div class="container-fluid">
                                <div class="row q-col-gutter-x-md">
                                    <div class="col-md-12 comp-grid" >
                                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                                            <div class="q-pa-md">
                                                <div class="text-weight-bold text-h5">Upcoming Appointment</div>
                                                <div class="text-caption"></div>
                                                <q-separator class="q-my-md"></q-separator>
                                                <div class="row q-col-gutter-sm">
                                                    <div class="col">
                                                        <!-- page records template -->
                                                        <template >
                                                            <q-table 
                                                            :flat="true"
                                                            table-header-class="text-h4 "
                                                            :bordered="false"
                                                            :columns="$menus.UpcomingAppointmentTableHeaderItems" 
                                                            :data="records"
                                                            binary-state-sort
                                                            separator="horizontal"
                                                            :dense="true"
                                                            :selected.sync="selectedItems"
                                                            row-key="appointment_id" 
                                                            :pagination.sync="pagination"
                                                            hide-bottom
                                                            @request="setPagination"
                                                            :loading="loading">
                                                            <!-- Start of Table Layout -->
                                                            <template v-slot:body="props">
                                                                <q-tr :props="props">
                                                                    <q-td  key="customer" :props="props">
                                                                        {{ props.row.customer }}
                                                                    </q-td>
                                                                    <q-td  key="start_date" :props="props">
                                                                        {{ props.row.start_date }}
                                                                    </q-td>
                                                                    <q-td  key="start_time" :props="props">
                                                                        {{ props.row.start_time }}
                                                                    </q-td>
                                                                    <q-td  key="end_date" :props="props">
                                                                        {{ props.row.end_date }}
                                                                    </q-td>
                                                                    <q-td  key="end_time" :props="props">
                                                                        {{ props.row.end_time }}
                                                                    </q-td>
                                                                    <q-td  key="description" :props="props">
                                                                        {{ props.row.description }}
                                                                    </q-td>
                                                                    <q-td  key="status" :props="props">
                                                                        <q-icon :class="props.row.status == 1.0 ? 'text-positive' : 'text-grey'" size="md" name="check_circle">
                                                                        <q-tooltip anchor="top middle" content-class="bg-accent">
                                                                        {{ props.row.status }}
                                                                        </q-tooltip>
                                                                        </q-icon>
                                                                    </q-td>
                                                                </q-tr>
                                                            </template>
                                                            <!-- End of Table Layout-->
                                                            </q-table>
                                                        </template>
                                                        <!-- page loading indicator template -->
                                                        <template v-if="loading">
                                                            <q-inner-loading :showing="loading">
                                                                <q-spinner color="primary" size="30px"> 
                                                                </q-spinner>
                                                            </q-inner-loading>
                                                        </template>
                                                        <!-- page empty record template -->
                                                        <template v-if="!loading && !records.length">
                                                            <q-card :flat="$q.screen.gt.md">
                                                                <q-card-section>
                                                                    <div class="text-grey text-h6 text-center">
                                                                        No record found
                                                                    </div>
                                                                </q-card-section>
                                                            </q-card>
                                                        </template>
                                                        <!-- page footer template-->
                                                        <template v-if="showFooter">
                                                            <div class="">
                                                                <div class="q-pa-sm" v-show="!loading">
                                                                    <div class="row justify-between">
                                                                        <div class="row q-col-gutter-md">
                                                                            <div>
                                                                                <q-btn    :rounded="false"  no-caps  unelevated   color="negative" padding="xs" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Delete Selected"></q-btn>
                                                                            </div>
                                                                        </div>
                                                                        <div v-if="paginate && totalRecords > 0" class="row q-col-gutter-md justify-center">
                                                                            <div class="col-auto">
                                                                                <q-chip>Records {{recordsPosition}} of {{totalRecords}}</q-chip>
                                                                            </div>
                                                                            <div v-if="totalPages > 1">
                                                                                <q-pagination  color="primary" flat glossy  input v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                                                            </div>
                                                                        </div>
                                                                    </div>  
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <section class="page-section q-mb-md" >
                                                            <div class="container-fluid">
                                                            </div>
                                                        </section>
                                                        <section class="page-section " >
                                                            <div class="container-fluid">
                                                                <div class="row q-col-gutter-x-md">
                                                                    <div class="col comp-grid" >
                                                                        <div class="">
                                                                            <div >
                                                                                <template v-if="showBreadcrumbs && $route.query.tag">
                                                                                    <q-breadcrumbs class="q-pa-md">
                                                                                        <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/appointment"></q-breadcrumbs-el>
                                                                                        <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                                                                    </q-breadcrumbs>
                                                                                </template>
                                                                                <div class="relative-position">
                                                                                    <div class="row q-col-gutter-x-md">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
	import VueChart from '../../components/VueCharts.vue'
	import { PageMixin } from "../../mixins/page.js";
    import { ListPageMixin } from "../../mixins/listpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: '',
		components: {
			VueChart,
		},
		mixins: [PageMixin, ListPageMixin ],
		props: {
			primaryKey : {
				type : String,
				default : 'appointment_id',
			},
			pageName : {
				type : String,
				default : 'appointment',
			},
			routeName : {
				type : String,
				default : 'appointmentlist',
			},
			apiPath : {
				type : String,
				default : 'appointment/index',
			},
			multiCheckbox: {
				type: Boolean,
				default: true,
			},
			msgBeforeDelete: {
				type: String,
				default: "Are you sure you want to delete this record?",
			},
		},
		data: function() {
			return {
				ready: false,
			}
		},
		computed: {
            records: {
				get: function () {
					return this.$store.getters["appointment/records"];
				},
				set: function (value) {
					this.$store.commit("appointment/setRecords", value);
				},
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["appointment/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("appointment/setCurrentRecord", value);
				},
			},
		},
		methods: {
            ...mapActions("appointment", ["fetchRecords", "deleteRecord"]),
			load: function() {
				if (!this.loading) {
					this.loading = true;
					this.currentRecord = null;
					let url = this.apiUrl;
					let payload = {
						url,
						merge: false
					}
					this.fetchRecords(payload).then(
						(response) => {
							this.loading = false;
							this.ready = true;
							this.totalRecords = response.total_records;
							this.recordCount = response.record_count;
							this.pagination.rowsNumber = this.totalRecords;
							window.scrollTo(0, 0);
						},
						(response) => {
							this.loading = false;
							this.showPageRequestError(response);
						}
					);
				}
			},	
		},
		watch: {
            apiUrl: function () {
				this.load();
			},
			$route (to, from){
				//only fetch data when navigated to this page
				if(to.name == this.routeName){
					this.load();
				}
			},
		},
		mounted: function(){
			this.ready = true;
		},
		created: function(){
		}
	};
</script>
