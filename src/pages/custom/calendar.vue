<template>
    <q-page  class="main-page">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <div class="" >
                            <div class="row  items-center q-col-gutter-sm q-px-sm">
                                <div class="col">
                                    <div class="text-h6 text-bold">Calendar</div>
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
                    <div class="col comp-grid" >
                        <q-card  :flat="isSubPage" class="q-mb-sm q-pa-sm nice-shadow-18">
                            <div class="q-pa-sm" >
                                <calendar v-if="ready" :records="records" event-add-page="appointment/add"
                                event-view-page="appointment/view"
                                default-view="month"
                                height="80vh"
                                event-color="#312F36"
                                :show-header="true"
                                id-field="appointment_id"
                                view-event-page-type="dialog"
                                add-event-page-type="dialog"
                                title-field="customer"
                                start-date-field="start_date"
                                start-time-field="start_time"
                                end-date-field="end_date"
                                end-time-field="end_time"
                                :view-change="true"
                                :date-controls="true"
                                :max-days="14"
                                :mini-mode="false"
                                :view-options="[{value: 'week', label: 'Week'},{value: 'month', label: 'Month'},{value: 'week-agenda', label: 'Week-Agenda'}]"
                                :no-scroll="false"
                                :hour24-format="false"
                                today-icon="date_range" prev-day-icon="arrow_back" next-day-icon="arrow_forward">
                                <template v-slot:headerday="props">
                                    <q-badge :title="props.event.title" :style="{backgroundColor: props.event.color}" class="event-badge" />
                                </template>
                                <template v-slot:weekday="props">
                                    <q-card :style="{backgroundColor: props.event.color}" class="justify-center text-white ellipsis row items-center cursor-pointer">
                                        <q-icon size="20px" v-if="props.event.icon" :name="props.event.icon" class="q-mr-xs"></q-icon>
                                        <span>{{ props.event.title }}</span>
                                    </q-card>
                                </template>
                                <template v-slot:monthday="props">
                                    <q-card :style="{color: props.event.color}" class="text-caption text-center q-ma-sm q-pa-sm nice-shadow-8 cursor-pointer">
                                        <q-icon size="20px" v-if="props.event.icon" :name="props.event.icon" class="q-mr-xs"></q-icon>
                                        <span class="text-bold">{{ props.event.title }}</span>
                                    </q-card>
                                </template>
                                <template v-slot:agenda="props">
                                    <q-card :style="{color: props.event.color}" class="q-pa-sm nice-shadow-8 text-center q-ma-sm cursor-pointer">
                                        <div class="row justify-center">
                                            <q-avatar v-if="props.event.image || props.event.icon" style="max-height: 50px">
                                                <img v-if="props.event.image" :src="$utils.setImgUrl(props.event.image, 'small')" />
                                                <q-icon v-else size="md" :name="props.event.icon" />
                                            </q-avatar>
                                        </div>
                                        <div v-if="props.event.title" class="text-bold">
                                            {{ props.event.title }}
                                        </div>
                                        <div v-if="props.event.time" class="text-caption text-grey ellipsis">
                                            {{ props.event.time }}
                                        </div>
                                    </q-card>
                                </template>
                                </calendar>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
	import Calendar from "../../components/Calendar.vue";
	import { PageMixin } from "../../mixins/page.js";
    import { ListPageMixin } from "../../mixins/listpage.js";
    import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'listAppointmentPage',
		components: {
			Calendar,
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
			pageTitle:{
				get: function () {
					//set browser page title
					return "Calendar"
				}
			},
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
		},
		mounted: function(){
			this.ready = true;
		},
		created: function(){
		}
	};
</script>
