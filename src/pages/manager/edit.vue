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
                                        <div class="text-h6 text-primary">Edit Manager</div>
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
                                <template v-if="!loading">
                                    <div class="row  q-col-gutter-x-md">
                                        <div class="col">
                                            <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="startRecordUpdate()">
                                                <!--[form-content-start]-->
                                                <div class="row q-col-gutter-x-md">
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Name 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Name" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlname" v-model.trim="formData.name"  label="Name" type="text" placeholder="Enter Name"      
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Username 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Username" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlusername" v-model.trim="formData.username"  label="Username" type="text" placeholder="Enter Username"      
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Email 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{email:true}" name="Email" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Enter Email"      
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Business Name 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Business Name" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlbusiness_name" v-model.trim="formData.business_name"  label="Business Name" type="text" placeholder="Enter Business Name"      
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Business Phone Number 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Business Phone Number" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlbusiness_phone_number" v-model.trim="formData.business_phone_number"  label="Business Phone Number" type="number" placeholder="Enter Business Phone Number"   step="any"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Business Address 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Business Address" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlbusiness_address" v-model.trim="formData.business_address"  label="Business Address" type="text" placeholder="Enter Business Address"      
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Credit 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Credit" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlcredit" v-model.trim="formData.credit"  label="Credit" type="number" placeholder="Enter Credit"   step="any"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--[form-content-end]-->
                                                <div v-if="showSubmitButton" class="text-center q-my-md">
                                                    <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" :disabled="invalid" icon-right="send" :loading="saving">
                                                        <q-spinner-oval slot="loading" /> Update
                                                    </q-btn>
                                                </div>
                                            </ValidationObserver>
                                            <slot :submit="submit" :saving="saving"></slot>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="q-pa-sm text-center">
                                        <q-spinner :size="40" color="accent" indeterminate></q-spinner>
                                    </div>
                                </template>
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
	import { EditPageMixin } from "../../mixins/editpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'editManagerPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'manager',
			},
			idName: {
				type: String,
				default: 'manager_id',
			},
			routeName: {
				type: String,
				default: 'manageredit',
			},
			pagePath: {
				type : String,
				default : 'manager/edit',
			},
			apiPath: {
				type: String,
				default: 'manager/edit',
			},
		},
		data() {
            return {
				formData: {
					name: "", username: "", email: "", business_name: "", business_phone_number: "", business_address: "", credit: "", 
				},
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Edit Manager"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["manager/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("manager/setCurrentRecord", value);
				},
			},
		},
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('manager', ['updateRecord', 'fetchRecord']),
			async startRecordUpdate(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let id = this.id;
					let url = this.apiUrl;
					let payload = this.normalizedFormData();
					let data = { id, url, payload }
					this.updateRecord(data).then(
						(response) => {
							this.saving = false;
							this.flashMsg(this.msgAfterUpdate);
							this.resetForm();
							this.closeDialogs();// close page dialog that if opened
							if(this.redirect) this.navigateTo(`/manager`);
						},
						(response) => {
							this.saving = false;
							this.showPageRequestError(response);
						}
					);
				}
			},
			updateFormFields: function(){
				//update form fields value after load from api
				//e.g convert fieldvalue (value,value2,value2) to array 
            },
			resetForm (){
				//reset form fields value
				this.formData = {name: "", username: "", email: "", business_name: "", business_phone_number: "", business_address: "", credit: "", };
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
				//raise event to reset other custom form components
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
