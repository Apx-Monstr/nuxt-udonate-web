<template>
    <div class="pop">
        <div v-if="utype === 'i' || utype==='I'" class = "">
            <Header type = "Individual"/>
            <div class=" px-[184px] py-[18px] w-full flex flex-col gap-4">
                <button class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                    My Profile
                </button>
                <div id="profile" class="flex flex-col gap-4">
                    <div class="flex flex-1 gap-4">
                        <input v-model="name" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Name">
                        <input v-model="mnum" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Mobile Number">
                    </div>
                    <div class="flex flex-1 gap-4">
                        <input v-model="address" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Address">
                        <input v-model="pin" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Pin">
                    </div>
                    <button @click="saveData" class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                        Save
                    </button>
                </div>
            </div>
            <div class="px-[184px] py-[18px] w-full text-xl">
                <div class = "pb-4">
                    Current Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data" dtype = "acc"/>
                        <Donation v-for=" data in ad" v-bind:key="d['name']" :text = "data" dtype = "acc"/>
                    </div>
                </div>
                <div>
                    Previous Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data" dtype = "prev"/>
                        <Donation v-for=" data in ad" v-bind:key="d['name']" :text = "data" dtype = "prev"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="utype === 'c' || utype==='C'" class="">
            <Header type = "Charity"/>
            <div class="px-[184px] py-[18px] w-full text-xl">
                <div class = "pb-4 border-b-2 py-4">
                    Accepting Donations 
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data" dtype = "acc"/>
                        <Donation v-for=" data in ad" v-bind:key="d['name']" :text = "data" dtype = "acc"/>
                    </div>
                </div>
                <div class ="border-b-2 py-4">
                    Previous Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data" dtype = "prev"/>
                        <Donation v-for=" data in ad" v-bind:key="d['name']" :text = "data" dtype = "prev"/>
                    </div>
                </div>
                <div class = "border-b-2 py-4">
                    All Donations
                    <div class="flex gap-4 flex-wrap pt-4">
                        <Donation v-for=" data in d" v-bind:key="d['name']" :text = "data" dtype = "all"/>
                        <Donation v-for=" data in ad" v-bind:key="d['name']" :text = "data" dtype = "all"/>
                    </div>
                </div>
            </div>
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
            d:{},
            utype:""
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
        },
        getUser(){
            const msgref = firebase.database().ref("/user/" + sessionStorage.getItem("user"))
            Axios.get(msgref.toString() + ".json").then(response=>{
                if (response.data !== null){
                    this.userData = response.data
                    this.name = this.userData['name']
                    this.address = this.userData['add']
                    this.mnum = this.userData['mob']
                    this.pin = this.userData['pin']
                }
            })
        },
        saveData(){
            const msgref = firebase.database().ref("/user/" +sessionStorage.getItem("user"))
            Axios.get(msgref.toString() + '.json').then(response=>{
                firebase.database().ref("/user/" + sessionStorage.getItem("user")).set({
                    name:this.name,
                    add:this.address,
                    mob:this.mnum,
                    pin:this.pin,
                    type:"I"
                })
            })
        }
    },
    mounted(){
        this.getdata();
        this.getUser();
        this.utype = sessionStorage.getItem("utype");

    }
}
</script>