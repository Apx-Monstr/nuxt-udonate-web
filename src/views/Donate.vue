<template>
    <div class="h-[100vh] flex pop">
        <div :class="s1" class="relative w-[1168px] h-[584px] m-auto rounded bg-[#E2E8F0] flex items-center justify-center">
            <svg class = "absolute top-0 left-0" width="337" height="264" viewBox="0 0 337 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M336.085 35.0777C347.091 156.219 -107.668 -31.8314 -37.1707 256.123C-158.312 267.13 -55.303 283.51 -66.3096 162.369C-77.3162 41.2278 11.9656 -65.8992 133.107 -76.9058C254.248 -87.9124 325.078 -86.0636 336.085 35.0777Z" fill="#DB2777"/>
            </svg>
            <div class="flex gap-4">
                <DonateCard @click="select('med')" class = "active:border-4"/>
                <DonateCard @click="select('book')" type = "Books"/>
                <DonateCard @click="select('cloth')" type = "Cloth"/>
            </div>
            <button @click="nextOne" class = "absolute right-20 bottom-20 py-2 px-4 bg-[#4F46E5] rounded flex-1 text-[#fafafa] text-sm">
                Next {{selected}}
            </button>
        </div>
        <div :class="s2" class="relative w-[1168px] h-[584px] m-auto rounded bg-[#E2E8F0] flex flex-col items-start p-6 px-[6rem] gap-4 justify-start items-center">
            <p class = "text-3xl font-bold p-2">
                Enter Collection Details for {{ selected.toUpperCase() }} Donation
            </p>
            <div class="flex gap-4 w-full">
                <input v-model="name" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Name">
                <input v-model="mnum" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Mobile Number">
            </div>
            <input v-model="desc" class = "flex-1 w-full py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Description">
            <input v-model="add" class = "flex-1 w-full py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Address">
            <div class="flex gap-4 w-full">
                <input v-model="pin" class = "flex-1 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Pin">
                <button @click="nextTwo" class = "py-2 bg-[#4F46E5] rounded flex-1 text-[#fafafa] text-xl">
                    Next
                </button>
            </div>
        </div>
        <div :class="s3" class="relative w-[1168px] h-[584px] m-auto rounded bg-[#DB2777] flex flex-col text-[#1E293B] text-6xl font-bold items-center justify-center">
            <img src="../assets/Congrats.png" alt="">
            Thanks For your Donation
            <br><span class="text-sm pt-3 text-[#fafafa] font-normal">
                Your donation request has been registered... accepting charity will contact you soon
            </span>
            <svg class ="absolute bottom-0" width="1168" height="107" viewBox="0 0 1168 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1231 77.2232C1231 189.042 81.8085 140.529 -12.9003 140.529C-55.3924 -71.4921 177.808 18.0945 309.836 30.636C543.543 67.0682 785.735 7.94142 880.443 7.94142C975.152 7.94142 1231 -34.5954 1231 77.2232Z" fill="#FAFAFA" fill-opacity="0.1"/>
            </svg>
            <button @click="routeHome" class="py-2 px-4 bg-[#4F46E5] rounded font-normal mt-6 text-[#fafafa] text-sm">
                Home
            </button>
        </div>
  </div>
</template>

<script>
import firebase from'firebase/app';
import Axios from 'axios';
import 'firebase/database';
import DonateCard from '@/components/DonateCard.vue';
export default {
    name:"DonateView",
    data(){
        return {
            user:null,
            allData:null,
            selected:"",
            s1:"",
            s2:"hidden",
            s3:"hidden",
            desc:""
        }
    },
    components:{
        DonateCard
    },methods:{
        select(name){
            this.selected = "( " + name + " )"
        },
        nextOne(){
            this.s1 = "hidden"
            this.s2 = ""
        },
        nextTwo(){
            this.uploadData();
            this.s2 = "hidden"
            this.s3 = ""
        },
        routeHome(){
            this.$router.push({path:"/user"})
        },
        getUser(){
            const msgref = firebase.database().ref("/user/" + sessionStorage.getItem("user"))
            Axios.get(msgref.toString() + ".json").then(response=>{
                if (response.data !== null){
                    this.userData = response.data
                    this.name = this.userData['name']
                    this.add = this.userData['add']
                    this.mnum = this.userData['mob']
                    this.pin = this.userData['pin']
                }
            })
        },
        async uploadData(){
            let data = {
                name: this.name,
                mno: this.mnum,
                desc: this.desc,
                add: this.add,
                pin: this.pin,
                type: this.selected.toUpperCase(),
                from:sessionStorage.getItem("user"),
                status:"l",
                to:"",
            }
            let path = data['name'] + data['mno'] + data['desc'][2] + data['desc'][0]
            data['path'] = path
            const msgref = firebase.database().ref("/donations/" + path)
            Axios.get(msgref.toString() + ".json").then(response=>{
                if (response.data === null){
                    firebase.database().ref("/donations/" +path).set(data)
                }
            })
        }
    },
    created(){
        this.getUser();
        // const msgref = firebase.database().ref("/user/")
    }
}
</script>