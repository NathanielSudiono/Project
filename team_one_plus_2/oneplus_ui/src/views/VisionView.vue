<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col>
          <VisionDetect />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

import VisionDetect from '../components/Vision_detect';

export default {
  name: 'VisionView',

  components: {
    VisionDetect
    
  },

  data: () => ({}),

  mounted() {}
};
</script>

<style scoped>
/* Add your styles here */
</style>
