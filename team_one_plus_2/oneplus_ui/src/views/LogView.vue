<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        
        <v-col>
          <LogHistory />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import LogHistory from '../components/Log_history';

export default {
  name: 'LogView',

  components: {
    
    LogHistory
  },

  data: () => ({}),

  mounted() {}
};
</script>

<style scoped>
/* Add your styles here */
</style>
