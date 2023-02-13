<template>
    <div class = "z-10 h-[100px] px-[184px] py-[18px] w-full sticky top-0 left-0 flex flex-row bg-[#ffffff] pop">
        <div v-if="loggedIn" class="flex flex-1 justify-between px-[16px]">
            <div class="flex gap-[12px] items-center h-full ">
                <NavBtn title="For Charities"/>
                <NavBtn title = "For Individuals"/>
            </div>
            <Icon/>
            <div v-if="loggedIn" class="flex gap-[12px] h-full items-center ">
                <NavBtn title = "How it works"/>
                <NavBtn title = "Sign Up"/>
                <NavBtn title = "Join Now" bgColor="bg-[#4f46e5] text-[#e2e8f0] hover:bg-[#4f46e5bc] hover:text-[#e2e8f0]"/>
            </div>
        </div>
        <div class="flex flex-1 px-[16px]">
            <Icon/> 
            <div class="flex h-full items-center pl-4 text-2xl font-bold flex-1">
                | {{ type }}
            </div>
            <NavBtn title = "Donate" class = "self-center" bgColor="bg-[#4f46e5] text-[#e2e8f0] hover:bg-[#4f46e5bc] hover:text-[#e2e8f0]"/>
        </div>
    </div>
</template>
<script>
import NavBtn from './NavBtn.vue';
import Icon from './Icon.vue'
export default {
    name:"Header",
    components:{
        NavBtn,
        Icon
    },
    props:{
        loggedIn:{
            type:Boolean,
            default:false,
        },
        type:{
            type:String,
            default:"Individual"
        }
    }
}
</script>