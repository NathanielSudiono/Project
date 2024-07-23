<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col>
          <HomeDashboard />
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeDashboard from '../components/Home_dashboard'; 
export default {
  name: 'HomeView',

  components: {
    
    HomeDashboard
  },

  data: () => ({}),

  mounted() {}
};
</script>

<style scoped>
/* Add your styles here */
</style>