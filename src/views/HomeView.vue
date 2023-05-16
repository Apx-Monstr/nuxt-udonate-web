<template>
  <div class=" pop text-[#1E293B]">
    <Header/>
    <Hero/>
    <steps/>
    <HomeDonate/>
    <router-link to="/angelDonor">
    <AngelDonor/>
    </router-link>
    <DownloadApp/>
    <Footer/>
    <TermsBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import steps from '@/components/steps.vue';
import AngelDonor from '@/components/AngelDonor.vue';
import DownloadApp from '@/components/DownloadApp.vue';
import Footer from "@/components/Footer.vue";
import TermsBar from "@/components/TermsBar";
import HomeDonate from "@/components/HomeDonate"
export default {
  name: 'HomeView',
  components: {
    Header,
    Hero,
    steps,
    AngelDonor,
    DownloadApp,
    Footer,
    TermsBar,
    HomeDonate
  }
}
</script>
