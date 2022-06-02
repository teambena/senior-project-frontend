<template>
    <div class="main-page">
        <template v-if="showHeader">
            <q-card  :flat="isSubPage" class="page-section q-py-sm q-px-md q-mb-md nice-shadow-18" >
                <div class="container">
                    <div class="row justify-between q-col-gutter-md">
                        <div class="col-12 col-md-auto " >
                            <div class="" >
                                <div class="row  items-center q-col-gutter-sm q-px-sm">
                                    <div class="col">
                                        <div class="text-h6 text-primary">Add New Appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card>
        </template>
        <section class="page-section " >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-9 col-12 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-18">
                            <div >
                                <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="startSaveRecord()" @reset="resetForm">
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Customer 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'customer')"  api-path="components_data/customer_option_list"  :query-params="filters" v-slot="req">
                                                        <ValidationProvider :rules="{}" name="Customer" v-slot="{ errors, invalid, validated }">
                                                            <q-select   :loading="req.loading"  outlined dense  ref="ctrlcustomer" emit-value map-options  v-model="formData.customer" :options="req.response" label="Customer"  :error="invalid && validated" :error-message="errors[0]" >
                                                            </q-select> 
                                                        </ValidationProvider>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Start Date 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Start Date" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  v-model.trim="formData.start_date" label="Start Date" :error="invalid && validated" :error-message="errors[0]"    >
                                                        <template v-slot:append>
                                                            <q-icon name="date_range" class="cursor-pointer">
                                                            <q-popup-proxy ref="ctrlstart_date" transition-show="scale" transition-hide="scale">
                                                            <q-date   mask="YYYY-MM-DD" v-model="formData.start_date" @input="$refs.ctrlstart_date.hide()" />
                                                            </q-popup-proxy>
                                                            </q-icon>
                                                        </template>
                                                        </q-input>      
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Start Time 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Start Time" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  v-model.trim="formData.start_time"   :error="invalid && validated" :error-message="errors[0]" >
                                                        <template v-slot:append>
                                                            <q-icon name="access_time" class="cursor-pointer">
                                                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                            <q-time   mask="HH:mm" v-model="formData.start_time" />
                                                            </q-popup-proxy>
                                                            </q-icon>
                                                        </template>
                                                        </q-input>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    End Date 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="End Date" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  v-model.trim="formData.end_date" label="End Date" :error="invalid && validated" :error-message="errors[0]"    >
                                                        <template v-slot:append>
                                                            <q-icon name="date_range" class="cursor-pointer">
                                                            <q-popup-proxy ref="ctrlend_date" transition-show="scale" transition-hide="scale">
                                                            <q-date   mask="YYYY-MM-DD" v-model="formData.end_date" @input="$refs.ctrlend_date.hide()" />
                                                            </q-popup-proxy>
                                                            </q-icon>
                                                        </template>
                                                        </q-input>      
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    End Time 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="End Time" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  v-model.trim="formData.end_time"   :error="invalid && validated" :error-message="errors[0]" >
                                                        <template v-slot:append>
                                                            <q-icon name="access_time" class="cursor-pointer">
                                                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                            <q-time   mask="HH:mm" v-model="formData.end_time" />
                                                            </q-popup-proxy>
                                                            </q-icon>
                                                        </template>
                                                        </q-input>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Description 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Description" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrldescription" rows="5"  v-model="formData.description" placeholder="Enter Description"    type="textarea"  :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Status 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Status" v-slot="{ errors, invalid, validated }">
                                                        <q-field :error="invalid && validated" :error-message="errors[0]"  borderless  >
                                                        <q-option-group ref="ctrlstatus" v-model="formData.status" :options="$menus.statusItems"  :error="invalid && validated" :error-message="errors[0]"   size="md" ></q-option-group>
                                                        </q-field>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated   :disabled="invalid" icon-right="send" :loading="saving">
                                            <q-spinner-oval slot="loading" /> Submit
                                        </q-btn>
                                    </div>
                                </ValidationObserver>
                                <slot :submit="submit" :saving="saving"></slot>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
	import { PageMixin } from "../../mixins/page.js";
	import { AddPageMixin } from "../../mixins/addpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'addAppointmentPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'appointment',
			},
			routeName : {
				type : String,
				default : 'appointmentadd',
			},
			apiPath : {
				type : String,
				default : 'appointment/add',
			},
		},
		data() {
            return {
				formData: {
					customer: "", start_date: "", start_time: "", end_date: "", end_time: "", description: "", status: "", 
				},
				start_datePicker:false,start_timePicker:false,end_datePicker:false,end_timePicker:false,
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Appointment"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('appointment', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['appointment_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/calendar`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {customer: "", start_date: "", start_time: "", end_date: "", end_time: "", description: "", status: "", };
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
				this.updateFormData();
				this.$EventBus.$emit("resetForm");
			},
		},
		watch: {
		},
		async mounted() {
		},
		async created() {
		},
	};
</script>
<style scoped>
</style>
