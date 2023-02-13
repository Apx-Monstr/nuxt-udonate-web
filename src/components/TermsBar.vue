<template>
    <div class="h-[100px] px-[184px] py-[18px] w-full flex bg-[#ffffff] border-t-2 ">
        <div class=" w-full flex justify-between items-center text-sm">
            <div>
                © 2023 | uDonate | All rights reserved
            </div>
            <div class="">
                <span class = "pr-4">
                    Terms
                </span>
                <span>
                    Privacy
                </span>
            </div>
            <NavBtn title = "Download Now" bgColor="bg-[#4f46e5] text-[#e2e8f0] hover:bg-[#4f46e5bc] hover:text-[#e2e8f0]"/>
        </div>
    </div>
</template>

<script>
import NavBtn from "@/components/NavBtn.vue"
export default {
    name:"TermsBar",
    components:{
        NavBtn
    }
}
</script>