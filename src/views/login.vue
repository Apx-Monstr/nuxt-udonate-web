<template>
    <div class="h-[100vh] flex">
        <div class="w-[1168px] h-[584px] m-auto rounded bg-[#E2E8F0] flex">
        <div class = "relative flex flex-1 flex-col p-10 items-center justify-center">
            <svg class = "absolute top-0 left-0" width="293" height="166" viewBox="0 0 293 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M181.469 -122.752C182.898 -128.087 179.736 -133.605 174.319 -134.679C147.736 -139.95 120.16 -138.002 94.488 -128.947C65.6654 -118.78 40.5937 -100.13 22.5686 -75.448C4.54348 -50.766 -5.5914 -21.2075 -6.50381 9.34201C-7.41621 39.8915 0.936576 70.0022 17.4566 95.7159C33.9766 121.43 57.8905 141.543 86.055 153.412C114.219 165.281 145.316 168.35 175.257 162.215C205.198 156.081 232.583 141.03 253.811 119.042C272.718 99.4574 285.952 75.1856 292.207 48.8176C293.482 43.4439 289.778 38.2742 284.332 37.3568L242.23 30.2646C236.784 29.3472 231.68 33.042 230.156 38.3504C226.165 52.2517 218.821 65.019 208.705 75.4968C196.266 88.3818 180.219 97.2013 162.674 100.796C145.128 104.391 126.906 102.592 110.402 95.6373C93.8978 88.6822 79.8844 76.896 70.2038 61.828C60.5232 46.76 55.6285 29.1154 56.1632 11.2136C56.6979 -6.68812 62.6368 -24.0091 73.1994 -38.4726C83.762 -52.936 98.4538 -63.8649 115.344 -69.8226C129.078 -74.6672 143.743 -76.0403 158.045 -73.8917C163.507 -73.0712 168.989 -76.1772 170.418 -81.5118L181.469 -122.752Z" fill="#4F46E5"/>
            </svg>

            <div class="flex flex-col items-center gap-4">
                <span class = "text-4xl font-bold">
                    Sign In
                </span>
                <p class = "text-sm pb-4">
                    Don't have an account? Sign Up
                </p>
                <input v-model="user" class = "w-80 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Username">
                <input v-model="pass" class = "w-80 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Password">
                <button @click="signInClick" class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                    Sign In
                </button>
                <p class = "text-sm">
                    
                </p>
            </div>
            <svg class = "absolute bottom-0 right-0" width="237" height="152" viewBox="0 0 237 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M230.795 34.5031C233.877 29.9203 232.675 23.6751 227.899 20.902C204.463 7.29469 177.745 0.194114 150.525 0.434669C119.963 0.704758 90.1976 10.2161 65.1422 27.7185C40.0868 45.2208 20.9137 69.895 10.1432 98.4975C-0.627192 127.1 -2.49087 158.292 4.79718 187.974C12.0852 217.655 28.1839 244.437 50.977 264.798C73.7701 285.159 102.191 298.147 132.503 302.054C162.816 305.961 193.601 300.605 220.812 286.689C245.049 274.295 265.44 255.627 279.908 232.713C282.856 228.043 281.029 221.952 276.175 219.317L238.648 198.955C233.794 196.321 227.768 198.161 224.605 202.688C216.321 214.544 205.233 224.239 192.266 230.87C176.321 239.025 158.281 242.163 140.518 239.874C122.755 237.584 106.101 229.973 92.7445 218.042C79.388 206.11 69.9543 190.416 65.6836 173.023C61.4128 155.63 62.5049 137.352 68.8163 120.591C75.1277 103.83 86.363 89.3715 101.045 79.1153C115.727 68.859 133.17 63.2854 151.079 63.1272C165.642 62.9985 179.959 66.4556 192.792 73.1264C197.692 75.6737 203.885 74.5135 206.967 69.9307L230.795 34.5031Z" fill="#4F46E5"/>
            </svg>
        </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';
import Axios from 'axios';
export default {
    name:"Login",
    data(){
        return {
            user:"",
            pass:""
        }
    },
    methods:{
        signInClick(){
            this.userLogin()
        },
        async userLogin(){
            const msgref = firebase.database().ref("/users/" + this.user)
            Axios.get(msgref.toString() + ".json").then(response=>{
                if(response.data !== null){
                    if(response.data.pswd === this.pass){
                        sessionStorage.setItem("user", this.user)
                    }
                    sessionStorage.setItem("utype", response.data.type)
                    const msgref = firebase.database().ref("/user/" + this.user)
                    Axios.get(msgref.toString() + ".json").then(response=>{
                        if(response.data !== null){
                            sessionStorage.setItem("data", response.data)
                        }
                    })
                    this.$router.push({path:"/user"})
                }
            })
        }
    }
}
</script>