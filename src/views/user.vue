<template>
    <div class="pop">
        <div class = "hidden">
            <Header/>
            <div class="px-[184px] py-[18px] w-full text-xl">
                <div class = "pb-4">
                    Current Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation/>
                        <Donation/>
                        <Donation/>
                    </div>
                </div>
                <div>
                    Previous Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation/>
                        <Donation/>
                        <Donation/>
                    </div>
                </div>
            </div>
            <DonateModal class = "hidden"/>
        </div>
        <div  class="">
            <Header type = "Charity"/>
            <div class="px-[184px] py-[18px] w-full text-xl">
                <div class = "pb-4">
                    Accepting Donationsdsrtes4
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation/>
                        <Donation/>
                        <Donation/>
                    </div>
                </div>
                <div>
                    Previous Donations
                    {{ ad }}
                    {{ d }}
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data"/>
                    </div>
                </div>
                <div>
                    All Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation/>
                        <Donation/>
                        <Donation/>
                    </div>
                </div>
            </div>
            <DonateModal class = "hidden"/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Donation from "@/components/Donation.vue";
import DonateModal from "@/components/DonateModal.vue";
import firebase from 'firebase/app';
import 'firebase/database';
import Axios from 'axios';
export default {
    name:"UserView",
    components:{
        Header,
        Donation,
        DonateModal
    },
    data(){
        return{
            type:"Individual",
            ad:{},
            d:{}
        }
    },
    methods:{
        uploadDonation(){
            let data0 = {
                name: "Cloths",
                mno: 976431852,
                desc: "Hello from some Cloths",
                add: "Addresss goes here",
                pin: 357456,
                type: "( CLOTH )",
                from:"john",
                to:"",
                status:"l",
            }
            let data= {
        ABC: {
          add:"",
          mob:"",
          pin:"",
          type:"C"
        },
        Goonj:{
          add:"",
          mob:"",
          pin:"",
          type:"C"
        },
        john:{
          add:"",
          mob:"",
          pin:"",
          type:"I"
        },
        june:{
          add:"",
          mob:"",
          pin:"",
          type:"I"
        },
        alpha:{
          add:"",
          mob:"",
          pin:"",
          type:"I"
        },
      }
            let path = "/user/"
            const msgref = firebase.database().ref(path)
            Axios.get(msgref.toString() + ".json").then(response=>{
                    firebase.database().ref(path).set(data)
            })
        },
        async getdata(){
            const msgref = firebase.database().ref("/ad/")
        Axios.get(msgref.toString() + ".json").then(response=>{
            if (response.data !== null){
                this.ad = response.data
            }
        })
        const msgref2 = firebase.database().ref("/donations/")
        Axios.get(msgref2.toString() + ".json").then(response=>{
            if (response.data !== null){
                this.d = response.data
            }
        })
        }
    },
    mounted(){
        this.getdata()
    }
}
</script>