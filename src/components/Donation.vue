<template>
<!-- {{text['path']}} -->
    <div v-if="dtype === 'acc' && user===text['to'] && text['status'] === 'a'" @click="showModal" class = "w-[320px] h-[175px] relative rounded bg-[#E2E8F0]"> 
        <div class="px-4 pt-4">
            {{text["name"]}}
        </div>
        <p class="px-4">
            {{text['mno']}}
        </p>
        <img v-if="text['type'] === '( MED )' || text['type'] === '( med )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Medicine.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( CLOTH )' || text['type'] === '( cloth )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Cloth.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( BOOK )' || text['type'] === '( book )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Books.png" alt="" srcset="">
        <div v-if="text['isAngel']" class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#DB2777]"></div>
        <div v-show="hide" class="flex bg-[#E2E8F0] rounded border-[#4F46E5] border-2 z-40 fixed h-[60vh] w-[30vw] top-[20vh] left-[35vw] p-4 flex-col gap-4 justify-between">
            
            <div  class="flex flex-col gap-4">
                <p v-if="text['isAngel']">
                    Angel Donor
                </p>
                <p v-else>
                    {{ text["from"] }}
                </p>
                <p>
                    {{ text["name"] }}
                </p>
                <p>
                    {{ text ["desc"] }}
                </p>
                <p>
                    {{ text ["mno"] }}
                </p>
                <p>
                    {{ text ["add"] }}
                </p>
                <p>
                    {{ text ["pin"] }}
                </p>
                <p>
                    {{ text ["type"] }}
                </p>
            </div>
            <button @click="markDone" v-if="text['status'] === 'a'" class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                Done
            </button>
        </div>
    </div>
    <div v-else-if="dtype === 'prev' && user===text['to'] && text['status'] === 'd'" @click="showModal" class = "w-[320px] relative h-[175px] rounded bg-[#E2E8F0]"> 
        <div class="px-4 pt-4">
            {{text["name"]}}
        </div>
        <p class="px-4">
            {{text['mno']}}
        </p>
        <img v-if="text['type'] === '( MED )' || text['type'] === '( med )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Medicine.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( CLOTH )' || text['type'] === '( cloth )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Cloth.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( BOOK )' || text['type'] === '( book )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Books.png" alt="" srcset="">
        <div v-if="text['isAngel']" class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#DB2777]"></div>
        <div v-show="hide" class="flex bg-[#E2E8F0] rounded border-[#4F46E5] border-2 z-40 fixed h-[60vh] w-[30vw] top-[20vh] left-[35vw] p-4 flex-col gap-4 justify-between">
            
            <div class="flex flex-col gap-4">
                <p v-if="text['isAngel']">
                    Angel Donor
                </p>
                <p v-else>
                    {{ text["from"] }}
                </p>
                <p>
                    {{ text["name"] }}
                </p>
                <p>
                    {{ text ["desc"] }}
                </p>
                <p>
                    {{ text ["mno"] }}
                </p>
                <p>
                    {{ text ["add"] }}
                </p>
                <p>
                    {{ text ["pin"] }}
                </p>
                <p>
                    {{ text ["type"] }}
                </p>
            </div>
        </div>
    </div>
    <div v-else-if="dtype === 'all' && text['to'] === '' && text['status'] === 'l'" @click="showModal" class = "relative w-[320px] h-[175px] rounded bg-[#E2E8F0]"> 
        <div class="px-4 pt-4">
            {{text["name"]}}
        </div>
        <p class="px-4">
            {{text['mno']}}
        </p>
        <img v-if="text['type'] === '( MED )' || text['type'] === '( med )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Medicine.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( CLOTH )' || text['type'] === '( cloth )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Cloth.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( BOOK )' || text['type'] === '( book )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Books.png" alt="" srcset="">
        <div v-if="text['isAngel']" class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#DB2777]"></div>
        <div v-show="hide" class="flex bg-[#E2E8F0] border-[#4F46E5] border-2 z-40 rounded fixed h-[60vh] w-[30vw] top-[20vh] left-[35vw] p-4 flex-col gap-4 justify-between">
           
            <div class="flex flex-col gap-4">
                <p v-if="text['isAngel']">
                    Angel Donor
                </p>
                <p v-else>
                    {{ text["from"] }}
                </p>
                <p>
                    {{ text["name"] }}
                </p>
                <p>
                    {{ text ["desc"] }}
                </p>
                <p>
                    {{ text ["mno"] }}
                </p>
                <p>
                    {{ text ["add"] }}
                </p>
                <p>
                    {{ text ["pin"] }}
                </p>
                <p>
                    {{ text ["type"] }}
                </p>
            </div>
            <button @click="acceptDonation" v-if="text['status'] === 'l'" class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                Accept 
            </button>
        </div>
    </div>
    <div v-if="utype === 'I' && dtype === 'acc' && text['from'] === user && (text['status'] === 'l' || text['status'] === 'a')" @click="showModal" class = "relative w-[320px] h-[175px] rounded bg-[#E2E8F0]"> 
        <div class="px-4 pt-4">
            {{text["name"]}}
        </div>
        <p class="px-4">
            {{text['mno']}}
        </p>
        <img v-if="text['type'] === '( MED )' || text['type'] === '( med )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Medicine.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( CLOTH )' || text['type'] === '( cloth )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Cloth.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( BOOK )' || text['type'] === '( book )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Books.png" alt="" srcset="">
        <div v-if="text['isAngel']" class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#DB2777]"></div>
        <div v-show="hide" class="flex bg-[#E2E8F0] border-[#4F46E5] border-2 z-40 rounded fixed h-[60vh] w-[30vw] top-[20vh] left-[35vw] p-4 flex-col gap-4 justify-between">
            <div class="flex flex-col gap-4">
                <p v-if="text['isAngel']">
                    Angel Donor
                </p>
                <p v-else>
                    {{ text["from"] }}
                </p>
                <p>
                    {{ text["name"] }}
                </p>
                <p>
                    {{ text ["desc"] }}
                </p>
                <p>
                    {{ text ["mno"] }}
                </p>
                <p>
                    {{ text ["add"] }}
                </p>
                <p>
                    {{ text ["pin"] }}
                </p>
                <p>
                    {{ text ["type"] }}
                </p>
                <p v-if="text['status'] === 'l'">
                    Listed
                </p>
                <p v-else-if="text['status'] === 'a'">
                    Accepted by {{ text['to'] }}
                </p>
            </div>
            <button v-if="text['status'] === 'l'" class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                Delete
            </button>
        </div>
    </div>
    <div v-else-if="utype === 'I' && dtype === 'prev' && text['from'] === user && text['status'] === 'd'" @click="showModal" class = "relative w-[320px] h-[175px] rounded bg-[#E2E8F0]"> 
        <div class="px-4 pt-4">
            {{text["name"]}}
        </div>
        <p class="px-4">
            {{text['mno']}}
        </p>
        <img v-if="text['type'] === '( MED )' || text['type'] === '( med )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Medicine.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( CLOTH )' || text['type'] === '( cloth )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Cloth.png" alt="" srcset="">
        <img v-else-if="text['type'] === '( BOOK )' || text['type'] === '( book )'" class = "absolute right-4 bottom-2 w-24" src="../assets/Books.png" alt="" srcset="">
        <div v-if="text['isAngel']" class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#DB2777]"></div>
        <div v-show="hide" class="flex bg-[#E2E8F0] border-[#4F46E5] border-2 z-40 rounded fixed h-[60vh] w-[30vw] top-[20vh] left-[35vw] p-4 flex-col gap-4 justify-between">
            <div class="flex flex-col gap-4">
                <p>
                    {{ text["from"] }}
                </p>
                <p>
                    {{ text["name"] }}
                </p>
                <p>
                    {{ text ["desc"] }}
                </p>
                <p>
                    {{ text ["mno"] }}
                </p>
                <p>
                    {{ text ["add"] }}
                </p>
                <p>
                    {{ text ["pin"] }}
                </p>
                <p>
                    {{ text ["type"] }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from'firebase/app';
import Axios from 'axios';
import 'firebase/database';
export default {
    name:"Donation",
    props:{
        dtype:{
            type:String,
        },
        text:{
            type:String,
            default:"Helloooo"
        }
    },
    data(){
        return{
            hide : false
        }
    },
    created(){
        this.user = sessionStorage.getItem("user");
        this.utype = sessionStorage.getItem("utype");
        console.log(this.text['path'])
        console.log(this.text['isAngel'])
        // this.acceptDonation()
    },
    methods:{
        showModal(){
            this.hide = !this.hide
        },
        acceptDonation(){
            let path = this.text['path']
            if(this.text['isAngel']){
                const msgref = firebase.database().ref("/ad/" + path)
                Axios.get(msgref.toString()+'.json').then(response=>{
                    if(response.data !== null){
                        firebase.database().ref("/ad/"+path+"/status/").set("a")
                        firebase.database().ref("/ad/"+path+"/to/").set(sessionStorage.getItem('user'))
                    }
                })
            }
            else{
                const msgref = firebase.database().ref("/donations/" + path)
                Axios.get(msgref.toString()+'.json').then(response=>{
                    if(response.data !== null){
                        firebase.database().ref("/donations/"+path+"/status/").set("a")
                        firebase.database().ref("/donations/"+path+"/to/").set(sessionStorage.getItem('user'))
                    }
                })
            }
        },
        markDone(){
            let path = this.text['path']
            if(this.text['isAngel']){
                const msgref = firebase.database().ref("/ad/" + path)
                Axios.get(msgref.toString()+'.json').then(response=>{
                    if(response.data !== null){
                        firebase.database().ref("/ad/"+path+"/status/").set("d")
                    }
                })
            }
            else{
                const msgref = firebase.database().ref("/donations/" + path)
                Axios.get(msgref.toString()+'.json').then(response=>{
                    if(response.data !== null){
                        firebase.database().ref("/donations/"+path+"/status/").set("d")
                    }
                })
            }
        }
    }
}
</script>