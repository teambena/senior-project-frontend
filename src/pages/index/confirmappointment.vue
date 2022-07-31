<template>
	<div class="container">
        <div class="row justify-center">
            <div class="col col-md-4">
                <q-card  flat bordered class="q-my-lg">
                    <q-card-section>
                        <div class="q-my-md">
                            <div class="text-h5 text-bold">Comfirm Appointment </div>
                        </div>
                        <ValidationObserver ref="observer" tag="form" @submit.prevent="confirmAppointment()">
							<div class="q-my-md">
								<ValidationProvider :rules="{required:true}" name="Name" v-slot="{ errors, invalid, validated }">
									<q-input
										v-model="formData.customername"
										outlined
										dense
										placeholder="Name"
										type="text"
										:error="invalid && validated" :error-message="errors[0]"
									/>
									</ValidationProvider>
							</div>
							<div class="col-md-3 col-sm-4">
								<q-btn color="primary" unelevated type="submit" :loading="saving">
									<q-spinner-oval slot="loading" /> Submit
								</q-btn>
							</div>
                        </ValidationObserver>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import { PageMixin } from "../../mixins/page.js";
export default {
	props: {},
	mixins: [PageMixin],
    data: function () {
        return {
            formData: {
				customername: "",
				token: "",
			},
			saving:false,
        };
    },
    methods: {
        async confirmAppointment(){
			const isFormValid = await this.$refs.observer.validate();
			if(isFormValid){
				this.saving = true;
				this.formData.token = this.$route.query.token || null;
				this.$api.post("auth/comfirmappointment", this.formData).then((response) => {
					this.saving = false;
					this.$router.push("/index/resetpassword_completed");
				},
				(response) => {
					this.saving = false;
					this.showPageRequestError(response);
				});
			}
		},
    }
};
</script>