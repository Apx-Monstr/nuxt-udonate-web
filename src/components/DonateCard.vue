<template>
    <div class = "w-[260px] h-[370px] bg-[#e2e8f0] hover:border-[#DB2777] hover:border-2 flex flex-col justify-center items-center text-2xl font-bold text-[#1E293B] gap-10 rounded">
            <img v-if="type === 'Medicine'" class = "h-40" src="../assets/Medicine.png" alt="" srcset="">
            <img v-else-if="type === 'Books'" class = "h-40" src="../assets/Books.png" alt="" srcset="">
            <img v-else-if="type === 'Cloth'" class = "h-40" src="../assets/Cloth.png" alt="" srcset="">
            {{ type }}
    </div>
</template>

<script>
export default {
    name:"DonateCard",
    props:{
        type:{
            type:String,
            default:"Medicine"
        }
    },
}
</script>