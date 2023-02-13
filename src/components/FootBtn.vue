<template>
    <div>
        <button class = "py-2 text-[#0f172a]">
            {{title}}
        </button>
    </div>
</template>

<script>
export default {
    name:"FootBtn",
    props:{
        title:{
            type:String,
            default:"Helllooo"
        },
    },
}
</script>