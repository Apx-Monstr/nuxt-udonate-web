<template>
    <div class = "px-[184px] py-[18px] w-full flex bg-[#ffffff] justify-between">
        <div class="w-[260px] h-[370px] py-8 text-4xl font-bold">
            <p class="text-sm">
                make an impact
            </p>
            Donate...
        </div>
        <DonateCard/>
        <DonateCard type = "Books"/>
        <DonateCard type = "Cloth"/>
    </div>
</template>

<script>
import DonateCard from "@/components/DonateCard.vue"
export default {
    name:"HomeDonate",
    components:{
        DonateCard
    }
}
</script>