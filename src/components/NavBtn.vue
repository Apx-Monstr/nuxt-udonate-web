<template>
    <div>
        <button class = "p-4 py-2 rounded-full text-[#0f172a] hover:text-[#0f172a]" :class = "bgColor">
            {{title}}
        </button>
    </div>
</template>

<script>
export default {
    name:"NavBtn",
    props:{
        title:{
            type:String,
            default:"Helllooo"
        },
        bgColor:{
            default:"hover:bg-[#e2e8f0]",
        }
    },
}
</script>