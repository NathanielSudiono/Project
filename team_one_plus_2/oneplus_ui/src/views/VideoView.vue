<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col>
          <ImageDetect />
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageDetect from '../components/Video_detect';

export default {
  name: 'ImageView',

  components: {
    ImageDetect
    
  },

  data: () => ({}),

  mounted() {}
};
</script>

<style scoped>
/* Add your styles here */
</style>