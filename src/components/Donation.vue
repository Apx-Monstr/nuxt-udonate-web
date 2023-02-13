<template>
    <div class = "w-[320px] h-[175px] rounded bg-red-600"> 
        {{ text["add"] }}
    </div>
</template>

<script>
export default {
    name:"Donation",
    props:{
        category:{
            type:String,
            default:"Books"
        },
        name:{
            type:String,
            default:"Old Books"
        },
        to:{
            type:String,
            default:"ABC Library"
        },
        text:{
            type:String,
            default:"Helloooo"
        }
    }
}
</script>