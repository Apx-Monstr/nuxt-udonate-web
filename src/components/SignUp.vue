<template>
    <div class = "relative flex flex-1 flex-col p-10 items-center justify-center">
        <div class="flex flex-col items-center gap-4">
            <span class = "text-4xl font-bold">
                {{ type }}
            </span>
            <p class = "text-sm pb-4">
                Sign Up for Charity Account
            </p>
            <input class = "w-80 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Username">
            <input class = "w-80 py-2 pl-4 text-xl focus:none outline-none rounded" type="text" placeholder = "Password">
            <button class = "py-3 bg-[#4F46E5] py-2 rounded w-full text-[#fafafa] text-xl">
                Join Now
            </button>
            <p class = "text-sm">
                Already have an account? Sign In
            </p>
        </div>
        <svg class="absolute bottom-0" width="303" height="69" viewBox="0 0 303 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M251.443 251.443C255.348 255.348 261.708 255.369 265.347 251.214C283.203 230.829 295.305 205.973 300.298 179.213C305.905 149.169 302.289 118.131 289.927 90.1796C277.564 62.2284 257.033 38.6721 231.033 22.6071C205.032 6.54222 174.779 -1.27939 144.25 0.170484C113.722 1.62036 84.346 12.2738 59.9851 30.7305C35.6241 49.1872 17.418 74.5833 7.75991 103.58C-1.89816 132.577 -2.55613 163.818 5.87248 193.196C13.3796 219.362 27.7822 242.96 47.4901 261.561C51.5065 265.352 57.8356 264.728 61.3532 260.471L72.9719 246.407C76.4895 242.149 75.8533 235.876 71.9225 231.996C58.1222 218.376 48.0098 201.395 42.6318 182.65C36.3317 160.691 36.8235 137.339 44.0426 115.665C51.2617 93.9907 64.8701 75.008 83.0791 61.2123C101.288 47.4166 123.245 39.4534 146.064 38.3697C168.884 37.286 191.497 43.1324 210.931 55.1403C230.366 67.1483 245.712 84.7559 254.953 105.648C264.193 126.541 266.896 149.741 262.705 172.198C259.128 191.368 250.67 209.232 238.223 224.098C234.677 228.333 234.639 234.638 238.544 238.544L251.443 251.443Z" fill="#4F46E5"/>
        </svg>
    </div>
</template>

<script>
import NavBtn from "@/components/NavBtn.vue"
export default {
    name:"SignUp",
    props:{
        type:{
            type:String,
            default:"Sign Up"
        }
    },
    components:{
        NavBtn
    }
}
</script>